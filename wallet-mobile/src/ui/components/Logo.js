import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = () => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={["#6030D9", "#2B1360"]}
    >
      <Text style={styles.text}>JustBe</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default Logo;
