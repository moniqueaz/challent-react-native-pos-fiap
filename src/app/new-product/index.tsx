import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";

const NewProductPage = () => {
  const [form, setForm] = useState({
    productName: "",
    producedQuantity: "",
    price: "",
    productionDate: "",
    address: "",
    harvest: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <FormTemplate
      title="Novo Produto"
      inputs={[
        {
          label: "Nome do produto:",
          placeholder: "Digite o nome do produto",
          name: "productName",
          value: form.productName,
        },
        {
          label: "Quantidade produzida:",
          placeholder: "Digite a quantidade produzida",
          name: "producedQuantity",
          value: form.producedQuantity,
          keyboardType: "numeric",
        },
        {
          label: "Valor:",
          placeholder: "Digite o valor",
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
        { text: "Adicionar", onPress: () => Alert.alert("Produto Salvo!") },
      ]}
    />
  );
};

export default NewProductPage;
