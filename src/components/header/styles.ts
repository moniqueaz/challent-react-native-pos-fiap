import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 90,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    height: "auto",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
});

export default styles;
