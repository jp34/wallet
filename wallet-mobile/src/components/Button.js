import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";

const Button = ({ text, imgSource, textColor, backColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.view} onPress={onPress}>
      {imgSource && <Image source={imgSource} style={styles.image} />}
      {imgSource && (
        <View
          style={StyleSheet.compose(styles.separator, {
            backgroundColor: backColor,
          })}
        />
      )}
      <Text style={StyleSheet.compose(styles.text, { color: textColor })}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 60,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  image: {
    padding: 20,
    height: 45,
    width: 45,
    resizeMode: "stretch",
    marginRight: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  separator: {
    height: 45,
    borderRadius: 20,
    width: 1.25,
  },
  group: {
    marginHorizontal: 30,
    paddingVertical: 5,
  },
});

export default Button;
