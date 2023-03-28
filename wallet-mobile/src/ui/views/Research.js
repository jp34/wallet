import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";

const Research = ({ navigation }) => {
    // Render Title
    function renderTitle() {
        return (
            <View style={styles.titleView}>
                <Text style={styles.titleText}>
                    Hi User, what would you like to do next?{" "}
                </Text>
            </View>
        );
    }

    // Renders Login Form
    function renderSearchBar() {
        return (
            <View>
                {/* Form */}
                <View style={styles.formGroup}>
                    {/*Search Bar*/}
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            placeholderTextColor="#000"
                        />
                    </View>
                </View>
            </View>
        );
    }

    // Renders Research information cards
    function renderCards() {
        return (
            <View style={styles.cardContainer}>
                {/*Research Card Def 1*/}
                <TouchableOpacity style={styles.cardView}>
                    <Text style={styles.panelText}>Research 1</Text>
                </TouchableOpacity>
                {/*Research Card Def 2*/}
                <TouchableOpacity style={styles.cardView}>
                    <Text style={styles.panelText}>Research 2</Text>
                </TouchableOpacity>
                {/*Research Card Def 3*/}
                <TouchableOpacity style={styles.cardView}>
                    <Text style={styles.panelText}>Research 3</Text>
                </TouchableOpacity>
            </View>
        );
    }
    /*
  Call with parameter pointing to the relevant database "object" 
  and use that to display a new version of the page similar to how the profile
  button works - but with the chance to go back to the same page.
  function renderResearch(object) {

  }
*/

    // Renders back button
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

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                {renderBackButton()}
                {renderTitle()}
                {renderSearchBar()}
                {renderCards()}
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
    header: {
        marginTop: 65,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    headerImage: {
        width: 45,
        height: 45,
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
    cardContainer: {
        width: "98%",
        height: "50%",
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    formGroup: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    inputGroup: {
        marginTop: 20,
    },
    input: {
        marginVertical: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        height: 40,
        color: "#000",
        fontSize: 20,
    },
    cardView: {
        marginTop: 30,
        marginHorizontal: 10,
        width: "100%",
        height: 140,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
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
});

export default Research;
