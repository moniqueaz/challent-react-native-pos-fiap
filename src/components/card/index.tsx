import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigNumber}>3,456</Text>
      <Text style={styles.smallText}>Total de vendas</Text>
      <View style={styles.iconContainer}>
        <Text style={styles.percentValue}>+2.5%</Text>
        <MaterialIcons
          name="arrow-upward"
          size={18}
          color={colors.green[400]}
        />
      </View>
    </View>
  );
};
