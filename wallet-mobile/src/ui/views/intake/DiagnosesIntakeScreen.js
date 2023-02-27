import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Text } from "react-native";
import { Gradients, TextStyles } from "../../Style";
import Header from "../../components/Header";

const DiagnosesIntakeScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={Gradients.gradient1} style={{flex: 1}}>
            <SafeAreaView>
                <View>
                    <Header navigation={navigation} />
                    <Text style={TextStyles.header}>Diagnoses</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default DiagnosesIntakeScreen;