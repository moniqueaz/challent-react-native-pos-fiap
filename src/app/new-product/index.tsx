import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";

const NewProductPage = () => {
  const fruitOptions = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

  const [form, setForm] = useState({
    productName: "",
    producedQuantity: "",
    price: "",
    productionDate: "",
    address: "",
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
      setForm({ ...form, [field]: formattedValue });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  return (
    <FormTemplate
      title="Novo Produto"
      inputs={[
        {
          label: "Nome do produto:",
          placeholder: "Selecione o nome do produto",
          name: "productName",
          value: form.productName,
          type: "dropdown",
          options: fruitOptions,
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
          label: "Safra:",
          placeholder: "Digite a safra",
          name: "harvest",
          value: form.harvest,
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
          onPress: () => Alert.alert("Produto Salvo!"),
          variant: "submit",
        },
      ]}
    />
  );
};

export default NewProductPage;
