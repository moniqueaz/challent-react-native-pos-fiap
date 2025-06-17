import { View, Text } from "react-native";
import { Card } from "@/components/card";
import { CardFull } from "@/components/card-full";
import { Section } from "@/components/section";
const Pages = () => {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <CardFull />
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Card />
        <Card />
      </View>
      <Section title="Lucro Por Produto">
        <Text>Lucro Por Produto</Text>
      </Section>
      <Section title="Produtos em Lote">
        <Text>Produtos em Lote</Text>
      </Section>
    </View>
  );
};

export default Pages;
