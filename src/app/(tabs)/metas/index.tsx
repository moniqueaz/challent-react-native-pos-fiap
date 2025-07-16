import { View, Text, ScrollView } from "react-native";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { colors } from "@/styles/colors";
import { useGoals } from "@/hooks/useGoals";
const Pages = () => {
  useGoals();
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <Section title="Metas">
          <Charts.Pie
            label="Cricket"
            total="70%"
            labelStyle={{
              color: colors.blue[200],
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </Section>
        <Section title="Meta Morango">
          <Charts.Pie
            label="Morango"
            total="80%"
            labelStyle={{
              color: colors.blue[200],
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </Section>
        <Section title="Meta Milho">
          <Charts.Pie
            label="Milho"
            total="90%"
            labelStyle={{
              color: colors.blue[200],
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </Section>
        <Section title="Meta Batata">
          <Charts.Pie
            label="Batata"
            total="85%"
            labelStyle={{
              color: colors.blue[200],
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
