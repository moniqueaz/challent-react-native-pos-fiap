import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useProduct } from "@/hooks/useProduct";

const NewProductPage = () => {
  const { productNames, criarProduto } = useProduct();
  const statusOptions = [
    { name: "Aguardando" },
    { name: "Em produção" },
    { name: "Já colhido" },
  ];

  const [form, setForm] = useState({
    productName: "",
    producedQuantity: "",
    price: "",
    productionDate: "",
    address: "",
    status: "",
    harvest: "",
  });

  const formatCurrency = (value: string): string => {
    const numericValue = Number(value.replace(/\D/g, "")) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "price") {
      const formattedValue = formatCurrency(value);
      return setForm({ ...form, [field]: formattedValue });
    }
    setForm({ ...form, [field]: value });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 30}
    >
      <ScrollView>
        <FormTemplate
          title="Novo Produto"
          inputs={[
            {
              label: "Nome do produto:",
              placeholder: "Selecione o nome do produto",
              name: "productName",
              value: form.productName,
              type: "dropdown",
              options: productNames.map(({ name }) => name),
            },
            {
              label: "Quantidade produzida:",
              placeholder: "Digite a quantidade produzida",
              name: "producedQuantity",
              value: form.producedQuantity,
              keyboardType: "numeric",
            },
            {
              label: "Valor Unitário:",
              placeholder: "Digite o valor unitário",
              name: "price",
              value: form.price,
              keyboardType: "numeric",
            },
            {
              label: "Data:",
              placeholder: "Selecione a data",
              name: "productionDate",
              value: form.productionDate,
              type: "date",
            },
            {
              label: "Endereço:",
              placeholder: "Digite o endereço",
              name: "address",
              value: form.address,
            },
            {
              label: "Status:",
              placeholder: "Selecione o status",
              name: "status",
              value: form.status,
              type: "dropdown",
              options: statusOptions.map(({ name }) => name),
            },
            {
              label: "Safra:",
              placeholder: "Digite a safra",
              name: "harvest",
              value: form.harvest,
              keyboardType: "numeric",
            },
          ]}
          onInputChange={handleInputChange}
          buttons={[
            {
              text: "Cancelar",
              onPress: () => Alert.alert("Cancelado!"),
              variant: "cancel",
            },
            {
              text: "Adicionar",
              onPress: () => {
                console.log("form: ", form);
                // criarProduto(form);
                Alert.alert("Produto adicionado!");
              },
              variant: "submit",
            },
          ]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewProductPage;
