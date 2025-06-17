import { View, Text } from "react-native";
import { Section } from "@/components/section";
const Pages = () => {
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <Section title="Metas">
        <Text>Metas</Text>
      </Section>
      <Section title="Meta Morango">
        <Text>Meta Morango</Text>
      </Section>
      <Section title="Meta Milho">
        <Text>Meta Milho</Text>
      </Section>
      <Section title="Meta Batata">
        <Text>Meta Batata</Text>
      </Section>
    </View>
  );
};

export default Pages;
