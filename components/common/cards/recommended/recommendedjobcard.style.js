import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
	container: (selectedJob, item) => ({
		margin: 4,
		width: 250,
		padding: SIZES.xLarge,
		backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
		borderRadius: SIZES.medium,
		justifyContent: "space-between",
		...SHADOWS.medium,
		// shadowColor: COLORS.white,
	}),
	logoContainer: (selectedJob, item) => ({
		width: 50,
		height: 50,
		backgroundColor:
			selectedJob === item.job_id ? COLORS.lightWhite : COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	}),
	logoImage: {
		width: "70%",
		height: "70%",
	},
	companyName: {
		fontSize: SIZES.medium,
		color: COLORS.gray,
		marginTop: SIZES.small / 1.5,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	jobName: (selectedJob, item) => ({
		fontSize: SIZES.large,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.secondary,
	}),
	infoWrapper: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	publisher: (selectedJob, item) => ({
		fontSize: SIZES.medium - 2,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	description: {
		fontSize: SIZES.medium - 2,
		color: COLORS.gray,
	},
});

export default styles;
