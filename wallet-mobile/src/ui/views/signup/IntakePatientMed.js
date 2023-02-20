import React, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "../../styles";

const IntakePatientMed = ({ navigation }) => {
  return (
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
export default IntakePatientMed;
