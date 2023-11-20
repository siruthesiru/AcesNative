import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { Link, useRouter } from "expo-router";

// import Feed from "../../components/home/feed/Feed";

export default function LandingPage() {
	router = useRouter();

	return (
		<View style={styles.container}>
			<Button
				style={styles.buttons}
				mode="contained"
				onPress={() => router.push("./login")}
			>
				Login
			</Button>

			<View style={styles.orSeparator}>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.1)"
				/>
				<Text>or</Text>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.1)"
				/>
			</View>

			<Button
				style={styles.buttons}
				mode="outlined"
				onPress={() => router.push("./register")}
			>
				Register
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		margin: 10,
		height: 1,
		width: "30%",
	},
	orSeparator: {
		flexDirection: "row",
		width: "50%",
		alignContent: "center",
		justifyContent: "center",
	},
	buttons: {
		width: "60%",
		marginVertical: 20,
	},
});
