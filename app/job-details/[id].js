import { StatusBar } from "expo-status-bar";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Fragment, useCallback, useState } from "react";

import { Button } from "react-native-paper";

import { checkImageURL } from "../../utils";

import {
	headerBackButtonMenuEnabled,
	ScrollView,
	Platform,
	StyleSheet,
	Image,
	ActivityIndicator,
	RefreshControl,
	Linking,
} from "react-native";

import { Text, View } from "../../components/Themed";
import DetailItem from "../job-details/item-detail/DetailItem";

import { COLORS, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();

	const { data, isLoading, error, refetch } = useFetch("job-details", {
		job_id: params.id,
	});

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		refetch();
		setRefreshing(false);
	}, []);

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					// headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackButtonMenuEnabled,
					headerTitle:
						data && data.length > 0
							? data[0].job_title + " for " + data[0].employer_name
							: "Job Details",
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : data && data.length > 0 ? (
					<View style={styles.detailsContainer}>
						<View style={styles.logoContainer}>
							<Image
								style={styles.logo}
								source={{
									uri: checkImageURL(data[0].employer_logo)
										? data[0].employer_logo
										: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
								}}
								resizeMode="contain"
							/>
						</View>

						<View style={styles.detailsHeader}>
							<Text style={styles.title}>{data[0].job_title}</Text>
							<Text>
								{data[0].employer_name} · Cebu, Central Visayas · Philippines
							</Text>
						</View>

						<View style={styles.detailsSection}>
							{/* <Text>{data[0].job_required_skills}</Text> */}
							<Text style={styles.subtitle}>About the Job</Text>

							<DetailItem itemName="Available Slots" itemValue="10/10" />
							<DetailItem
								itemName="Available Until"
								itemValue="December 10, 2023"
							/>
							<DetailItem
								itemName="Offered Salary"
								itemValue="₱ 30,000.00 - 50,000.00"
							/>
							<DetailItem itemName={`Years of Exp. \t`} itemValue="0" />
							<DetailItem itemName="Resume Required" itemValue="Yes" />

							<View
								style={styles.separator}
								lightColor="#eee"
								darkColor="rgba(255,255,255,0.3)"
							/>

							<Text>{data[0].job_description}</Text>

							<View
								style={styles.separator}
								lightColor="#eee"
								darkColor="rgba(255,255,255,0.3)"
							/>

							<Button
								// icon="camera"
								mode="contained"
								onPress={() => Linking.openURL(data[0].job_apply_link)}
							>
								Apply Now
							</Button>
						</View>
					</View>
				) : (
					<Text>No data available</Text>
				)}
			</ScrollView>

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
};

export default JobDetails;

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		// justifyContent: "center",
		// width: "80%",
	},
	detailsContainer: {
		width: "100%",
		flex: 1,
		// alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		maxWidth: "65%",
		alignSelf: "center",
		textAlign: "center",
		marginBottom: 10,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
		alignSelf: "center",
	},
	logo: {
		width: "75%",
		height: "75%",
	},
	logoContainer: {
		width: 100,
		height: 100,
		marginVertical: 15,
		backgroundColor: COLORS.lightWhite,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	detailsSection: {
		marginLeft: "12%",
		maxWidth: "75%",
		marginBottom: 30,
	},
	detailsHeader: {
		alignItems: "center",
		marginVertical: 15,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 15,
	},
	detailsItem: {
		flexDirection: "row",
		marginVertical: 2,
	},
});
