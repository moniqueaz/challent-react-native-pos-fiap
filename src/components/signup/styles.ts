import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
    color: "#000",
    marginBottom: 16,
    textAlign: "center",
    paddingBottom: 40,
  },
  label: {
    color: "#202224",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F5F5F5",
    fontSize: 14,
    color: "#202224",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    borderColor: "#D8D8D8",
    borderWidth: 1,
  },

  linkText: {
    color: "#3F9D61",
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "700",
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    color: "#202224",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: 16,
  },
});
