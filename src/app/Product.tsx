import { View } from "react-native"
import { useRoute } from "@react-navigation/native";

import { StackRoutes, StackRoutesProps } from "@/routes/StackRoutes";

import Title from "@/components/Title"
import Header from "@/components/Header"
import ButtonIcon from "@/components/ButtonIcon";

type RouteParams = StackRoutesProps<"product">;

export function Product({ navigation, route }: StackRoutesProps<"product">) {
	const { params } = useRoute<RouteParams["route"]>();

	return (
		<View style={{ flex: 1, padding: 32, paddingTop: 54  }}>
			<Header>
				<ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
				{/* <Title>Product { route.params?.id }</Title> */}
				<Title>Product with hook: {params?.id}</Title>
			</Header>
		</View>
	);
}