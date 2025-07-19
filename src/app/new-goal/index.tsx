import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { FormTemplate } from "@/components/form-template";
import { router } from "expo-router";
import { useGoals } from "@/hooks/useGoals";
import { useProduct } from "@/hooks/useProduct";

const NewGoalPage = () => {
  const { addGoal } = useGoals();
  const { productNames } = useProduct();

  const initialFormState = {
    productName: "",
    date: "",
    current_profit: "",
    desired_profit: "",
    completed: false,
  };

  const [form, setForm] = useState(initialFormState);

  const formatCurrency = (value: string): string => {
    const numericValue = Number(value.replace(/\D/g, "")) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "completed") {
      setForm((prev) => ({
        ...prev,
        [field]: value === "true",
      }));
    } else if (field === "current_profit" || field === "desired_profit") {
      const formattedValue = formatCurrency(value);
      setForm((prev) => ({
        ...prev,
        [field]: formattedValue,
      }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleClearForm = () => {
    setForm(initialFormState);
  };

  const handleSubmit = async () => {
    try {
      const idProduct =
        productNames.find((p) => p.name === form.productName)?.id || "";

      await addGoal({
        date: form.date,
        current_profit: Number(form.current_profit.replace(/\D/g, "")) || 0,
        desired_profit: Number(form.desired_profit.replace(/\D/g, "")) || 0,
        completed: form.completed,
        id_product: idProduct,
      });

      Alert.alert("Meta salva com sucesso!");

      handleClearForm();

      router.push("/(tabs)");
    } catch (err) {
      Alert.alert("Erro ao salvar meta.");
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 30}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <FormTemplate
          title="Nova Meta"
          inputs={[
            {
              label: "Nome do produto:",
              placeholder: "Selecione o nome do produto",
              name: "productName",
              value: form.productName,
              type: "dropdown",
              options: productNames.map(({ name }) => name),
              required: true,
            },
            {
              label: "Data",
              placeholder: "Selecione a data",
              name: "date",
              value: form.date,
              type: "date",
              required: true,
            },
            {
              label: "Lucro atual",
              placeholder: "Ex: R$ 3.000,00",
              name: "current_profit",
              value: form.current_profit,
              keyboardType: "numeric",
              required: true,
            },
            {
              label: "Lucro desejado",
              placeholder: "Ex: R$ 4.500,00",
              name: "desired_profit",
              value: form.desired_profit,
              keyboardType: "numeric",
              required: true,
            },
            {
              label: "Meta concluída",
              placeholder: "",
              name: "completed",
              value: form.completed.toString(),
              type: "checkbox",
            },
          ]}
          onInputChange={handleInputChange}
          buttons={[
            {
              text: "Cancelar",
              onPress: () => router.back(),
              variant: "cancel",
            },
            {
              text: "Salvar",
              onPress: handleSubmit,
              variant: "submit",
            },
          ]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewGoalPage;
