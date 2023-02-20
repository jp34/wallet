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
    width: "100%"
  },
  nonHeaderContainer: {
    flex: 1,
    width: "100%",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
});

export const TextStyles = StyleSheet.create({
  splash: {
    header: {
      color: "#EEE",
      fontSize: 25,
      fontFamily: "Quicksand-SemiBold",
      marginVertical: 10,
    },
    description: {
      color: "#EEE",
      fontSize: 20,
      fontFamily: "Quicksand-Regular",
    },
  },
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
});
