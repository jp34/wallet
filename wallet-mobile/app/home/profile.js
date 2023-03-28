import { useState } from "react";
import { Link } from "expo-router";
import {
  Avatar,
  Box,
  Text,
  Badge,
  VStack,
  Button,
  FlatList,
  HStack,
  Pressable,
  Icon,
  Center,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Wrapper from "../../src/components/Wrapper";

export default function ProfileScreen() {
  const data = [
    {
      id: "1",
      label: "Personal Information",
      icon: "person",
      onPress: "",
    },
    {
      id: "2",
      label: "Medical Information",
      icon: "medical",
      onPress: "",
    },
    {
      id: "3",
      label: "Change Password",
      icon: "ios-arrow-redo-sharp",
      onPress: "",
    },
    {
      id: "4",
      label: "Settings",
      icon: "settings",
      onPress: "",
    },
    {
      id: "5",
      label: "Log Out",
      icon: "log-out",
      onPress: "",
    },
  ];

  const profileImage =
    "https://images.unsplash.com/photo-1677504207981-618778a3abd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80";
  const [userFullName, setUserFullName] = useState("[ Name ]");
  const [profileIncomplete, setProfileIncomplete] = useState(true);

  const renderCompleteProfileButton = () => {
    return (
      <VStack pb="1.5" mt="2">
        <Badge
          rounded="full"
          mb={-4}
          mr={-3}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontWeight: "bold",
            fontSize: "12",
          }}
          bgColor="fuchsia.400"
        >
          !
        </Badge>
        <Link href="../intake/allergies" asChild>
          <Button
            bg="white"
            _text={{
              fontSize: "16",
              color: "secondaryGray.900",
              fontWeight: "semibold",
            }}
            rounded="15"
            _pressed={{ bgColor: "gray.200" }}
          >
            Finish Your Profile
          </Button>
        </Link>
      </VStack>
    );
  };

  return (
    <Wrapper>
      <Box px="4" flex="1">
        <Center flex="0.35" justifyContent="center" alignItems="center">
          <Avatar
            alignSelf="center"
            size="2xl"
            shadow="9"
            source={{
              uri: profileImage,
            }}
          ></Avatar>
          <Text pt="4" fontSize="xl" fontWeight="semibold" color="white">
            {userFullName}
          </Text>
          {profileIncomplete && renderCompleteProfileButton()}
        </Center>
        <Box flex="0.55" bgColor={"#FFF"} rounded="15" px="4" py="2">
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable>
                <Box p="4">
                  <HStack space="8" alignItems="center">
                    <Center bgColor="shades.1" rounded="10" p="4">
                      <Icon
                        name={item.icon}
                        color="white"
                        as={Ionicons}
                        size="lg"
                      />
                    </Center>
                    <Text
                      color="secondaryGray.900"
                      fontSize={20}
                      fontWeight="semibold"
                    >
                      {item.label}
                    </Text>
                  </HStack>
                </Box>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
        <Box flex="0.1" />
      </Box>
    </Wrapper>
  );
}
