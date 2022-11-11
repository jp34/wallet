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
    StyleSheet,
} from "react-native";
import { Container, Row, Col } from "react-bootstrap"

const Homescreen = ({ navigation }) => {

    return (
        <View style={styles.page}>
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome User!</Text>
                </View>

                <View style={styles.newsContainer}>
                    <Text style={styles.newsText}> New:</Text>

                    <View style={styles.newsBox}>
                        <Text>
                        Here ye, Here ye! You're sick.
                        </Text>
                    </View>
                </View>

                <View style={styles.redirectContainer}>
                    <View style={styles.optionBox}>
                        <View style={styles.optionBoxText}>
                            <Text>
                            My Health
                            </Text>
                        </View>
                    </View>
                    <View style={styles.optionBox}>
                        <View style={styles.optionBoxText}>
                            <Text>
                            Import Records
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.redirectContainer}>
                    <View style={styles.optionBox}>
                        <View style={styles.optionBoxText}>
                            <Text>
                            Research
                            </Text>
                        </View>
                    </View>

                    <View style={styles.optionBox}>
                        <View style={styles.optionBoxText}>
                            <Text>
                            My Wallet
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#D3D3D3   ',
    },
    container: {
        paddingTop: 100,
        alignItems: 'center',
    },
    newsContainer: {
        paddingTop: 10,
        alignItems: 'left',
        paddingLeft: 30,
        flex: 1
    },
    redirectContainer: {
        paddingTop: 0,
        flex: 2,
        flexDirection: 'row'
    },
    welcomeText: {
        paddingTop: 0,
        paddingBottom: 20,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
    newsText: {
        paddingTop: 10,
        paddingBottom: 20,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
    newsBox: {
        width: 300,
        height: 30,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
    },
    optionBox: {
        width: 80,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flex: 2,
        marginLeft: 10,
        marginRight: 10
    },
    optionBoxText: {
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: 26,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    profileBox: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#A9A9A9',
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

export default Homescreen;