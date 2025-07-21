import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Section } from "@/components/section";
import { Charts } from "@/components/charts";
import { useGoals } from "@/hooks/useGoals";
import { colors } from "@/styles/colors";

const GoalsPage = () => {
  const { goalsWithProgress } = useGoals();
  const [showLegend, setShowLegend] = useState(false);

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <TouchableOpacity
            onPress={() => setShowLegend(!showLegend)}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <MaterialIcons
              name="info-outline"
              size={20}
              color={colors.gray[400]}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.gray[400],
                textDecorationLine: "underline",
              }}
            >
              O que significam as cores?
            </Text>
          </TouchableOpacity>
          {showLegend && (
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: colors.green[400], fontSize: 14 }}>
                • Verde: Meta atingida.
              </Text>
              <Text style={{ color: colors.blue[200], fontSize: 14 }}>
                • Azul: Quase lá (75%-99%).
              </Text>
              <Text style={{ color: colors.red[400], fontSize: 14 }}>
                • Vermelho: Meta distante (&lt;75%).
              </Text>
            </View>
          )}
        </View>
        {goalsWithProgress?.length > 0 ? (
          goalsWithProgress.map((goal, index) => {
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
                key={goal.id_product + index}
                title={`Meta: ${goal.productName}`}
                style={{ marginBottom: 24 }}
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
                    fontSize: 14,
                    color: getColor(goal.progress),
                    fontWeight: "bold",
                  }}
                >
                  {`Alcançou ${goal.progress.toFixed(2)}% da meta desejada.`}
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[400],
                    marginTop: 4,
                  }}
                >
                  {`Meta financeira: R$ ${goal.desired_profit.toFixed(2)}`}
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[400],
                    marginTop: 4,
                  }}
                >
                  {`Lucro alcançado: R$ ${(
                    (goal.progress / 100) *
                    goal.desired_profit
                  ).toFixed(2)}`}
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
