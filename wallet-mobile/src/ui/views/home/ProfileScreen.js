import { Flex, Avatar, Box, Text, Badge, VStack, Button } from "native-base";
import { Gradients } from "../../Style";

const ProfileScreen = ({ navigation }) => {
  // Render Complete Profile Button
  const renderCompleteProfileButton = () => {
    return (
      // Vertical Stack - Place Exclamation Badge
      <VStack>
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
          bgColor="purple.600"
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
            color: Gradients.primary,
            fontWeight: "semibold",
          }}
          rounded="2xl"
          p="3"
          variant="subtle"
          _pressed={{ bgColor: "gray.200" }}
        >
          Complete Profile Information
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
        <Box
          flex="2/6"
          justifyContent="center"
          alignItems="center"
        >
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
            [Username / Full Name]
          </Text>
          {false && renderCompleteProfileButton()}
        </Box>
        {/* Lower Box - Contains List of Navigation Pages  */}
        <Box flex="4/6" height="50%" bgColor={"#F5F5F5"} rounded="50"></Box>
      </Box>
    </Flex>
  );
};

export default ProfileScreen;
