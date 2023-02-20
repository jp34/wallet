import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckboxList = ({ options }) => {
  // Constant and component to handle checked items.
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckedItem = (item) => {
    setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
  };

  return (
    // Container for checkbox list.
    <View style={{ paddingHorizontal: 20 }}>
      {/* Component to Create Checkbox List */}
      {options.map((item, index) => (
        // Item View
        <View key={index} style={styles.item.view}>
          <TouchableOpacity
            style={styles.checkbox.view}
            onPress={() => handleCheckedItem(item)}
          >
            {/* If Checked, Enable View */}
            {checkedItems[item] && <View style={styles.checkbox.enabled} />}
          </TouchableOpacity>
          {/* Item Text */}
          <Text style={styles.item.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    view: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 6,
    },
    text: {
      color: "#FFF",
      fontSize: 22,
      marginLeft: 10,
      marginVertical: 7,
      fontWeight: "475",
    },
  },
  checkbox: {
    view: {
      height: 35,
      width: 35,
      borderWidth: 1.25,
      borderColor: "#FFF",
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    enabled: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: "#FFF",
    },
  },
});

export default CheckboxList;
