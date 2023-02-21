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
  flexGrowContainer: {
    flex: 1,
    paddingTop: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexGrow: 1,
  },
  nonHeaderContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
  },
  sectionContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});

export const TextStyles = StyleSheet.create({
  page: {
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
  },
});
