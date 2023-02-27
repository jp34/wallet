import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Text } from "react-native";
import { Gradients, TextStyles } from "../../Style";
import Header from "../../components/Header";

const DiagnosesIntakeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      <SafeAreaView>
        <Header navigation={navigation} />
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={TextStyles.header}>Diagnoses</Text>
          <Text style={TextStyles.description}>
            Do you have any pre-existing diagnoses?
          </Text>
          <Text style={TextStyles.description}>Select all that apply.</Text>
          <View style={{ marginVertical: 10 }}></View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default DiagnosesIntakeScreen;
