import { View, Text } from "react-native";
import { styles } from "./styles";

export const CardFull = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigNumber}>{value}</Text>
      <Text style={styles.smallText}>{label}</Text>
    </View>
  );
};
