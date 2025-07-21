import { View, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { useProduct } from "@/hooks/useProduct";

const formatPercentage = (value: number) => `${value.toFixed(2)}%`;

const Pages = () => {
  const {
    totalProducts,
    getTotalStatusProducts,
    data,
    getTotalProduction,
    getTotalStockByYear,
  } = useProduct();

  const chardData: { [key: number]: number } = getTotalStockByYear(data);

  const dataChart = Object.keys(chardData).map((year) => ({
    value: chardData[parseInt(year)],
    label: year,
  }));

  const statusProducts: { [key: string]: string } =
    getTotalStatusProducts(data);

  const productionData = getTotalProduction(data);

  const pieChartData = [
    { value: productionData.percent, color: "#4caf50" }, 
    { value: 100 - productionData.percent, color: "#f44336" }, 
  ];
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          {Object.keys(statusProducts)?.map((statusKey) => (
            <Card
              key={statusKey}
              value={statusProducts?.[statusKey] || "0"}
              label={statusKey}
            />
          ))}
          <Card value={totalProducts.toString()} label="Estoque" />
        </View>
        <Section title="Status Produção">
          <Charts.Pie
            total={formatPercentage(getTotalProduction(data).percent)}
            label="Total"
            data={pieChartData}
          />
        </Section>
        <Section title="Estoque">
          <Charts.Line data={dataChart} />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
