import React, { useState } from "react";
import { FormTemplate } from "@/components/form-template";
import { Alert } from "react-native";

const NewSalePage = () => {
  const productOptions = [
    { productName: "Maçã", harvest: "2023", quantity: "50", unitPrice: "2.50" },
    {
      productName: "Banana",
      harvest: "2022",
      quantity: "100",
      unitPrice: "1.80",
    },
    { productName: "Uva", harvest: "2023", quantity: "20", unitPrice: "5.00" },
  ];

  const [form, setForm] = useState({
    productHarvest: "",
    quantity: "",
    unitPrice: "",
    saleUnitPrice: "",
    saleDate: "",
    totalProfit: "",
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
      }));
    } else if (field === "productHarvest") {
      const selectedProduct = productOptions.find(
        (option) => `${option.productName} - ${option.harvest}` === value
      );
      if (selectedProduct) {
        setForm((prevForm) => ({
          ...prevForm,
          productHarvest: value,
          quantity: selectedProduct.quantity,
          unitPrice: formatCurrency(selectedProduct.unitPrice),
          totalProfit: calculateProfit(
            form.saleUnitPrice,
            selectedProduct.quantity,
            selectedProduct.unitPrice
          ),
        }));
      }
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  return (
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
          onPress: () => Alert.alert("Cancelado!"),
          variant: "cancel",
        },
        {
          text: "Registrar Venda",
          onPress: () => Alert.alert("Venda registrada com sucesso!"),
          variant: "submit",
        },
      ]}
    />
  );
};

export default NewSalePage;
