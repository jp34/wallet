import { View, SafeAreaView, Text } from "react-native";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Gradients, TextStyles, ScreenStyles } from "../../Style";

const EncountersIntakeScreen = ({ navigation }) => {
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
            <Text style={TextStyles.header}>Recent Medical Encounters</Text>
            <Text style={TextStyles.description}>
              Have you had any recent medical encounters? If so, please state.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EncountersIntakeScreen;
