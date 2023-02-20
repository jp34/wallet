import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
} from "react-native";
import { SmallLogo } from "./Logos";

const Header = ({ navigation }) => {
  return (
    // Header Container
    <View style={HeaderStyles.container}>
      {/* Back Button */}
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => {
          navigation.goBack();
        }}
        underlayColor="transparent"
      >
        {/* Back Button View */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Back Button Image */}
          <Image
            source={require("../../../assets/icons/chevron-left.png")}
            style={HeaderStyles.image}
          />
          {/* Back Button Text */}
          <Text
            style={{
              fontSize: 18,
              color: "#EEE",
              fontFamily: "Quicksand-Bold",
            }}
          >
            Back
          </Text>
        </View>
      </TouchableHighlight>
      {/* Logo View */}
      <View style={{ flex: 2, alignItems: "center" }}>
        {/* Small Logo */}
        <SmallLogo />
      </View>
      {/* Spacer */}
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const HeaderStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    tintColor: "#EEE",
    marginRight: 10,
    height: 20,
    resizeMode: "contain",
  },
});

export default Header;
