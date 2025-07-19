import { createCollectionHook } from "@/services/createCollectionHook";

export type Sale = {
  id: string;
  amount: number;
  date: string;
  id_product: string;
  price: number;
  profit: number;
  total_sale: number;
  uid: string;
};

export const useSales = () => {
  const { data } = createCollectionHook<Sale>("sales");

  const calculateSalesAndProfitByProduct = (sales: Sale[]) => {
    return sales.reduce((acc, sale) => {
      if (!acc[sale.id_product]) {
        acc[sale.id_product] = {
          totalSales: 0,
          totalProfit: 0,
          totalAmount: 0,
        };
      }
      acc[sale.id_product].totalSales += sale.total_sale;
      acc[sale.id_product].totalProfit += sale.profit;
      acc[sale.id_product].totalAmount += sale.amount;
      return acc;
    }, {} as Record<string, { totalSales: number; totalProfit: number; totalAmount: number }>);
  };

  const groupSalesByYear = (sales: Sale[]) => {
    return sales.reduce((acc: { [year: number]: number }, sale) => {
      const year = new Date(sale.date).getFullYear();
      acc[year] = (acc[year] || 0) + sale.total_sale;
      return acc;
    }, {});
  };

  return {
    data,
    salesByProduct: data ? calculateSalesAndProfitByProduct(data) : {},
    salesByYear: data ? groupSalesByYear(data) : {},
  };
};
