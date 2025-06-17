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
    alignItems: "center",
    gap: 8,
  },
  bigNumber: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.text.primary,
  },
  smallText: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: "400",
  },
});

export default styles;
