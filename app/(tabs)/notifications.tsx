import { StyleSheet, ScrollView, Pressable } from "react-native";

import { Card } from "react-native-paper";

import { COLORS } from "../../constants";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function Notifications() {
	const news = [
		{
			id: 1,
			title: "Kyocera is hiring!",
			date: "October 25, 2023",
			description:
				"Graduating students and Alumni are invited to join the virtual job fair.",
			cover:
				"https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/313327466_10210593093379515_2915716465542839071_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUsslXi0dLtBwnPxugIgbP7KcOXC-xi7Xspw5cL7GLtfMuYZva129FX8FSBRlSI-tHmHiwopfsMR_-gbDWFoq3&_nc_ohc=ufvMvg69JOsAX8Yu5jg&_nc_ht=scontent.fceb1-3.fna&oh=00_AfAbmTCe4XfqORb2z6YsnUmlDPcunDV4UCSkFQPB7ngH-w&oe=65524C3A",
		},
	];
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					{news.map((item) => (
						<Pressable
							key={item.id}
							// onPress={() => {
							// 	router.push(`../../../app/news-details/${item.id}`);
							// }}
						>
							<Card style={styles.cardContainer}>
								<Card.Content style={styles.textSection}>
									<Text style={styles.title} numberOfLines={1}>
										{item.title}
									</Text>
									<Text style={styles.date} numberOfLines={1}>
										{item.date}{" "}
									</Text>
									<Text style={styles.body} numberOfLines={2}>
										{item.description}
									</Text>
								</Card.Content>
							</Card>
						</Pressable>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 10,
	},
	cardContainer: {
		height: 125,
		width: "95%",
		marginVertical: 10,
		borderColor: COLORS.gray2,
		borderWidth: 1,
		marginLeft: "2.5%",
	},
	cover: {
		height: "75%",
		width: "100%",
	},
	date: {
		fontSize: 10,
		marginBottom: 10,
	},
	textSection: {
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	body: {
		fontSize: 14,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
