import { View, Text, StyleSheet } from 'react-native';

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  line: {
    borderColor: '#FFF',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  text: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default Divider;
