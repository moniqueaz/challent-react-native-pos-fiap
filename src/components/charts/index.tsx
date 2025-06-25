import { View, ScrollView, Text } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";

import { styles } from "./styles";

const Bar = () => {
  const data = [
    {
      value: 40,
      label: "Jan",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 50, frontColor: "#73ed65" },
    {
      value: 50,
      label: "Feb",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 40, frontColor: "#ED6665" },
    {
      value: 75,
      label: "Mar",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 80, frontColor: "#73ed65" },
    {
      value: 30,
      label: "Apr",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 20, frontColor: "#ED6665" },
    {
      value: 60,
      label: "May",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 75, frontColor: "#73ed65" },
    {
      value: 65,
      label: "Jun",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 70, frontColor: "#73ed65" },
    {
      value: 40,
      label: "Jul",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 50, frontColor: "#73ed65" },
    {
      value: 50,
      label: "Ago",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 40, frontColor: "#ED6665" },
    {
      value: 75,
      label: "Set",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 80, frontColor: "#73ed65" },
    {
      value: 30,
      label: "Out",
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 20, frontColor: "#ED6665" },
    {
      value: 60,
      label: "Nov",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 75, frontColor: "#73ed65" },
    {
      value: 65,
      label: "Dec",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#177AD5",
    },
    { value: 70, frontColor: "#73ed65" },
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
          yAxisTextStyle={{ color: "gray" }}
          noOfSections={6}
          maxValue={120}
        />
      </ScrollView>
    </View>
  );
};

const Pie = () => {
  const data = [
    { value: 70, color: "#177AD5" },
    { value: 30, color: "lightgray" },
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
              <Text style={{ fontSize: 30 }}>Total</Text>
              <Text style={{ fontSize: 18 }}>70%</Text>
            </View>
          );
        }}
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
};
