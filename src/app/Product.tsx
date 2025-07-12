import { View } from "react-native"

import { StackRoutesProps } from "@/routes/StackRoutes";

import Title from "@/components/Title"
import Header from "@/components/Header"
import ButtonIcon from "@/components/ButtonIcon";

export function Product({ navigation }: StackRoutesProps<"product">) {
	return (
		<View style={{ flex: 1, padding: 32, paddingTop: 54  }}>
			<Header>
				<ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
				<Title>Product</Title>
			</Header>
		</View>
	);
}