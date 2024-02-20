import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Collection from "../screens/Collection";
import Cart from "../screens/Cart";
import MyLibrary from "../screens/MyLibrary";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const { navigate } = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#00755E",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <FontAwesome
            name="shopping-cart"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
            onPress={() => navigate("Cart")}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="Collection"
        component={Collection}
        options={{
          title: "Collection",

          drawerIcon: () => (
            <MaterialIcons name="library-books" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          drawerIcon: () => (
            <FontAwesome name="shopping-cart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="My Library"
        component={MyLibrary}
        options={{
          title: "My Library",
          drawerIcon: () => (
            <FontAwesome name="credit-card" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
