import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white[100],
    borderRadius: 24,
    paddingHorizontal: 26,
    paddingVertical: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: "80%",
    maxWidth: 400,
    height: "auto",
  },
  inputContainer: {
    gap: 5,
  },
  fieldContainer: {
    gap: 16,
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: 16,
    textAlign: "center",
    paddingBottom: 40,
  },
  label: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.gray[200],
    fontSize: 14,
    color: colors.text.primary,
    borderRadius: 8,
    padding: 12,
    width: "100%",
    borderColor: colors.gray[300],
    borderWidth: 1,
  },

  linkText: {
    color: colors.green[600],
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "700",
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text.primary,
  },
  outlinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 16,
  },
});
