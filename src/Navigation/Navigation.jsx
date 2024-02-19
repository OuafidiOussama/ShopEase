import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./MyDrawer";
import Courses from "../screens/Courses";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Courses" component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
