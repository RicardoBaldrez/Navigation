import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

type BottomTabRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomTabRoutesProps<T extends keyof BottomTabRoutesList> =
  BottomTabScreenProps<BottomTabRoutesList, T>;

const BottomTab = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomTabRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2c46b1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
