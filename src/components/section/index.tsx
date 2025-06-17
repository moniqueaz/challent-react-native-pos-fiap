import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};
