import SelectDropdown from "react-native-select-dropdown";
import { View } from "react-native";
import styles from "../styles";

const Dropdown = ({ options }) => {
  return (
    <View style={{ alignItems: "center", marginHorizontal: 30 }}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        defaultButtonText="Select a Diagnosis"
        buttonStyle={{
          marginHorizontal: 30,
          borderRadius: 10,
          width: "100%",
        }}
        buttonTextStyle={{
          color: styles.colors.primary,
          fontSize: 20,
          fontWeight: "bold",
        }}
        rowTextStyle={{ color: styles.colors.primary, fontSize: 20 }}
        search
      />
    </View>
  );
};

export default Dropdown;
