import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { COLORS } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function FAQ() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.question}>
					What is the purpose of the Alumni app for the College of Computer and
					Information Sciences and Mathematics?
				</Text>
				<Text style={styles.answer}>
					The Alumni app serves as a dedicated platform to connect and engage
					with fellow graduates from the College of Computer and Information
					Sciences and Mathematics. It facilitates networking, keeps you updated
					on department news, and provides a space to share professional
					achievements.
				</Text>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.3)"
				/>

				<Text style={styles.question}>
					Is there a privacy policy in place for the Alumni app?
				</Text>
				<Text style={styles.answer}>
					Yes, the Alumni app adheres to a strict privacy policy to protect your
					personal information.
				</Text>
				<Link style={styles.link} href="https://pastebin.com/raw/rNtF5uEW">
					You can review the privacy policy through this link.
				</Link>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.3)"
				/>

				<Text style={styles.question}>
					How can I update my contact information on the Alumni app?
				</Text>
				<Text style={styles.answer}>
					To update your contact information, log in to the app and navigate to
					the settings or profile section. There, you'll find an option to edit
					your personal details, including your email address, phone number, and
					current employment information.
				</Text>
				<View
					style={styles.separator}
					lightColor="#eee"
					darkColor="rgba(255,255,255,0.3)"
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 20,
		marginHorizontal: 20,

		width: "95%",
		// alignItems: "center",
		// justifyContent: "center",
	},
	question: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "justify",
		paddingRight: 20,
	},
	answer: {
		fontSize: 16,
		marginTop: 10,
		paddingLeft: 25,
		paddingRight: 30,
		textAlign: "justify",
	},
	link: {
		fontSize: 16,
		marginTop: 10,
		paddingLeft: 25,
		paddingRight: 30,
		color: "#0A7CFF",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "75%",
		alignSelf: "center",
	},
});
