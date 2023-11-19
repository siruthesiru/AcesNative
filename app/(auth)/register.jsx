import { StyleSheet } from "react-native";

// import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

// import Feed from "../../components/home/feed/Feed";

export default function Register() {
	return (
		<View style={styles.container}>
			<Text>Register</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
