import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { useGoals } from "@/hooks/useGoals";
import { colors } from "@/styles/colors";

const GoalsPage = () => {
  const { goalsWithProgress } = useGoals();

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        {goalsWithProgress?.length > 0 ? (
          goalsWithProgress.map((goal) => {
            const getColor = (progress: number) => {
              if (progress >= 100) return colors.green[400];
              if (progress >= 75) return colors.blue[200];
              return colors.red[400];
            };

            const pieData = [
              {
                value: Math.min(goal.progress, 100),
                color: getColor(goal.progress),
              },
              {
                value: Math.max(0, 100 - goal.progress),
                color: colors.gray[300],
              },
            ];

            return (
              <Section
                key={goal.id_product}
                title={`Meta: ${goal.productName}`}
              >
                <Charts.Pie
                  total={`${goal.progress.toFixed(2)}%`}
                  data={pieData}
                  labelStyle={{
                    color: colors.gray[400],
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                />
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    color: colors.gray[400],
                  }}
                >
                  {`Alcançou ${goal.progress.toFixed(2)}% da meta desejada.`}
                </Text>
              </Section>
            );
          })
        ) : (
          <Text
            style={{
              textAlign: "center",
              color: colors.gray[400],
              fontSize: 16,
            }}
          >
            Nenhuma meta disponível.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default GoalsPage;
