import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  headerItem: {
    flex: 1,
    color: colors.text.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
});

export default styles;
