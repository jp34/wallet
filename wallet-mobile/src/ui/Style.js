import { StyleSheet, Dimensions } from "react-native";

export const ScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  gradient: {
    width: "100%",
    height: "100%",
    paddingTop: 8,
  },
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    flexDirection: "column",
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    padding: 15,
  },
});

export const TextStyles = StyleSheet.create({
  header: {
    color: "#EEE",
    fontFamily: "Quicksand-SemiBold",
    marginBottom: 10,
    fontSize: 30,
    marginTop: 15,
  },
  description: {
    color: "#EEE",
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Quicksand-Regular",
  },
});
