//   const [description, setDescription] = React.useState();
//   const [severity, setSeverity] = React.useState();

//   async function attemptCreateAllergy() {
//     try {
//       // const result = await createPatientAllergy(patientId, description, severity);
//       // if (result)
//       return navigation.navigate("MedicationIntake");
//       // Handle for incorrect logins
//     } catch (err) {
//       console.log("Create account failed with error");
//       console.error(err);
//       return false;
//     }
//   }

//   const renderForm = () => {
//     const styles = StyleSheet.create({
//       form: {
//         paddingVertical: 16,
//         paddingHorizontal: 32,
//       },
//       title: {
//         marginLeft: 8,
//         marginBottom: 16,
//         color: "#eeeeee",
//         fontSize: 20,
//         fontFamily: "Quicksand-Regular",
//       },
//     });
//     return (
//       <ScrollView style={styles.form}>
//         <Text style={styles.title}>Record an Allergy</Text>
//         <BasicInput
//           options={{
//             placeholder: "Description",
//             placeholderTextColor: "#eeeeee",
//             require: true,
//             onChangeText: (text) => setDescription(text),
//           }}
//         />

//         <BasicInput
//           options={{
//             placeholder: "Severity",
//             placeholderTextColor: "#eeeeee",
//             require: true,
//             onChangeText: (text) => setSeverity(text),
//           }}
//         />
//       </ScrollView>
//     );
//   };

//           {renderForm()}
//           <PrimaryButton
//             label="Next"
//             options={{
//               onPress: () => attemptCreateAllergy(),
//             }}
//           />
//         </View>
//   );
// }

import { Box, Text } from "native-base";
import { Wrapper } from "../../../components/Wrapper";
import { Header } from "../../../components/Header";
import { createPatientAllergy } from "../../../api/strapi-client";

export default function AllergyIntakeScreen({ navigation }) {
  const allergens = [
    "Dairy",
    "Eggs",
    "Tree nuts",
    "Peanuts",
    "Shellfish",
    "Wheat",
    "Soy",
    "Fish",
    "Sesame",
    "Mustard",
    "Corn",
    "Sulfites",
    "Latex",
    "Strawberries",
    "Tomatoes",
    "Chocolate",
    "Melons",
    "Kiwi fruit",
    "Mango",
    "Pineapple",
    "Stone fruits (e.g. peaches, plums, apricots",
    "Avocado",
    "Garlic",
    "Onion",
    "Bell peppers",
    "Cucumber",
    "Celery",
    "Carrots",
    "Potatoes",
    "Beef",
    "Chicken",
    "Pork",
    "Lamb",
    "Venison",
    "Rabbit",
    "Quail",
    "Turkey",
    "Duck",
    "Goose",
    "Eggplant",
    "Zucchini",
    "Squash",
    "Peas",
    "Lentils",
    "Chickpeas",
    "Beans",
    "Almonds",
    "Hazelnuts",
    "Cashews",
    "Pistachios",
    "Macadamia nuts",
    "Coconut",
    "Buckwheat",
    "Oats",
    "Rye",
    "Barley",
    "Millet",
    "Sorghum",
    "Amaranth",
    "Quinoa",
    "Tea",
    "Coffee",
    "Wine",
    "Beer",
    "Sake",
    "Whiskey",
    "Rum",
    "Vodka",
    "Gin",
    "Brandy",
    "Champagne",
    "Prosecco",
    "Cider",
    "Lactose",
    "Fructose",
    "Sucrose",
    "Maltose",
    "Honey",
    "Maple syrup",
    "Molasses",
    "Artificial sweeteners (e.g. aspartame, saccharin)",
    "Monosodium glutamate (MSG)",
    "Sulfur dioxide",
    "Benzoates",
    "Nitrates",
    "Nitrites",
    "BHA (butylated hydroxyanisole)",
    "BHT (butylated hydroxytoluene)",
    "Propylene glycol",
    "Polysorbate 80",
    "Sorbic acid",
    "Sodium benzoate",
    "Sodium nitrate",
    "Sodium nitrite",
    "Tartrazine",
    "Annatto",
    "Red dye #40",
    "Yellow dye #5",
    "Blue dye #1",
    "Green dye #3",
    "Citrus fruits",
  ];

  return (
    // Page Wrapper
    <Wrapper keyboard>
      <Box flex="0.1" bg="amber.500" justifyContent="center">
        <Header onNavigateBack={() => navigation.goBack()} />
      </Box>
      <Box flex="0.2" bg="pink.500" alignItems="flex-start">
        <Text color="#EEE" fontSize="4xl">
          Allergies
        </Text>
      </Box>
    </Wrapper>
  );
}
