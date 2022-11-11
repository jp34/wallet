import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginButton from './Button';

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

    return (
        <View style={styles.page}>
            <LinearGradient colors={['#2B1360', '#6030D9']}>
                <View style={styles.container}>
                    
                    <LinearGradient 
                        colors={['#6030D9', '#2B1360']}
                        style={styles.logo}>
                        <Text style={styles.logo_title}>JustBe</Text>
                    </LinearGradient>

                    <Text style={styles.login_title}>Sign In</Text>

                    <LoginButton text='Login with MetaMask' onPress={() => navigation.navigate('Homescreen')}/> 
                
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 140,
        alignItems: 'center',
    },
    logo: {
        width: 160,
        height: 160,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    logo_title: {
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: 26,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    login_title: {
        paddingTop: 50,
        paddingBottom: 20,
        color: '#eff1f9',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
    input_container: {
    },
    input_group: {
        paddingBottom: 10,
    },
    input_label: {
        marginLeft: 5,
        marginBottom: 5,
        color: '#eff1f9',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "700",
    },
    input: {
        paddingLeft: 5,
        height: 45,
        width: 280,
        backgroundColor: '#eff1f9',
        opacity: 0.2,
    }
});
export default Login;