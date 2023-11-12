import { StyleSheet, Image, Button, Pressable } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RectButton } from "react-native-gesture-handler";

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
			<Text style={styles.info}>Position: Software Developer</Text>
			<Text style={styles.info}>Course: Information Systems</Text>
			<Text style={styles.info}>Date Graduated: May 20, 2018</Text>
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
		marginVertical: 30,
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
});
