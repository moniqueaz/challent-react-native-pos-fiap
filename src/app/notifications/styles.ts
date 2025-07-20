import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingHorizontal: 26,
    paddingVertical: 20,
    width: "auto",
    height: "auto",
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: "400",
  },
  notification: {
    backgroundColor: colors.gray[200],
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
});

export default styles;
