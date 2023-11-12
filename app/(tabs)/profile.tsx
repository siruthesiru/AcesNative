// External modules
import { Text } from "../../components/Themed";
import { View } from "../../components/Themed";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";
import Linking from "react-native";
import Button from "react-native-paper";

import DetailItem from "../job-details/item-detail/DetailItem";

const profilePicture = require("../../assets/images/pfp.png");

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<Image source={profilePicture} style={styles.image} />
			<Text style={styles.title}>Yehudi Santillan</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<View style={styles.detailsContainer}>
				<View style={styles.detailsSection}>
					<DetailItem itemName="ID Number" itemValue="18101308" />
					<DetailItem
						itemName={`Program \t`}
						itemValue="Information Technology"
					/>
					<DetailItem itemName="Edu. Level" itemValue="Bachelor" />
					<DetailItem itemName="Graduated" itemValue="2021" />
				</View>
				<View style={styles.detailsSection}>
					<DetailItem itemName={`Skills \t`} itemValue="Web Development" />
					<Button
						// icon="camera"
						mode="contained"
						onPress={() => Linking.openURL(data[0].job_apply_link)}
					>
						Apply Now
					</Button>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20,
	},
	separator: {
		marginTop: 30,
		height: 1,
		width: "80%",
	},
	imageContainer: {
		flex: 1,
		paddingTop: 58,
	},
	image: {
		width: 175,
		height: 175,
		borderRadius: 100,
		marginTop: 50,
	},
	info: {
		paddingTop: 10,
	},
	detailsContainer: {
		width: "100%",
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
	detailsSection: {
		marginLeft: "20%",
		maxWidth: "90%",
		marginVertical: 15,
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
