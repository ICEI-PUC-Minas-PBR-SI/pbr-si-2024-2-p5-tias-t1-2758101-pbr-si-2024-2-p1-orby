import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { OrbyInitialStack } from "./src/routes";
import { COLORS } from "./src/assets/colors";
import { AuthProvider } from "./src/pages/AuthContext";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={MyTheme}>
        <OrbyInitialStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
