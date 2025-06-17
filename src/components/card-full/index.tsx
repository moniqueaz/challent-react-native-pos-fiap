import { View, Text } from "react-native";
import { styles } from "./styles";

export const CardFull = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigNumber}>3,456</Text>
      <Text style={styles.smallText}>Total de vendas</Text>
    </View>
  );
};
