import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export const Input = (props: TextInputProps) => {
  return <TextInput placeholderTextColor={colors.gray[900]} {...props} />;
};
