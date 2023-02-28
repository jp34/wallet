import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  VStack,
  Button,
  FlatList,
  HStack,
  Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  // FlatList Data
  const data = [
    {
      id: "1",
      label: "Personal Information",
      icon: "user",
    },
    {
      id: "2",
      label: "Medical Information",
      icon: "medicinebox",
    },
    {
      id: "3",
      label: "Change Password",
      icon: "retweet",
    },
    {
      id: "4",
      label: "Settings",
      icon: "setting",
    },
    {
      id: "5",
      label: "Log Out",
      icon: "logout",
    },
  ];
  // User Profile Image
  const profileImage =
    "https://images.unsplash.com/photo-1677504207981-618778a3abd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80";
  // User Full Name Placeholder
  const userFullName = "[ Name ]";
  // User Profile Incomplete Flag
  const profileIncomplete = true;

  // Render Complete Profile Button
  const renderCompleteProfileButton = () => {
    return (
      // Vertical Stack - Place Exclamation Badge
      <VStack pt="1">
        {/* Exclamation Point Badge */}
        <Badge
          rounded="full"
          mb={-4}
          mr={-3}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontWeight: "bold",
            fontSize: "sm",
          }}
          bgColor="#6A5ACD"
        >
          !
        </Badge>
        {/* Complete Profile Button */}
        <Button
          mx={{
            base: "auto",
            md: 0,
          }}
          bg="white"
          _text={{
            fontSize: "lg",
            color: "#6A5ACD",
            fontWeight: "semibold",
          }}
          rounded="2xl"
          p="3.5"
          variant="subtle"
          _pressed={{ bgColor: "gray.200" }}
        >
          Finish Your Profile
        </Button>
      </VStack>
    );
  };

  return (
    // Page Container
    <Flex bg="#9370DB" flex={1} safeAreaTop>
      {/* Box to Cover Background */}
      <Box flex={1}>
        <Pressable
          flex={0.05}
          onPress={() => navigation.goBack()}
          justifyContent="center"
        >
          <HStack px="5">
            <AntDesign name="left" color="white" size="32" />
          </HStack>
        </Pressable>
        {/* Upper Box - Contains Avatar / Username / Navigation */}
        <Box flex="0.35" justifyContent="center" alignItems="center">
          {/* User Profile Image */}
          <Avatar
            alignSelf="center"
            size="2xl"
            shadow="9"
            source={{
              uri: profileImage,
            }}
          ></Avatar>
          {/* User Username / Full Name */}
          <Text pt="4" fontSize="2xl" fontWeight="semibold" color="white">
            {userFullName}
          </Text>
          {profileIncomplete && renderCompleteProfileButton()}
        </Box>
        {/* Lower Box - Contains List of Navigation Pages  */}
        <Box
          flex="0.6"
          height="50%"
          bgColor={"#F5F5F5"}
          roundedTop="50"
          p="4"
          pt="6"
        >
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.log(item.label)}>
                <Box px="5" py="3">
                  <HStack space="8" alignItems="center">
                    <Box
                      size="16"
                      bgColor="purple.200"
                      rounded="15"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <AntDesign name={item.icon} color="#6A5ACD" size="40%" />
                    </Box>
                    <Text color="#333333" fontSize="xl" fontWeight="semibold">
                      {item.label}
                    </Text>
                  </HStack>
                </Box>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileScreen;
