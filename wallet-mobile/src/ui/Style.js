import { StyleSheet, Dimensions } from "react-native";

export const Gradients = {
    primary: "#6030D9",
    secondary: "#2B1360",
    gradient1: ["#2B1360", "#6030D9"],
    gradient2: ["#6030D9", "#2B1360"],
};

export const Colors = {
    backgroundDark: '#0c0c0c'
};

export const ScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    gradient: {
        width: '100%',
        height: '100%',
        paddingTop: 8,
    },
    container: {
        flex: 1,
        width: '100%',
        padding: 16,
        flexDirection: 'column',
    },
});
