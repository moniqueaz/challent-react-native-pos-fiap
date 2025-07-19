import { View, ScrollView, Text } from "react-native";
import { BarChart, PieChart, LineChart } from "react-native-gifted-charts";
import { DataSet } from "gifted-charts-core";
import { colors } from "@/styles/colors";

import { styles } from "./styles";

const Bar = () => {
  const data = [
    {
      value: 40,
      label: "Jan",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 50, frontColor: colors.green[400] },
    {
      value: 50,
      label: "Feb",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 40, frontColor: colors.red[400] },
    {
      value: 75,
      label: "Mar",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 80, frontColor: colors.green[400] },
    {
      value: 30,
      label: "Apr",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 20, frontColor: colors.red[400] },
    {
      value: 60,
      label: "May",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 75, frontColor: colors.green[400] },
    {
      value: 65,
      label: "Jun",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 70, frontColor: colors.green[400] },
    {
      value: 40,
      label: "Jul",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 50, frontColor: colors.green[400] },
    {
      value: 50,
      label: "Ago",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 40, frontColor: colors.red[400] },
    {
      value: 75,
      label: "Set",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 80, frontColor: colors.green[400] },
    {
      value: 30,
      label: "Out",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 20, frontColor: colors.red[400] },
    {
      value: 60,
      label: "Nov",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 75, frontColor: colors.green[400] },
    {
      value: 65,
      label: "Dec",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: colors.gray[400] },
      frontColor: colors.blue[200],
    },
    { value: 70, frontColor: colors.green[400] },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <BarChart
          data={data}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom={false}
          xAxisThickness={0}
          yAxisThickness={0}
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
