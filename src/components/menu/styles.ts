import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  boxContainer: {
    flex: 1,
    backgroundColor: colors.white,
    elevation: 5,
    position: "absolute",
    top: 43,
    left: 0,
    zIndex: 10,
    width: 200,
    borderRadius: 14,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
  text: {
    fontSize: 16,
    color: colors.text.primary,
    marginLeft: 10,
  },
});
