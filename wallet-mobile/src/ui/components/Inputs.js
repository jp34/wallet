import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export const Input = ({ text, sample, changed, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.group}>
      <Text style={styles.header}>{text}</Text>
      <TextInput
        style={styles.text}
        placeholder={sample}
        placeholderTextColor="#C9C9C9"
        onChangeText={changed}
        secureTextEntry={showPassword}
        autoCapitalize={false}
        autoCorrect={false}
      />
      {password && (
        <TouchableOpacity
          style={styles.password.view}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            style={styles.password.image}
            source={require("../../../assets/icons/unlock.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: "#EEE",
    fontFamily: "Quicksand-SemiBold",
  },
  text: {
    marginVertical: 5,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 20,
    color: "#EEE",
    fontFamily: "Quicksand-Regular",
  },
  group: {
    paddingVertical: 5,
  },
  password: {
    view: {
      position: "absolute",
      right: -20,
      bottom: 0,
      height: 45,
      width: 45,
    },
    image: {
      height: 20,
      width: 20,
      tintColor: "#EEE",
    },
  },
});

export default Input;
