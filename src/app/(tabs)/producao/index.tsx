import { View, ScrollView } from "react-native";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { useProduct } from "@/hooks/useProduct";
const Pages = () => {
  useProduct();
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          <Card value="3,456" label="Em Produção" percentage="+2.5%" />
          <Card value="3,456" label="Aguardando" percentage="+2.5%" />
          <Card value="3,456" label="Colhido" percentage="+2.5%" />
          <Card value="3,456" label="Estoque" percentage="+2.5%" />
        </View>
        <Section title="Status Produção">
          <Charts.Pie total="70%" label="Total" />
        </Section>
        <Section title="Estoque">
          <Charts.Line />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
