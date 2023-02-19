import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";

const CheckboxList = ({ options }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckedItem = (item) => {
    setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
  };

  return (
    <View>
      {options.map((item, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "center", marginVertical: 6}}
        >
          <TouchableOpacity
            style={{
              height: 35,
              width: 35,
              borderWidth: 1.25,
              borderColor: "#FFF",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => handleCheckedItem(item)}
          >
            {checkedItems[item] && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: "#FFF",
                }}
              />
            )}
          </TouchableOpacity>
          <Text style={{ color: "#FFF", fontSize: 22, marginLeft: 10, marginVertical: 7, fontWeight: "475" }}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CheckboxList;
