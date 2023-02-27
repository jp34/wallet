import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View } from "react-native";
import { Gradients } from "../../Style";
import Header from "../../components/Header";

const DiagnosesIntakeScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={Gradients.gradient1} style={{flex: 1}}>
            <SafeAreaView>
                <View>
                    <Header navigation={navigation} />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default DiagnosesIntakeScreen;