import React from "react";
import { useTheme, Center, Text } from "native-base";

export const Logo = ({ lg }) => {
  const theme = useTheme();
  return (
    <Center
      width={lg ? 160 : 55}
      height={lg ? 160 : 55}
      rounded={lg ? 28 : 10}
      bg={{
        linearGradient: {
          colors: ["base", "secondary"],
        },
      }}
    >
      <Text
        color="#EEE"
        fontSize={lg ? 30 : 11}
        letterSpacing="1"
        fontWeight="bold"
      >
        JustBe
      </Text>
    </Center>
  );
};
