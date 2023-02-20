import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.selectedDateText}>
        {selectedDay && selectedMonth && selectedYear
          ? `${selectedMonth}/${selectedDay}/${selectedYear}`
          : "Please select a date"}

      </Text> */}
      <View style={styles.datePickerContainer}>
        <SelectDropdown
          data={months}
          onSelect={(selectedItem, index) => setSelectedMonth(selectedItem)}
          defaultButtonText="Month"
          buttonText={selectedMonth ? selectedMonth : "Month"}
          buttonStyle={styles.buttonStyle.month}
          buttonTextStyle={styles.buttonTextStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={{ color: "#6030D9" }}
        />
        <Text style={styles.text}>/</Text>
        <SelectDropdown
          data={days}
          onSelect={(selectedItem, index) => setSelectedDay(selectedItem)}
          defaultButtonText="Day"
          buttonText={selectedDay ? selectedDay : "Day"}
          buttonStyle={styles.buttonStyle.day}
          buttonTextStyle={styles.buttonTextStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={{ color: "#6030D9" }}
        />
        <Text style={styles.text}>/</Text>
        <SelectDropdown
          data={years}
          onSelect={(selectedItem, index) => setSelectedYear(selectedItem)}
          defaultButtonText="Year"
          buttonText={selectedYear ? selectedYear.toString() : "Year"}
          buttonStyle={styles.buttonStyle.year}
          buttonTextStyle={styles.buttonTextStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={{ color: "#6030D9" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    day: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      borderWidth: 2,
      borderColor: "#FFF",
      paddingVertical: 12,
      borderRadius: 10,
      marginHorizontal: 5,
      width: "20%",
    },
    month: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      borderWidth: 2,
      borderColor: "#FFF",
      paddingVertical: 12,
      borderRadius: 10,
      marginHorizontal: 5,
      width: "30%",
    },
    year: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      borderWidth: 2,
      borderColor: "#FFF",
      paddingVertical: 12,
      borderRadius: 10,
      marginHorizontal: 5,
      width: "30%",
    },
  },
  buttonTextStyle: {
    color: "#FFF",
    fontSize: 20,
  },
  dropdownStyle: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  selectedDateText: {
    marginTop: 16,
    fontSize: 18,
    color: "#333",
  },
  text: { color: "#FFF", fontSize: 30, marginHorizontal: 3 },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#6030D9",
  },
});

export default DatePicker;
