import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useNewSales } from "@/hooks/useNewSales";

const NewSalePage = () => {
  const { products, createSales } = useNewSales();
  const productOptions = products.map((product) => ({
    productName: product.name,
    harvest: product.harvest,
    quantity: product.amount,
    unitPrice: product.price.toString(),
    productId: product.id_product,
  }));

  const [form, setForm] = useState({
    productHarvest: "",
    quantity: "",
    unitPrice: "",
    saleUnitPrice: "",
    saleDate: "",
    totalProfit: "",
    totalSale: "",
  });

  const formatCurrency = (value: string): string => {
    const numericValue = Number(value.replace(/\D/g, "")) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateProfit = (
    saleUnitPrice: string,
    quantity: string,
    unitPrice: string
  ): string => {
    const saleValue =
      parseFloat(saleUnitPrice.replace(/[R$\s.]/g, "").replace(",", ".")) || 0;
    const quantityValue = parseFloat(quantity) || 0;
    const costValue =
      parseFloat(unitPrice.replace(/[R$\s.]/g, "").replace(",", ".")) || 0;

    if (isNaN(saleValue) || isNaN(quantityValue) || isNaN(costValue)) {
      return "R$ 0,00";
    }

    const profit = saleValue * quantityValue - costValue * quantityValue;
    return profit.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateTotalSale = (
    saleUnitPrice: string,
    quantity: string
  ): string => {
    const saleValue =
      parseFloat(saleUnitPrice.replace(/[R$\s.]/g, "").replace(",", ".")) || 0;
    const quantityValue = parseFloat(quantity) || 0;

    if (isNaN(saleValue) || isNaN(quantityValue)) {
      return "R$ 0,00";
    }

    const totalSale = saleValue * quantityValue;
    return totalSale.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "saleUnitPrice") {
      const formattedValue = formatCurrency(value);
      setForm((prev) => ({
        ...prev,
        saleUnitPrice: formattedValue,
        totalProfit: calculateProfit(
          formattedValue,
          form.quantity,
          form.unitPrice
        ),
        totalSale: calculateTotalSale(formattedValue, form.quantity),
      }));
    } else if (field === "productHarvest") {
      const selectedProduct = productOptions.find(
        (option) => `${option.productName} - ${option.harvest}` === value
      );
      if (selectedProduct) {
        setForm((prevForm) => ({
          ...selectedProduct,
          ...prevForm,
          productHarvest: value,
          quantity: selectedProduct.quantity,
          unitPrice: formatCurrency(selectedProduct.unitPrice),
          totalProfit: calculateProfit(
            form.saleUnitPrice,
            selectedProduct.quantity,
            selectedProduct.unitPrice
          ),
          totalSale: calculateTotalSale(
            form.saleUnitPrice,
            selectedProduct.quantity
          ),
        }));
      }
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleClearForm = () => {
    setForm({
      productHarvest: "",
      quantity: "",
      unitPrice: "",
      saleUnitPrice: "",
      saleDate: "",
      totalProfit: "",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 30}
    >
      <ScrollView>
        <FormTemplate
          title="Nova Venda"
          inputs={[
            {
              label: "Produto - Safra:",
              placeholder: "Selecione o produto e a safra",
              name: "productHarvest",
              value: form.productHarvest,
              type: "dropdown",
              options: productOptions.map(
                (option) => `${option.productName} - ${option.harvest}`
              ),
            },
            {
              label: "Quantidade:",
              placeholder: "Quantidade (automático)",
              name: "quantity",
              value: form.quantity,
              keyboardType: "numeric",
              disabled: true,
            },
            {
              label: "Valor Unitário:",
              placeholder: "R$ 0,00",
              name: "unitPrice",
              value: form.unitPrice,
              disabled: true,
            },
            {
              label: "Valor de Venda por Unidade:",
              placeholder: "Digite o valor de venda por unidade",
              name: "saleUnitPrice",
              value: form.saleUnitPrice,
              keyboardType: "numeric",
            },
            {
              label: "Lucro Total:",
              placeholder: "Lucro total (automático)",
              name: "totalProfit",
              value: form.totalProfit,
              disabled: true,
            },
            {
              label: "Total da Venda:",
              placeholder: "Total da venda (automático)",
              name: "totalSale",
              value: form.totalSale,
              disabled: true,
            },
            {
              label: "Data da Venda:",
              placeholder: "Selecione a data",
              name: "saleDate",
              value: form.saleDate,
              type: "date",
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
              text: "Registrar Venda",
              onPress: () => {
                createSales(form);
                handleClearForm();
                Alert.alert("Venda registrada com sucesso!");
              },
              variant: "submit",
            },
          ]}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewSalePage;
