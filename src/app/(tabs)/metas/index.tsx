import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { colors } from "@/styles/colors";
import { useGoals } from "@/hooks/useGoals";

const Pages = () => {
  const { goalsWithProgress } = useGoals();

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        {goalsWithProgress && goalsWithProgress.length > 0 ? (
          goalsWithProgress.map((goal) => (
            <Section key={goal.id_product} title={`Meta ${goal.productName}`}>
              <Charts.Pie
                label={goal.productName}
                total={`${goal.progress.toFixed(2)}%`}
                labelStyle={{
                  color: colors.blue[200],
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              />
            </Section>
          ))
        ) : (
          <Text style={{ color: colors.gray[400], textAlign: "center" }}>
            Nenhuma meta disponível.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Pages;
