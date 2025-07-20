import { FC } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  children?: React.ReactNode;
};

export const EmptyMessage: FC<ButtonProps> = ({ children }) => {
  return <Text style={styles.message}>{children}</Text>;
};
