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
import { formatCurrency } from "@/utils/formatter";

const NewGoalPage = () => {
  const { addGoal, products, data } = useGoals();

  const initialFormState = {
    productName: "",
    date: "",
    current_profit: "",
    desired_profit: "",
    completed: false,
  };

  const [form, setForm] = useState(initialFormState);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    if (field === "completed") {
      setForm((prev) => ({
        ...prev,
        [field]: value === "true",
      }));
      return;
    }
    if (field === "current_profit" || field === "desired_profit") {
      const formattedValue = formatCurrency(value);
      setForm((prev) => ({
        ...prev,
        [field]: formattedValue,
      }));
      return;
    }

    if (field === "productName") {
      const selectedProduct = products.find(
        (p) => `${p.name} - ${p.harvest}` === value
      );
      const desiredProfit = data.find(
        (goal) => goal.id_product === selectedProduct?.id_product
      )?.desired_profit;

      if (selectedProduct) {
        setForm((prev) => {
          return {
            ...prev,
            [field]: value,
            ["desired_profit"]: desiredProfit
              ? formatCurrency(desiredProfit.toString())
              : "",
            id_product: selectedProduct.id_product,
          };
        });
        setIsUpdating(!!desiredProfit);
        return;
      }
    }

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearForm = () => {
    setForm(initialFormState);
  };

  const handleSubmit = async () => {
    try {
      const idProduct =
        products.find((p) => `${p.name} - ${p.harvest}` === form.productName)
          ?.id_product || "";

      await addGoal(
        {
          current_profit: Number(form.desired_profit.replace(/\D/g, "")) || 0,
          desired_profit: Number(form.desired_profit.replace(/\D/g, "")) || 0,
          completed: form.completed,
          id_product: idProduct,
          date: new Date().toISOString(),
        },
        isUpdating
      );

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
              options: products.map(
                (option) => `${option.name} - ${option.harvest}`
              ),
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
