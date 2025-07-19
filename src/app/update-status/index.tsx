import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";
import { router } from "expo-router";
import { useProduct } from "@/hooks/useProduct";

const UpdateStatusPage = () => {
  const { data: products, statusOptions, updateByProductId } = useProduct();
  const productOptions = products.map(
    (product) => `${product.name} - ${product.harvest}`
  );

  const [form, setForm] = useState({
    product: { name: "", id_product: "", status: "" },
    status: "",
  });

  const handleClearForm = () => {
    setForm({
      product: { name: "", id_product: "", status: "" },
      status: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "product") {
      const selectedProduct = products.find(
        (product) => `${product.name} - ${product.harvest}` === value
      );
      if (selectedProduct) {
        setForm((prevForm) => ({
          ...prevForm,
          product: selectedProduct,
          status: selectedProduct.status,
        }));
      }
      return;
    }

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
          value: form.product.name,
          type: "dropdown",
          options: productOptions,
          required: true,
        },
        {
          label: "Status:",
          placeholder: "Selecione o Status",
          name: "status",
          value: form.status,
          type: "dropdown",
          options: statusOptions.map((name) => name),
          required: true,
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
          text: "Atualizar",
          onPress: () => {
            Alert.alert("Status Atualizado!");
            updateByProductId(form.product.id_product, {
              ...form.product,
              status: form.status,
            });
            handleClearForm();
          },
          variant: "submit",
        },
      ]}
    />
  );
};

export default UpdateStatusPage;
