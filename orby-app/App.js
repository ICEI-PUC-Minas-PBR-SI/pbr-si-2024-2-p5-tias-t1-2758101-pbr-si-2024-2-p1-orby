import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { OrbyInitialStack } from "./src/routes";
import { COLORS } from "./src/assets/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <OrbyInitialStack />
    </NavigationContainer>
  );
}
