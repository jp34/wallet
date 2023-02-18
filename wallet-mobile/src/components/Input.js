import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Input = ({ text, sample, changed, req, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (password) {
    return (
      <View style={styles.group}>
        <Text style={styles.header}>{text}</Text>
        <TextInput
          style={styles.text}
          placeholder={sample}
          placeholderTextColor="#C9C9C9"
          onChange={changed}
          secureTextEntry={showPassword}
          required
        />
        <TouchableOpacity
          style={styles.password.view}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            style={styles.password.image}
            source={require("../../assets/unlock.png")}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    if (req) {
      return (
        <View style={styles.group}>
          <Text style={styles.header}>{text}</Text>
          <TextInput
            style={styles.text}
            placeholder={sample}
            placeholderTextColor="#C9C9C9"
            onChange={changed}
            required
          />
        </View>
      );
    } else {
      return (
        <View style={styles.group}>
          <Text style={styles.header}>{text}</Text>
          <TextInput
            style={styles.text}
            placeholder={sample}
            placeholderTextColor="#C9C9C9"
            onChange={changed}
          />
        </View>
      );
    }
  }
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
  password: {
    view: {
      position: "absolute",
      right: -10,
      bottom: 0,
      height: 40,
      width: 40,
    },
    image: {
      height: 20,
      width: 20,
      tintColor: "#fff",
    },
  },
});

export default Input;
