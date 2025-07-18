import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useProduct } from "@/hooks/useProduct";
import { router } from "expo-router";
import { formatCurrency } from "@/utils/formatter";

const NewProductPage = () => {
  const { productNames, criarProduto, statusOptions } = useProduct();

  const [form, setForm] = useState({
    productName: "",
    producedQuantity: "",
    value: "",
    productionDate: "",
    address: "",
    status: "",
    harvest: "",
  });

  const handleInputChange = (field: string, value: string) => {
    if (field === "value") {
      const formattedValue = formatCurrency(value);
      return setForm({ ...form, [field]: formattedValue });
    }
    setForm({ ...form, [field]: value });
  };

  const handleClearForm = () => {
    setForm({
      productName: "",
      producedQuantity: "",
      value: "",
      productionDate: "",
      address: "",
      status: "",
      harvest: "",
    });
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
              name: "value",
              value: form.value,
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
              options: statusOptions.map((name) => name),
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
              onPress: () => router.push("/(tabs)"),
              variant: "cancel",
            },
            {
              text: "Adicionar",
              onPress: () => {
                criarProduto(form);
                Alert.alert("Produto adicionado!");
                handleClearForm();
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
