import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
	Platform,
	StyleSheet,
	TextInput,
	Pressable,
	Image,
	FlatList,
} from "react-native";

import { List } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
	const faq = {
		id: [1, 2, 3],
		question: [
			"What is the purpose of the Alumni app for the College of Computer and Information Sciences and Mathematics?",
			"Is there a privacy policy in place for the Alumni app?",
			"How can I update my contact information on the Alumni app?",
		],
		answer: [
			"The Alumni app serves as a dedicated platform to connect and engage with fellow graduates from the College of Computer and Information Sciences and Mathematics. It facilitates networking, keeps you updated on department news, and provides a space to share professional achievements.",
			"Yes, the Alumni app adheres to a strict privacy policy to protect your personal information.",
			"To update your contact information, log in to the app and navigate to the settings or profile section. There, you'll find an option to edit your personal details, including your email address, phone number, and current employment information.",
		],
	};
	return (
		<View style={styles.container}>
			<View style={styles.faqGroup}>
				<List.AccordionGroup>
					<List.Accordion
						style={styles.question}
						title={faq.question[0]}
						titleNumberOfLines={4}
						id="1"
					>
						<List.Item
							style={styles.answer}
							title={faq.answer[0]}
							titleNumberOfLines={10}
						/>
					</List.Accordion>
					<List.Accordion
						style={styles.question}
						title={faq.question[1]}
						titleNumberOfLines={4}
						id="2"
					>
						<List.Item
							style={styles.answer}
							title={faq.answer[1]}
							titleNumberOfLines={10}
						/>
						<Link style={styles.link} href="https://pastebin.com/raw/rNtF5uEW">
							You can review the privacy policy through this link.
						</Link>
					</List.Accordion>
					<View>
						<List.Accordion
							style={styles.question}
							title={faq.question[2]}
							titleNumberOfLines={4}
							id="3"
						>
							<List.Item
								style={styles.answer}
								title={faq.answer[2]}
								titleNumberOfLines={10}
							/>
						</List.Accordion>
					</View>
				</List.AccordionGroup>
				<Text style={styles.footer}>
					If none of these answer your question, please contact the department
					through
					<Link style={styles.link} href="https://www.facebook.com/uscdcism/">
						this link.
					</Link>
				</Text>
			</View>

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		width: "100%",
	},
	faqGroup: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	question: { marginVertical: 10 },
	answer: { marginVertical: 10 },
	footer: {
		fontSize: 16,
		margin: 20,
	},
	link: {
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
		paddingLeft: 15,
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
