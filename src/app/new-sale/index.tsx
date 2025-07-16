import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";

const NewSalePage = () => {
  const [form, setForm] = useState({
    customerName: "",
    quantity: "",
    unitPrice: "",
    saleDate: "",
    profit: "",
    uid: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <FormTemplate
      title="Nova Venda"
      inputs={[
        {
          label: "Nome do cliente:",
          placeholder: "Digite o nome do cliente",
          name: "customerName",
          value: form.customerName,
        },
        {
          label: "Quantidade",
          placeholder: "Digite a quantidade",
          name: "quantity",
          value: form.quantity,
          keyboardType: "numeric",
        },
        {
          label: "Valor unitário:",
          placeholder: "Digite o valor unitário",
          name: "unitPrice",
          value: form.unitPrice,
          keyboardType: "numeric",
        },
        {
          label: "Data da venda:",
          placeholder: "Selecione a data",
          name: "saleDate",
          value: form.saleDate,
          type: "date",
        },
        {
          label: "Lucro:",
          placeholder: "Digite o lucro",
          name: "profit",
          value: form.profit,
          keyboardType: "numeric",
        },
        {
          label: "UID:",
          placeholder: "Digite o UID",
          name: "uid",
          value: form.uid,
        },
      ]}
      onInputChange={handleInputChange}
      buttons={[
        { text: "Cancelar", onPress: () => Alert.alert("Cancelado!") },
        { text: "Adicionar", onPress: () => Alert.alert("Venda Registrada!") },
      ]}
    />
  );
};

export default NewSalePage;
