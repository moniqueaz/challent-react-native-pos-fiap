import { View, ScrollView, Text } from "react-native";
import { BarChart, PieChart, LineChart } from "react-native-gifted-charts";
import { DataSet } from "gifted-charts-core";
import { colors } from "@/styles/colors";
import { EmptyMessage } from "@/components/EmptyMessage";
import { styles } from "./styles";

const Bar = ({
  data,
}: {
  data: { value: number; label: string; frontColor?: string }[];
}) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <EmptyMessage>Sem dados disponíveis</EmptyMessage>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <BarChart
          data={data}
          barWidth={14}
          spacing={24}
          roundedTop
          roundedBottom={false}
          xAxisThickness={1}
          yAxisThickness={1}
          yAxisTextStyle={{ color: colors.gray[400] }}
          noOfSections={6}
          maxValue={120}
        />
      </ScrollView>
    </View>
  );
};

type PieProps = {
  total?: string;
  label?: string;
  labelStyle?: LabelStyle;
};

type LabelStyle = {
  color?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
};

const Pie = ({
  total,
  label,
  labelStyle = { color: colors.text.primary, fontSize: 20, fontWeight: "bold" },
}: PieProps) => {
  const data = [
    { value: 70, color: colors.blue[200] },
    { value: 30, color: colors.gray[200] },
  ];

  return (
    <View style={{ ...styles.container, ...styles.containerPie }}>
      <PieChart
        donut
        innerRadius={100}
        data={data}
        centerLabelComponent={() => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {label && (
                <Text
                  style={{
                    color: labelStyle.color ?? colors.text.primary,
                    fontWeight: labelStyle.fontWeight ?? "400",
                    fontSize: labelStyle.fontSize ?? 30,
                  }}
                >
                  {label}
                </Text>
              )}
              {total && <Text style={{ fontSize: 18 }}>{total}</Text>}
            </View>
          );
        }}
      />
    </View>
  );
};

type LineProps = {
  data: Array<{ value: number; label: string }>;
};

export const Line = ({ data }: LineProps) => {
  const lineData = [{ value: 0 }, ...data];
  const dataSet: Array<DataSet> = [
    {
      data: lineData,
      color: "skyblue",
      startFillColor: "skyblue",
    },
  ];

  const getMaxValue = (data: Array<{ value: number }>) => {
    return Math.max(...data.map((item) => item.value));
  };

  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <EmptyMessage>Sem dados disponíveis</EmptyMessage>
      </View>
    );
  }

  const maxValue = getMaxValue(lineData);
  return (
    <View style={{ overflow: "hidden" }}>
      <LineChart
        areaChart
        curved
        dataSet={dataSet}
        initialSpacing={0}
        hideDataPoints
        startOpacity={0.8}
        endOpacity={0.3}
        textFontSize={13}
        showXAxisIndices
        maxValue={maxValue + 20}
      />
    </View>
  );
};

export type ChartsType = {
  Bar: typeof Bar;
  Pie: typeof Pie;
};

export const Charts = {
  Bar,
  Pie,
  Line,
};
