import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ text, sample, id }) => {
  return (
    <View style={styles.group}>
      <Text style={styles.header}>{text}</Text>
      <TextInput
        style={styles.text}
        placeholder={sample}
        placeholderTextColor="#C9C9C9"
        testID={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: "#FFF",
  },
  text: {
    marginVertical: 5,
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 19,
    color: "#FFF",
  },
  group: {
    marginHorizontal: 30,
    paddingVertical: 5,
  },
});

export default Input;
