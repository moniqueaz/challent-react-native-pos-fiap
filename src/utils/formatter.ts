export const formatCurrency = (value: string): string => {
  const numericValue = Number(value.replace(/\D/g, "")) / 100;
  return numericValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
