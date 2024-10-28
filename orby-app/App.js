import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { OrbyInitialStack } from "./src/routes";
import { COLORS } from "./src/assets/colors";
import { AuthProvider } from "./src/pages/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer theme={MyTheme}>
          <OrbyInitialStack />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
