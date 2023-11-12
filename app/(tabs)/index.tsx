import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import Feed from "../../components/home/feed/Feed";

export default function Announcements() {
	return (
		<View style={styles.container}>
			<Announcements />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
