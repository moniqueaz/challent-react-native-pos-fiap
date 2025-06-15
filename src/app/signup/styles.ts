import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    backgroundColor: "#3F9D61",
  },
  topImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    resizeMode: "stretch",
    zIndex: 0,
  },
  bottomImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    resizeMode: "stretch",
    zIndex: 0,
  },
});

export default styles;
