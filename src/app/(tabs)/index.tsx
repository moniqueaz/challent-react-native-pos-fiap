import { View, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { CardFull } from "@/components/card-full";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { Table } from "@/components/table";
import { useSales } from "@/hooks/useSales";

const data = [
  ["Produto A", "10", "$20.00"],
  ["Produto B", "5", "$15.00"],
  ["Produto C", "8", "$30.00"],
  ["Produto D", "12", "$25.00"],
  ["Produto E", "7", "$18.00"],
  ["Produto F", "3", "$22.00"],
  ["Produto G", "9", "$27.00"],
  ["Produto H", "4", "$19.00"],
  ["Produto I", "6", "$21.00"],
  ["Produto J", "11", "$24.00"],
];
const Pages = () => {
  const sales = useSales();
  const totalProducts = sales?.reduce((acc, sale) => acc + sale?.amount, 0);
  const totalProfit = sales?.reduce((acc, sale) => acc + sale?.profit, 0);
  const totalSales = sales?.reduce((acc, sale) => acc + sale?.price, 0);

  const percentageProfit =
    (!!totalProfit &&
      !!totalSales &&
      ((totalProfit / totalSales) * 100).toFixed(2)) ||
    "0.00";
  const percentageSales =
    (!!totalSales &&
      !!totalProducts &&
      ((totalSales / totalProducts) * 100).toFixed(2)) ||
    "0.00";

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <CardFull value={totalProducts} label="Total de produtos" />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Card
            value={totalSales}
            label="Total de vendas"
            percentage={percentageSales}
          />
          <Card
            value={totalProfit}
            label="Total de lucro"
            percentage={percentageProfit}
          />
        </View>
        <Section title="Lucro Por Produto">
          <Charts.Bar />
        </Section>
        <Section title="Produtos em Lote">
          <Table header={["Produto", "Quantidade", "Preço"]} data={data} />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
