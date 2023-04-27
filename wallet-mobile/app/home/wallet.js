import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../src/components/Wrapper";

export default function CryptoWallet() {
  // const attemptCreateWallet = async () => {
  //   try {
  //     const result = await createWallet();
  //     //   if (result) return navigation.navigate("Wallet");
  //     // Page should reload without "Start Earning" button
  //     // Handle for incorrect logins
  //   } catch (err) {
  //     console.log("Create account failed with error");
  //     console.error(err);
  //     return false;
  //   }
  // };
  return (
    <Wrapper>
      <View style={styles.header}>
        <Text style={styles.title}>My Wallet</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>My Wallet</Text>
          <View style={styles.cardBody}>
            <Text style={styles.balanceText}>$0.00</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Bitcoin</Text>
          <View style={styles.cardBody}>
            <View style={styles.cryptoIcon}></View>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>0.00 BTC</Text>
              <Text style={styles.noteText}>($0.00)</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Ethereum</Text>
          <View style={styles.cardBody}>
            <View style={styles.cryptoIcon}></View>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>0.00 ETH</Text>
              <Text style={styles.noteText}>($0.00)</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    height: 60,
  },
  title: {
    fontSize: 32,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  cryptoIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: "#ccc",
    borderRadius: 25,
  },
  balanceContainer: {
    marginLeft: 10,
  },
  balanceText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  noteText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
