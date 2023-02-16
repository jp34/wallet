import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ text, placeholder }) => {
  return (
    <View style={styles.group}>
      <Text style={styles.header}>{text}</Text>
      <TextInput style={styles.text} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#FFF',
  },
  text: {
    marginVertical: 5,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    height: 40,
    fontSize: 19,
    placeholderTextColor: '#C9C9C9',
  },
  group: {
    marginHorizontal: 30,
    paddingVertical: 5,
  },
});

export default Input;
