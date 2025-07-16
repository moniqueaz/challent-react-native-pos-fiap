import { View, Text } from "react-native";
import { styles } from "./styles";
import { FC } from "react";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};
