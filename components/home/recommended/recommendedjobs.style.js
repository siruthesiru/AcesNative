import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
		width: "100%",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		fontSize: SIZES.large,
		color: COLORS.white,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		color: COLORS.gray,
		alignSelf: "flex-end",
	},
	cardsContainer: {
		marginTop: SIZES.medium,
		marginHorizontal: 0,
	},
});

export default styles;
