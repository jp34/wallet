import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { findPatientByUserId } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [patient, setPatient] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   findPatientByUserId().then((data) => {
  //     setPatient(data);
  //     setLoading(false);
  //   });
  // }, []);

  // const renderLoading = () => {
  //   return (
  //     <Box>
  //       <Text style={styles.message}>Loading...</Text>
  //     </Box>
  //   );
  // };

  // const renderLoaded = () => {
  //   return (
  //     <Box>
  //       <Text style={styles.message}>
  //         Welcome {patient.attributes.firstName}
  //       </Text>
  //     </Box>
  //   );
  // };

  return (
    <Wrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>
          {/* Welcome Back, {patient.attributes.firstName} */}
          Welcome Back, [Name]
        </Text>
        <View style={{ marginVertical: 10 }}></View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => router.push("../intake/allergies")}
          >
            Complete Your Profile
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.notification}>
        <Text style={styles.notificationText}>No Notifications</Text>
      </View> */}
      <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
        <Text style={styles.greetingText}>Medical News</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>COVID-19 Vaccines</Text>
            <Text style={styles.cardHeaderDate}>April 23, 2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non malesuada justo. Praesent quis erat malesuada, lobortis ipsum
              vel, scelerisque sapien. Fusce varius augue sed velit fermentum
              sagittis. Donec dignissim nulla id ipsum malesuada, id posuere
              purus egestas. Nam laoreet urna ac leo tincidunt, quis venenatis
              urna tincidunt.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Heart Disease</Text>
            <Text style={styles.cardHeaderDate}>April 22, 2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>
              Sed a eros ut ipsum ornare commodo. Nam euismod, sapien non
              efficitur tincidunt, lacus nisl bibendum risus, vel malesuada ex
              purus nec est. Curabitur ultricies felis purus, sed ultricies
              tortor consectetur vitae. Suspendisse bibendum mauris a odio
              ullamcorper, at consequat enim varius.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Mental Health</Text>
            <Text style={styles.cardHeaderDate}>April 21, 2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>
              Integer eu ante nec leo ullamcorper convallis at a arcu. Donec
              aliquam efficitur est nec euismod. Fusce maximus ipsum quis lectus
              lacinia, nec vehicula nunc rhoncus. Fusce scelerisque efficitur
              felis, a rutrum velit blandit eu.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 22,
    fontFamily: "Quicksand-SemiBold",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#0c0c0c",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  greeting: {
    padding: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  notification: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  scrollContentContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 325,
    padding: 20,
    height: 300,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardHeaderDate: {
    fontSize: 14,
    color: "#666",
  },
  cardBody: {},
  cardBodyText: {
    fontSize: 16,
  },
});
