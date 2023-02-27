import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import { Gradients, TextStyles, ScreenStyles } from "../../Style";
import Header from "../../components/Header";
import CheckboxList from "../../components/CheckboxList";
import { PrimaryButton } from "../../components/Buttons";
import { Input } from "../../components/Inputs";

const DiagnosesIntakeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <View
          style={{
            paddingHorizontal: 30,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={TextStyles.header}>Diagnoses</Text>
            <Text style={TextStyles.description}>
              Do you have any pre-existing diagnoses?
            </Text>
            <Text style={TextStyles.description}>Select all that apply.</Text>
            <View style={{ marginVertical: 10 }}></View>
            <View style={ScreenStyles.section}>
              <CheckboxList
                options={[
                  "Condition 1",
                  "Condition 2",
                  "Condition 3",
                  "Condition 4",
                ]}
              />
              <View style={{ marginVertical: 10 }}></View>
              <Input text="Other" sample="Ex Condition"/>
            </View>
          </View>
          <View>
            <PrimaryButton label={"Continue"} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#EEE",
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
    fontSize: 20,
    paddingVertical: 5,
  },
});

export default DiagnosesIntakeScreen;
