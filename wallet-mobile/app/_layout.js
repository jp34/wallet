import { Stack } from "expo-router";
import { NativeBaseProvider, extendTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout() {
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  const theme = extendTheme({
    colors: {
      base: "#6030D9",
      secondary: "#46239f",
      shades: {
        1: "#8751FE",
        2: "#AE72FF",
        3: "#D494FF",
        4: "#FAB6FF",
      },
      friends: {
        1: "#C586FF",
        2: "#65BAA9",
        3: "#005245",
      },
      grayComplement: {
        100: "#eeedf1",
        200: "#e2e0e7",
        300: "#d4d1dc",
        400: "#c6c2d0",
        500: "#b6b0c2",
        600: "#a39db3",
        700: "#8d85a0",
        800: "#706884",
        900: "#423d4d",
      },
      secondaryPurple: {
        100: "#f0ebfb",
        200: "#e5ddf9",
        300: "#d9cdf6",
        400: "#cbbcf3",
        500: "#bca8ef",
        600: "#ab91eb",
        700: "#9576e6",
        800: "#7850df",
      },
      secondaryViolet: {
        100: "#f7e9fb",
        200: "#f1d9f8",
        300: "#ebc7f5",
        400: "#e3b3f1",
        500: "#db9ced",
        600: "#d181e8",
        700: "#c45de1",
        800: "#ab2ece",
      },
      secondaryPink: {
        200: "#fbe8f6",
        300: "#f8d8ef",
        400: "#f4c5e7",
        500: "#f1b0de",
        600: "#ec98d4",
        700: "#e77ac8",
        800: "#df51b7",
      },
      secondaryBlue: {
        100: "#ddf1f9",
        200: "#c4e6f4",
        300: "#a8dbef",
        400: "#88cde9",
        500: "#63bee2",
        600: "#35abda",
        700: "#2a93bd",
        800: "#217495",
      },
    },
    components: {
      Button: {
        variants: {
          primary: {
            borderWidth: 1,
            borderColor: "#EEE",
            rounded: 7,
            _text: {
              color: "#EEE",
              fontWeight: "bold",
            },
            _pressed: {
              bg: "secondaryViolet.600",
            },
          },
        },
      },
      Input: {
        variants: {
          primary: {
            borderWidth: 1,
            borderColor: "#EEE",
            py: 3,
            _input: {
              color: "#EEE",
              selectionColor: "#EEE",
            },
            _focus: {
              selectionColor: "#EEE",
              backgroundColor: "secondaryViolet.600",
              borderColor: "secondaryViolet.700",
            },
            _hover: {
              borderColor: "secondaryViolet.700",
            },
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <Stack
        screenOptions={{
          headerBackVisible: true,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#EEE",
        }}
      />
    </NativeBaseProvider>
  );
}
