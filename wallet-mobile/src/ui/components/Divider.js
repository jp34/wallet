import { View, Text, StyleSheet } from "react-native";

const Divider = ({ text }) => {
  return (
    <View style={styles.group}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    borderColor: "#EEE",
    borderWidth: 0.75,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  text: {
    color: "#EEE",
    fontSize: 19,
    fontFamily: "Quicksand-SemiBold"
  },
});

export default Divider;
