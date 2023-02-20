import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenStyles } from "../../Style";
import { SecondaryButton } from "../../components/Buttons";
import { getPatientData } from "../../../api/strapi-client";

const HomeScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [patient, setPatient] = useState();

    useEffect(() => {
        getPatientData().then(data => {
            setPatient(data);
            setLoading(false);
        })
    }, []);

    const renderLoading = () => {
        return (
            <View style={ScreenStyles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const renderLoaded = () => {
        return (
            <View style={ScreenStyles.container}>
                <Text style={HomeStyles.message}>Welcome {patient.firstName}</Text>
                <SecondaryButton label="Complete Account" options={{
                    onPress: () => {
                        return navigation.navigate('IntakeRouter');
                    }
                }}/>
            </View>
        );
    }

    console.log(JSON.stringify(patient));
    
    return (isLoading) ? renderLoading() : renderLoaded();
}

const HomeStyles = StyleSheet.create({
    message: {
        fontSize: 22,
        fontFamily: 'Quicksand-SemiBold',
        paddingHorizontal: 8,
        paddingVertical: 16,
        color: '#0c0c0c',
    }
});

export default HomeScreen;
