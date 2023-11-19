import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
		width: "100%",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: SIZES.small,
	},
	headerTitle: {
		fontSize: SIZES.large,
		// color: COLORS.white,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		color: COLORS.gray,
		alignSelf: "flex-end",
	},
	cardsContainer: {
		marginTop: SIZES.medium,
		gap: SIZES.small,
	},
});

export default styles;
