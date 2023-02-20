import { StyleSheet } from "react-native";

export const Gradients = {
  gradient1: ["#2B1360", "#6030D9"],
  gradient2: ["#6030D9", "#2B1360"],
};

export const Colors = {
  backgroundDark: "#0C0C0C",
  primary: "#6030D9",
  secondary: "#2B1360",
};

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  nonHeaderContainer: {
    flex: 1,
    width: "100%",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  sectionContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  }
});

export const TextStyles = StyleSheet.create({
  pageTitle: {
    color: "#EEE",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Quicksand-Bold",
  },
  pageDescription: {
    color: "#EEE",
    fontSize: 25,
    marginVertical: 10,
    fontFamily: "Quicksand-Regular",
  },
  page: {
    header: {
      color: "#EEE",
      fontFamily: "Quicksand-SemiBold",
      marginBottom: 10,
      fontSize: 30,
      marginTop: 20,
    },
    description: {
      color: "#EEE",
      fontSize: 20,
      marginVertical: 10,
      fontFamily: "Quicksand-Regular",
    },
  },
  section: {
    header: {
      color: "#EEE",
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5,
      fontFamily: "Quicksand-Medium",
    },
  },
});