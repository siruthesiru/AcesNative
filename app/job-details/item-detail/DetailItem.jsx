import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";

const DetailItem = ({ itemName, itemValue }) => {
	console.log(itemName);
	console.log(itemValue);
	return (
		<View style={styles.container}>
			<View style={styles.detailsItem}>
				<Text>
					{itemName}
					{` : \t`}
				</Text>
				<Text style={{ fontWeight: "bold" }}>{itemValue}</Text>
			</View>
		</View>
	);
};

export default DetailItem;

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		// justifyContent: "center",
		// width: "80%",
	},
	detailsItem: {
		flexDirection: "row",
		marginVertical: 2,
	},
});
