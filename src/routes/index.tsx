import { NavigationContainer } from "@react-navigation/native";

// import { StackRoutes } from "./StackRoutes";
// import { BottomTabRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            {/* <StackRoutes /> */}
            {/* <BottomTabRoutes /> */}
            <DrawerRoutes />
        </NavigationContainer>
    )
}