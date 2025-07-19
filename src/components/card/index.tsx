import { FC } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Card = {
  value: string;
  label: string;
  percentage?: string;
  info?: string;
};

export const Card: FC<Card> = ({ value, label, percentage, info }) => {
  if (!value || !label) {
    return null;
  }

  const valueStyle = [styles.bigNumber, value.length >= 10 && { fontSize: 18 }];

  return (
    <View style={styles.container}>
      <Text style={valueStyle}>{value}</Text>
      <Text style={styles.smallText}>{label}</Text>
      {percentage && (
        <View style={styles.iconContainer}>
          <Text style={styles.percentValue}>{percentage}</Text>
          <MaterialIcons
            name="arrow-upward"
            size={18}
            color={colors.green[400]}
          />
        </View>
      )}
      {info && (
        <View style={styles.iconContainer}>
          <Text style={[styles.infoText, { color: colors.blue[400] }]}>
            {info}
          </Text>
        </View>
      )}
    </View>
  );
};
