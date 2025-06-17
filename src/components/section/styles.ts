import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingHorizontal: 26,
    paddingVertical: 20,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text.primary,
  },
});

export default styles;
