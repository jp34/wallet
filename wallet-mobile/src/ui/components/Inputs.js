import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

export const Input = ({ text, sample, changed, password, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={InputStyles.group}>
      <Text style={InputStyles.header}>{text}</Text>
      <TextInput
        style={InputStyles.text}
        placeholder={sample}
        placeholderTextColor="#C9C9C9"
        onChangeText={changed}
        secureTextEntry={showPassword}
        autoCorrect={false}
        value={value}
      />
      {password && (
        <TouchableOpacity
          style={InputStyles.password.view}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            style={InputStyles.password.image}
            source={require("../../../assets/icons/unlock.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const BasicInput = ({ options }) => {
  return (
    <View style={InputStyles.container}>
      <TextInput {...options} style={InputStyles.input} />
    </View>
  );
};

export const PasswordInput = ({ options, onShowPassword }) => {
  const styles = StyleSheet.create({
    showButton: {
      position: "absolute",
      right: 0,
      bottom: 10,
      height: 30,
      width: 30,
    },
    icon: {
      height: 20,
      width: 20,
      tintColor: "#fff",
    },
  });
  return (
    <View style={InputStyles.container}>
      <TextInput {...options} style={InputStyles.input} />
      <TouchableOpacity
        style={styles.showButton}
        onPress={() => onShowPassword()}
      >
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/unlock.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const InputStyles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: "#EEE",
    fontFamily: "Quicksand-Medium",
  },
  text: {
    marginVertical: 2,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 18,
    color: "#EEE",
  },
  group: {
    paddingVertical: 5,
  },
  password: {
    view: {
      position: "absolute",
      right: -20,
      bottom: -10,
      height: 45,
      width: 45,
    },
    image: {
      height: 20,
      width: 20,
      tintColor: "#EEE",
    },
  },
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
    padding: 8,
    paddingLeft: 10,
    color: "#eeeeee",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
