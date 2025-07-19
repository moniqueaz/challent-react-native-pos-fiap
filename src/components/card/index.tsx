import { FC } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Card = {
  value: string;
  label: string;
  percentage?: string;
};

export const Card: FC<Card> = ({ value, label, percentage }) => {
  if (!value || !label) {
    return null; // Return null if value or label is not provided
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigNumber}>{value}</Text>
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
    </View>
  );
};
