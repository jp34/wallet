import { View, SafeAreaView, Text, KeyboardAvoidingView } from "react-native";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Gradients, TextStyles, ScreenStyles } from "../../Style";
import { Input } from "../../components/Inputs";
import { PrimaryButton } from "../../components/Buttons";

const EncountersIntakeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <KeyboardAvoidingView
          style={{
            paddingHorizontal: 30,
            flex: 1,
            justifyContent: "space-between",
          }}
          behavior="height"
        >
          <View>
            <Text style={TextStyles.header}>Recent Medical Encounters</Text>
            <Text style={TextStyles.description}>
              Have you had any recent medical encounters? If so, please state.
            </Text>
            <View style={{ marginVertical: 10 }}></View>
            <View style={ScreenStyles.section}>
              <Input text="Medical Provider" sample="Dr. J Doe" />
              <View style={{ marginVertical: 10 }}></View>
              <Input text="Reason For Visit" sample="Routine" />
              <View style={{ marginVertical: 10 }}></View>
              <Input text="Related to Diagnosis?" sample="..." />
            </View>
          </View>
          <View>
            <PrimaryButton label="Continue" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EncountersIntakeScreen;
