export const calculateProfit = (
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

export const calculateTotalSale = (
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
