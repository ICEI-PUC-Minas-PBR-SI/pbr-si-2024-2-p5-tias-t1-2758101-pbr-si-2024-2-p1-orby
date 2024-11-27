import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "./assets/colors";
import { SCREENS } from "./sreens";
import { Header } from "./components/orby-header/DefaultHeader";
import { useAuth } from "./pages/AuthContext";
import { FormHeader } from "./components/orby-header/FormHeader";

const Stack = createNativeStackNavigator();

export function OrbyInitialStack() {
  const { isLoggedIn } = useAuth();

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
            options={{ headerShown: false }}
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

          <Stack.Screen
            key={SCREENS.aboutus.name}
            name={SCREENS.aboutus.name}
            component={SCREENS.aboutus.component}
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
  return (
    <Tab.Navigator>
      <Tab.Screen
        key={SCREENS.home.name}
        name={SCREENS.home.name}
        component={SCREENS.home.component}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={COLORS.primary}
                  name={SCREENS.home.icon}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color={COLORS.primary}
                name={SCREENS.home.outlinedIcon}
              />
            );
          },
        }}
      />

      <Tab.Screen
        key={SCREENS.form.name}
        name={SCREENS.form.name}
        component={SCREENS.form.component}
        options={{
          header: ({ navigation }) => {
            return (
              <FormHeader
                leftButton={navigation.goBack}
                title="Questionário de aptidão"
              />
            );
          },
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={COLORS.primary}
                  name={SCREENS.form.icon}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color={COLORS.primary}
                name={SCREENS.form.outlinedIcon}
              />
            );
          },
        }}
      />

      <Tab.Screen
        key={SCREENS.ranking.name}
        name={SCREENS.ranking.name}
        component={SCREENS.ranking.component}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={COLORS.primary}
                  name={SCREENS.ranking.icon}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color={COLORS.primary}
                name={SCREENS.ranking.outlinedIcon}
              />
            );
          },
        }}
      />

      <Tab.Screen
        key={SCREENS.map.name}
        name={SCREENS.map.name}
        component={SCREENS.map.component}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={COLORS.primary}
                  name={SCREENS.map.icon}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color={COLORS.primary}
                name={SCREENS.map.outlinedIcon}
              />
            );
          },
        }}
      />

      <Tab.Screen
        key={SCREENS.profile.name}
        name={SCREENS.profile.name}
        component={SCREENS.profile.component}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={COLORS.primary}
                  name={SCREENS.profile.icon}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color={COLORS.primary}
                name={SCREENS.profile.outlinedIcon}
              />
            );
          },
        }}
      />
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
        options={{
          header: ({ navigation }) => {
            return <Header leftButton={navigation.goBack} />;
          },
        }}
      />
      <Stack.Screen
        key={SCREENS.topic.name}
        name={SCREENS.topic.name}
        component={SCREENS.topic.component}
        options={{
          header: ({ navigation }) => {
            return <Header leftButton={navigation.goBack} />;
          },
        }}
      />

<Stack.Screen
        key={SCREENS.aboutus.name}
        name={SCREENS.aboutus.name}
        component={SCREENS.aboutus.component}
        options={{
          header: ({ navigation }) => {
            return <Header leftButton={navigation.goBack} />;
          },
        }}
      />

    </Stack.Navigator>

  );
}
