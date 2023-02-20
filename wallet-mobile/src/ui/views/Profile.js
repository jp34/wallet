import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const Profile = ({ navigation }) => {
    // Render Back Button
    function renderBackButton() {
        return (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backHeader}
            >
                <Image
                    source={require("../../../assets/icons/chevron-left.png")}
                    style={styles.backImage}
                />
            </TouchableOpacity>
        );
    }

    // Render Title
    function renderTitle() {
        return (
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Profile</Text>
            </View>
        );
    }

    // Render Profile Image
    function renderProfileImage() {
        return (
            <View style={styles.profileView}>
                <Image
                    source={require("../../../assets/icons/profile.png")}
                    resizeMode="contain"
                    style={styles.profileImage}
                />
            </View>
        );
    }

    // Renders Profile Heading
    function renderProfileHeading() {
        return (
            <View style={styles.profileHeadingView}>
                {/* Name */}
                <Text style={styles.nameText}>[Name]</Text>
                {/* Location */}
                <Text style={styles.locText}>[Location]</Text>
            </View>
        );
    }

    // Renders Profile Panel
    function renderProfilePanel(p1) {
        return (
            <TouchableOpacity
                style={styles.panelView}
                onPress={() => console.log({ p1 })}
            >
                <Text style={styles.panelText}>{p1}</Text>
            </TouchableOpacity>
        );
    }

    // Renders Last Profile Panel
    function renderLastProfilePanel(p1) {
        return (
            <View>
                <TouchableOpacity
                    style={styles.panelViewLast}
                    onPress={() => console.log({ p1 })}
                >
                    <Text style={styles.panelText}>{p1}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                {renderBackButton()}
                {renderTitle()}
                {renderProfileImage()}
                {renderProfileHeading()}
                {renderProfilePanel("Personal Information")}
                {renderProfilePanel("Notifications")}
                {renderProfilePanel("Wishlist")}
                {renderProfilePanel("Terms of Service")}
                {renderLastProfilePanel("Settings")}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    container: {
        width: "100%",
        height: "100%",
    },
    backHeader: {
        marginTop: 65,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    backImage: {
        width: 25,
        height: 25,
        tintColor: "#000",
        resizeMode: "contain",
    },
    titleView: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    titleText: {
        color: "#000",
        fontSize: 46,
        fontWeight: "bold",
    },
    profileView: {
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 120,
        tintColor: "#000",
    },
    nameText: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
    },
    locText: {
        color: "#000",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 40,
    },
    profileHeadingView: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    panelView: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        marginHorizontal: 40,
    },
    panelViewLast: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginHorizontal: 40,
    },
    panelText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Profile;