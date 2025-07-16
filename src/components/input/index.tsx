import { FC } from "react";
import { TextInput, TextInputProps } from "react-native";
import { colors } from "@/styles/colors";

export const Input: FC<TextInputProps> = (props) => {
  return <TextInput placeholderTextColor={colors.gray[900]} {...props} />;
};
