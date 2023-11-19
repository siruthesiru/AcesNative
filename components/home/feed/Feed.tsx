import { StyleSheet, Pressable } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import { COLORS } from "../../../constants";

// import EditScreenInfo from "../../EditScreenInfo";
import { Text, View } from "../../Themed";
import { ScrollView } from "react-native-gesture-handler";
// import Colors from "../../../constants/Colors";

import styles from "./feed.style";
import { useRouter, Link } from "expo-router";

export default function Feed() {
	const router = useRouter();

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
		{
			id: 2,
			title: "Fullscale is now hiring",
			date: "October 15, 2023",
			description:
				"Python, C#/ASP .NET, PHP, Ruby on Rails, JAVA, Mobile dev - andriod, ios developers",
			cover:
				"https://fullscale.io/wp-content/uploads/2022/10/philippines-developer-jobs.jpg",
		},
		{
			id: 3,
			title: "Hiring: Android Developer",
			date: "October 9, 2023",
			description:
				"Cradle is looking for an Android Developer and Backend Developer. If you are interested, refer to the posters below.",
			cover:
				"https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/312733233_10222952886272597_2840449161949650186_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE43VT7ZRBXsqQTDWSWhR43Vwi8tGtQOzdXCLy0a1A7N_sRkGFN1CTyqtsAxTplIXsyecW1MZs1EzJ-GlrGChiV&_nc_ohc=J2Ve364ReeYAX8a6CGE&_nc_ht=scontent.fceb1-1.fna&oh=00_AfDI4ZzV9dYaftUdArODwllJiSB2zQ4dpkxa2uXvzjSZ9w&oe=65529436",
		},
	];
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				{news.map((item) => (
					<Link key={item.id} href={`../${item.id}`}>
						<Card style={styles.cardContainer}>
							<Card.Cover
								style={styles.cover}
								source={{
									uri: item.cover,
								}}
							/>

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
					</Link>
				))}
			</View>
		</ScrollView>
	);
}
