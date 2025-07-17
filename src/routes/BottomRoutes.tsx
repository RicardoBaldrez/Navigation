import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

type BottomTabRoutesList = {
	home: undefined;
	product: undefined | { id: string };
}

export type BottomTabRoutesProps<T extends keyof BottomTabRoutesList> = BottomTabScreenProps<BottomTabRoutesList, T>;

const BottomTab = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomTabRoutes() {
	return (
		<BottomTab.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
			<BottomTab.Screen name="home" component={Home} />
			<BottomTab.Screen name="product" component={Product} />
		</BottomTab.Navigator>
	)
}