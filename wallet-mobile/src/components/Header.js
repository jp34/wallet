import React from "react";
import { HStack, ChevronLeftIcon, Text, Pressable } from "native-base";

export const Header = ({ onNavigateBack }) => {
  return (
    <Pressable onPress={onNavigateBack}>
      <HStack alignItems="center" p={1} space={1}>
        <ChevronLeftIcon color="#EEE" size="lg" />
        <Text fontSize="lg" fontWeight="semibold" color="#EEE">
          Back
        </Text>
      </HStack>
    </Pressable>
  );
};
