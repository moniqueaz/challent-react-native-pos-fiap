import { StyleSheet } from "react-native";

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
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#ff3333",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;
