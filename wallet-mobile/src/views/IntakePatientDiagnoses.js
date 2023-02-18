import React, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectDropdown from "react-native-select-dropdown";

import styles from "../styles";

const IntakePatientDiagnoses = ({ navigation }) => {
  const diagnoses = ["Asthma", "Hypertension", "Hypotension", "None"];
  return (
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ alignItems: "center", marginHorizontal: 30 }}>
            <SelectDropdown
              data={diagnoses}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultButtonText="Select a Diagnosis"
              buttonStyle={{
                marginHorizontal: 30,
                borderRadius: 10,
                width: "100%",
              }}
              buttonTextStyle={{color: styles.colors.primary, fontSize: 20, fontWeight: "bold"}}
              rowTextStyle={{color: styles.colors.primary, fontSize: 20}}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
export default IntakePatientDiagnoses;
