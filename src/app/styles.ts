import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    height: 40,
  },
});

export default styles;
