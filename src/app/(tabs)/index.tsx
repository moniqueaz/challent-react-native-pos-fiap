import { View, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { CardFull } from "@/components/card-full";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { Table } from "@/components/table";

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
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <CardFull />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Card />
          <Card />
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
