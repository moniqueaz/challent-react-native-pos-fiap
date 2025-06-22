import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginVertical: 10,
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: "90%",
    maxWidth: 400,
    height: "auto",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
    position: "relative",
    height: 250,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  address: {
    gap: 14,
    padding: 10,
  },
  addressGroup: {
    gap: 6,
  },
  addressTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text.secondary,
    textTransform: "uppercase",
  },
  addressValue: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text.primary,
  },
  input: {
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: colors.text.primary,
    borderWidth: 1,
    borderColor: colors.gray[300],
  },
});
