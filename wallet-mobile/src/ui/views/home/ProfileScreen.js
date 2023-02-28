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
  Spacer,
  Pressable,
} from "native-base";
import { Gradients } from "../../Style";

const ProfileScreen = ({ navigation }) => {
  const data = [
    {
      id: "1",
      label: "Personal Information",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "2",
      label: "Medical Information",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "3",
      label: "Change Password",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "4",
      label: "Settings",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "5",
      label: "Log Out",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

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
    <Flex bg="#9370DB" flex safeAreaTop>
      {/* Box to Cover Background */}
      <Box flex>
        {/* Upper Box - Contains Avatar / Username / Navigation */}
        <Box flex="2/6" justifyContent="center" alignItems="center">
          {/* User Profile Image */}
          <Avatar
            alignSelf="center"
            size="2xl"
            shadow="9"
            source={{
              uri: "https://images.unsplash.com/photo-1677504207981-618778a3abd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2456&q=80",
            }}
          ></Avatar>
          {/* User Username / Full Name */}
          <Text pt="4" fontSize="2xl" fontWeight="semibold" color="white">
            [ Name ]
          </Text>
          {renderCompleteProfileButton()}
        </Box>
        {/* Lower Box - Contains List of Navigation Pages  */}
        <Box
          flex="4/6"
          height="50%"
          bgColor={"#F5F5F5"}
          rounded="50"
          p="4"
          pt="6"
        >
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.log(item.label)}>
                <Box p="5">
                  <HStack space="8" alignItems="center">
                    <Box size="16" bgColor="purple.200" rounded="15">
                    </Box>
                    <Text
                      color="#333333"
                      fontSize="xl"
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
      </Box>
    </Flex>
  );
};

export default ProfileScreen;
