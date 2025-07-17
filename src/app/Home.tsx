import { View } from "react-native"

// import { StackRoutesProps } from "@/routes/StackRoutes";
import { BottomTabRoutesProps } from "@/routes/BottomRoutes";

import Title from "@/components/Title"
import Header from "@/components/Header"
import ButtonIcon from "@/components/ButtonIcon";

export function Home({ navigation }: BottomTabRoutesProps<"home">) {
	return (
		<View style={{ flex: 1, padding: 32, paddingTop: 54  }}>
			<Header>
				<Title>Home</Title>
				<ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "182" })}/>
			</Header>
		</View>
	);
}