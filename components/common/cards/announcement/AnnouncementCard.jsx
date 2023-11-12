import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const AnnouncementCard = ({ coverUri, title, subtitle }) => {
	return (
		<Card style={styles.card}>
			<Card.Cover source={{ uri: coverUri }} style={styles.cover} />

			<Card.Content style={styles.content}>
				<Title style={styles.title}>{title}</Title>
				<Paragraph style={styles.subtitle}>{subtitle}</Paragraph>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row", // Horizontal layout
		margin: 16,
		elevation: 4, // Card shadow on Android
	},
	cover: {
		flex: 1, // Take up the entire left side
		height: "100%", // Take up the full height
	},
	content: {
		flex: 1, // Take up the entire right side
		padding: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 14,
	},
});

export default AnnouncementCard;
