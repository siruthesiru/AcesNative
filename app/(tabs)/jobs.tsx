import {
	StyleSheet,
	TextInput,
	Pressable,
	Image,
	ViewStyle,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { useRouter } from "expo-router";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { icons, images, SIZES, COLORS } from "../../constants";
import searchStyle from "../../components/home/jobs/jobs.style";
import Recommendedjobs from "../../components/home/recommended/Recommendedjob";

const jobTypes = ["Full-Time", "Part-Time"];

export default function JobsScreen() {
	const [activeJobType, setActiveJobType] = useState("Full-Time");
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeMessage}>
				Work with the department's partners!
			</Text>
			<View style={searchStyle.searchContainer}>
				<View style={searchStyle.searchWrapper}>
					<TextInput
						style={searchStyle.searchInput}
						value=""
						onChange={() => {}}
						placeholder="Search jobs"
					/>
				</View>
				<Pressable style={searchStyle.searchBtn}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</Pressable>
			</View>
			<View style={searchStyle.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<Pressable
							style={[styles.tab, activeJobType === item && styles.tabSelected]}
							onPress={() => {
								setActiveJobType(item);
								router.push("/search/${item}");
							}}
						>
							<Text
								style={[
									styles.tabText,
									activeJobType === item && styles.tabTextSelected,
								]}
							>
								{item}
							</Text>
						</Pressable>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>

			<Recommendedjobs />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	searchBtnImage: {
		width: "50%",
		height: "50%",
		tintColor: COLORS.white,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	tab: {
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.medium,
		borderWidth: 1,
		borderColor: COLORS.gray, // Default border color
	},
	tabSelected: {
		borderColor: COLORS.white, // Border color when selected
	},
	tabText: {
		color: COLORS.gray, // Default text color
	},
	tabTextSelected: {
		color: COLORS.white, // Text color when selected
	},
	welcomeMessage: {
		fontSize: 20,
		fontWeight: "bold",
		paddingTop: 30,
	},
});
