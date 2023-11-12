import { StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import { COLORS } from "../../../constants";

import EditScreenInfo from "../../EditScreenInfo";
import { Text, View } from "../../Themed";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../../constants/Colors";

export default function Feed() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Card style={styles.cardContainer}>
					<Card.Cover
						style={styles.cover}
						source={{
							uri: "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/313327466_10210593093379515_2915716465542839071_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUsslXi0dLtBwnPxugIgbP7KcOXC-xi7Xspw5cL7GLtfMuYZva129FX8FSBRlSI-tHmHiwopfsMR_-gbDWFoq3&_nc_ohc=ufvMvg69JOsAX8Yu5jg&_nc_ht=scontent.fceb1-3.fna&oh=00_AfAbmTCe4XfqORb2z6YsnUmlDPcunDV4UCSkFQPB7ngH-w&oe=65524C3A",
						}}
					/>

					<Card.Content style={styles.textSection}>
						<Text style={styles.title}>Kyocera is hiring!</Text>
						<Text style={styles.date}>October 25, 2023 </Text>
						<Text style={styles.body}>
							Graduating students and Alumni are invited to join the virtual job
							fair.
						</Text>
					</Card.Content>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Cover
						style={styles.cover}
						source={{
							uri: "https://fullscale.io/wp-content/uploads/2022/10/philippines-developer-jobs.jpg",
						}}
					/>

					<Card.Content style={styles.textSection}>
						<Text style={styles.title}>Fullscale is now hiring</Text>
						<Text style={styles.date}>October 15, 2023 </Text>
						<Text style={styles.body}>
							Python, C#/ASP .NET, PHP, Ruby on Rails, JAVA, Mobile dev-
							andriod, ios developers
						</Text>
					</Card.Content>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Cover
						style={styles.cover}
						source={{
							uri: "https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/312733233_10222952886272597_2840449161949650186_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE43VT7ZRBXsqQTDWSWhR43Vwi8tGtQOzdXCLy0a1A7N_sRkGFN1CTyqtsAxTplIXsyecW1MZs1EzJ-GlrGChiV&_nc_ohc=J2Ve364ReeYAX8a6CGE&_nc_ht=scontent.fceb1-1.fna&oh=00_AfDI4ZzV9dYaftUdArODwllJiSB2zQ4dpkxa2uXvzjSZ9w&oe=65529436",
						}}
					/>

					<Card.Content style={styles.textSection}>
						<Text style={styles.title}>Hiring: Android Developer</Text>
						<Text style={styles.date}>October 9, 2023 </Text>
						<Text style={styles.body} numberOfLines={2}>
							Cradle is looking for an Android Developer and Backend Developer.
							If you are interested, refer to the posters below.
						</Text>
					</Card.Content>
				</Card>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 10,
	},
	cardContainer: {
		height: 250,
		width: "95%",
		marginVertical: 10,
		borderColor: COLORS.gray2,
		borderWidth: 1,
	},
	cover: {
		height: "50%",
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
