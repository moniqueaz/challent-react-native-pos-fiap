import { View, Text, ViewStyle } from "react-native";
import { styles } from "./styles";
import { FC } from "react";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const Section: FC<SectionProps> = ({ title, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};
