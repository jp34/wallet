import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const MyHealth = ({ navigation }) => {
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
        <Text style={styles.titleText}>My Health</Text>
      </View>
    );
  }

  function renderDiagnoses() {
    return (
      <View style={styles.descTitle}>
        <Text style={styles.descText}>Current Diagnoses</Text>
        <View>
          <Text>[Diagnoses 1]</Text>
          <Text>[Diagnoses 2]</Text>
          <Text>[Diagnoses 3]</Text>
          <Text>[Diagnoses 4]</Text>
        </View>
      </View>
    );
  }

  function renderMedications() {
    return (
      <View style={styles.descTitle}>
        <Text style={styles.descText}>Current Medications</Text>
        <View>
          <Text>[Medication 1]</Text>
          <Text>[Medication 2]</Text>
          <Text>[Medication 3]</Text>
          <Text>[Medication 4]</Text>
        </View>
      </View>
    );
  }

  function renderImmunization() {
    return (
      <View style={styles.descTitle}>
        <Text style={styles.descText}>Immunization History</Text>
        <View>
          <Text>[Immunizations 1]</Text>
          <Text>[Immunizations 2]</Text>
          <Text>[Immunizations 3]</Text>
          <Text>[Immunizations 4]</Text>
        </View>
      </View>
    );
  }

  function renderDocument() {
    return (
      <View style={styles.descTitle}>
        <Text style={styles.descText}>Current Diagnoses</Text>
        <View>
          <Text>[Link to Document 1]</Text>
          <Text>[Link to Document 2]</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {renderProfileHeader()}
        {renderTitle()}
        {renderDiagnoses()}
        {renderMedications()}
        {renderImmunization()}
        {renderDocument()}
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
  descText: { fontSize: 20, fontWeight: "bold" },
  descTitle: {
    paddingTop: 15,
    marginTop: 40,
    marginHorizontal: 30,
    borderTopWidth: 1,
  },
});

export default MyHealth;
