import { View } from "react-native";

// import { StackRoutesProps } from "@/routes/StackRoutes";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

import Title from "@/components/Title";
import Header from "@/components/Header";
import ButtonIcon from "@/components/ButtonIcon";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="menu"
          onPress={() => navigation.toggleDrawer()}
        />
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "182" })}
        />
      </Header>
    </View>
  );
}
