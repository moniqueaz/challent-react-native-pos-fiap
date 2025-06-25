import { View, Text, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
const Pages = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
        <Section title="Status Produção">
          <Charts.Pie />
        </Section>
        <Section title="Estoque">
          <Text>Estoque</Text>
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
