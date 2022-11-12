import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const Dashboard = ({ navigation }) => {
  // Renders Profile Header
  function renderProfileHeader() {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.headerImage}
          source={require("../../assets/profile.png")}
        />
      </TouchableOpacity>
    );
  }

  // Render Title
  function renderTitle() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Dashboard</Text>
      </View>
    );
  }

  // Renders myHealth Panel
  function renderPanel() {
    return (
      <TouchableOpacity
        style={styles.panelView}
        onPress={() => navigation.navigate("MyHealth")}
      >
        <Text style={styles.panelText}>myHealth</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {renderProfileHeader()}
        {renderTitle()}
        {renderPanel()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 65,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  headerImage: {
    width: 45,
    height: 45,
    tintColor: "#000",
    resizeMode: "contain",
  },
  titleView: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleText: {
    color: "#000",
    fontSize: 46,
    fontWeight: "bold",
  },
  panelView: {
    marginTop: 30,
    marginHorizontal: 30,
    width: "43%",
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  panelText: { fontSize: 26, fontWeight: "bold" },
});

export default Dashboard;
