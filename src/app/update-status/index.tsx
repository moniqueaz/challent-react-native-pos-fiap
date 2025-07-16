import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";

const UpdateStatusPage = () => {
  const productOptions = ["Produto A", "Produto B", "Produto C", "Produto D"];

  const [form, setForm] = useState({
    product: "",
    status: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <FormTemplate
      title="Atualizar Status"
      inputs={[
        {
          label: "Produto:",
          placeholder: "Selecione o Produto",
          name: "product",
          value: form.product,
          type: "dropdown",
          options: productOptions,
        },
        {
          label: "Status:",
          placeholder: "Selecione o Status",
          name: "status",
          value: form.status,
          type: "dropdown",
          options: ["Disponível", "Esgotado", "Em produção"],
        },
      ]}
      onInputChange={handleInputChange}
      buttons={[
        { text: "Cancelar", onPress: () => Alert.alert("Cancelado!") },
        { text: "Atualizar", onPress: () => Alert.alert("Status Atualizado!") },
      ]}
    />
  );
};

export default UpdateStatusPage;
