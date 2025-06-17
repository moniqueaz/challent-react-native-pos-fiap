import { View, Text } from "react-native";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
const Pages = () => {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <Section title="Status Produção">
        <Text>Status Produção</Text>
      </Section>
      <Section title="Estoque">
        <Text>Estoque</Text>
      </Section>
    </View>
  );
};

export default Pages;
