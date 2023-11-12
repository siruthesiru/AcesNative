import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 10,
	},
	cardContainer: {
		height: 250,
		width: "95%",
		marginVertical: 10,
		borderColor: COLORS.gray2,
		borderWidth: 1,
	},
	cover: {
		height: "75%",
		width: "100%",
	},
	date: {
		fontSize: 10,
		marginBottom: 10,
	},
	textSection: {
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	body: {
		fontSize: 14,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});

export default styles;
