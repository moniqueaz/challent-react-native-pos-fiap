import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type CardFullProps = {
  value: string;
  label: string;
};

export const CardFull: FC<CardFullProps> = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigNumber}>{value}</Text>
      <Text style={styles.smallText}>{label}</Text>
    </View>
  );
};
