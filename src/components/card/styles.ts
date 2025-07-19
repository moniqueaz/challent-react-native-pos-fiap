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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
    marginTop: 12,
  },
  percentValue: {
    fontSize: 12,
    color: colors.green[400],
    fontWeight: "600",
  },
  infoText: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});

export default styles;
