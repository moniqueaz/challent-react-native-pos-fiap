import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  children?: React.ReactNode;
};

export const Button = ({ title, children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      {children ?? <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};
