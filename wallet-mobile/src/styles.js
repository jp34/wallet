import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  colors: {
    primary: "#6030D9",
    secondary: "#2B1360",
    gradient1: ["#2B1360", "#6030D9"],
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  containerNormal: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 8,
    marginTop: 70,
  },
  text: {
    title: {
      color: "#FFF",
      fontSize: 35,
      fontWeight: "bold",
      marginVertical: 30,
      marginLeft: 30,
    },
    paragraph: {
      color: "#FFF",
      fontSize: 25,
      marginLeft: 30,
      marginBottom: 20,
    },
  },
});

export default styles;
