import { View, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { CardFull } from "@/components/card-full";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { Table } from "@/components/table";
import { useSales } from "@/hooks/useSales";
import { useProduct } from "@/hooks/useProduct";
import { colors } from "@/styles/colors";

const Pages = () => {
  const { data: sales, salesByProduct } = useSales();
  const { productMapping } = useProduct();

  console.log("Sales Data:", sales);

  const totalProducts =
    sales?.reduce((acc, sale) => acc + (sale?.amount || 0), 0) || 0;
  const totalProfit =
    sales?.reduce((acc, sale) => acc + (sale?.profit || 0), 0) || 0;
  const totalSales =
    sales?.reduce((acc, sale) => acc + (sale?.total_sale || 0), 0) || 0;

  const percentageProfit =
    totalProfit && totalSales
      ? ((totalProfit / totalSales) * 100).toFixed(2)
      : "0.00";
  const percentageSales =
    totalSales && totalProducts
      ? ((totalSales / totalProducts) * 100).toFixed(2)
      : "0.00";

  const barChartData = Object.keys(salesByProduct || {}).map((productId) => {
    const product = productMapping[productId] || `Produto ${productId}`;
    const { totalProfit } = salesByProduct[productId];
    return {
      value: totalProfit || 0,
      label: product,
      frontColor: colors.blue[200],
    };
  });

  const tableData = Object.keys(salesByProduct || {}).map((productId) => {
    const product = productMapping[productId] || `Produto ${productId}`;
    const { totalAmount, totalSales } = salesByProduct[productId];
    return [product, totalAmount.toString(), `R$ ${totalSales.toFixed(2)}`];
  });

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <CardFull
          value={`R$ ${totalSales.toFixed(2)}`}
          label="Total de Vendas"
        />

        <View style={{ flexDirection: "row", gap: 16 }}>
          <Card
            value={`R$ ${totalSales.toFixed(2)}`}
            label="Total de Vendas"
            percentage={percentageSales}
          />
          <Card
            value={`R$ ${totalProfit.toFixed(2)}`}
            label="Lucro Total"
            percentage={percentageProfit}
          />
        </View>
        <Section title="Lucro Por Produto">
          <Charts.Bar data={barChartData} />
        </Section>
        <Section title="Produtos em Lote">
          <Table
            header={["Produto", "Quantidade", "Preço Total"]}
            data={tableData}
          />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
