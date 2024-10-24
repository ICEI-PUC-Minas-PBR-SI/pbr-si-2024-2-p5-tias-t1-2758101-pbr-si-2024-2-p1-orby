import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "./assets/colors";
import { SCREENS } from "./sreens";
import { Header } from "./components/orby-header/DefaultHeader";
import { useAuth } from "./pages/AuthContext";

const Stack = createNativeStackNavigator();

export function OrbyInitialStack() {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <Stack.Navigator initialRouteName="news">
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={OrbyTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HomeNestedScreens"
            component={OrbyHomeStack}
            options={{
              header: ({ navigation }) => {
                return <Header leftButton={navigation.goBack} />;
              },
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            key={SCREENS.news.name}
            name={SCREENS.news.name}
            component={SCREENS.news.component}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            key={SCREENS.login.name}
            name={SCREENS.login.name}
            component={SCREENS.login.component}
            options={{
              header: ({ navigation }) => {
                return <Header leftButton={navigation.goBack} />;
              },
            }}
          />

          <Stack.Screen
            key={SCREENS.signup.name}
            name={SCREENS.signup.name}
            component={SCREENS.signup.component}
            options={{
              header: ({ navigation }) => {
                return <Header leftButton={navigation.goBack} />;
              },
            }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function OrbyTabs() {
  let tabs = [
    SCREENS.home,
    SCREENS.form,
    SCREENS.ranking,
    SCREENS.map,
    SCREENS.profile,
  ];

  return (
    <Tab.Navigator>
      {tabs.map((data) => {
        return (
          <Tab.Screen
            key={data.name}
            name={data.name}
            component={data.component}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Ionicons
                      size={size}
                      color={COLORS.primary}
                      name={data.icon}
                    />
                  );
                }

                return (
                  <Ionicons
                    size={size}
                    color={COLORS.primary}
                    name={data.outlinedIcon}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export function OrbyHomeStack() {
  return (
    <Stack.Navigator initialRouteName="forum">
      <Stack.Screen
        key={SCREENS.forum.name}
        name={SCREENS.forum.name}
        component={SCREENS.forum.component}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
