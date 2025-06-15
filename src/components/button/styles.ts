import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green[600],
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    width: 180,
    marginHorizontal: "auto",
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
  },
});
