// External modules
import { Text, View } from "../../components/Themed";
import {
	StyleSheet,
	Image,
	Pressable,
	Linking,
	ScrollView,
	FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import { Table } from "react-native-table-component";

import TableRow from "../../components/home/profile/TableRow";
import SkillsRow from "../../components/home/profile/SkillsRow";

const profilePicture = require("../../assets/images/pfp.png");

export default function ProfileScreen() {
	const userDetails = {
		firstName: "Yehudi",
		lastName: "Santillan III",
		middleName: "",
		gender: "Male",
		birthdate: "July 13, 1999",
		address: "Tipolo, Bohol",
		uscId: "18101308",
		email: "yudisantillan@gmail.com",
		number: "09452998777",
		program: "Bachelor of Science in Information Technology",
		yearGraduated: "2021",
		employmentStatus: "Unemployed",
		companyName: "N/A",
		companyAddres: "N/A",
		occupation: "N/A",
		skills: ["React Native", "Dart", "Node"],
	};

	const data = userDetails;

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<Image source={profilePicture} style={styles.image} />
				<Text style={styles.title}>Yehudi Santillan</Text>
				<View style={styles.detailsContainer}>
					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>
					<Text style={styles.subtitle}>Personal Information</Text>
					<Table style={styles.table}>
						<TableRow itemName="Gender" itemValue={userDetails.gender} />
						<TableRow itemName="Birthdate" itemValue={userDetails.birthdate} />
						<TableRow itemName="Address" itemValue={userDetails.address} />
					</Table>

					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>
					<Text style={styles.subtitle}>Account Information</Text>
					<Table style={styles.table}>
						<TableRow itemName="USC ID" itemValue={userDetails.uscId} />
						<TableRow itemName="Email" itemValue={userDetails.email} />
						<TableRow itemName="Contact No." itemValue={userDetails.number} />
					</Table>

					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>
					<Text style={styles.subtitle}>Academic Information</Text>
					<Table style={styles.table}>
						<TableRow itemName="Program" itemValue={userDetails.program} />
						<TableRow
							itemName="Graduated"
							itemValue={userDetails.yearGraduated}
						/>
					</Table>

					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>
					<Text style={styles.subtitle}>Work Information</Text>
					<Table style={styles.table}>
						<TableRow
							itemName="Employment"
							itemValue={userDetails.employmentStatus}
						/>
						<TableRow
							itemName="Company Name"
							itemValue={userDetails.companyName}
						/>
						<TableRow
							itemName="Company Add"
							itemValue={userDetails.companyAddres}
						/>
					</Table>

					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>
					<Text style={styles.subtitle}>Skills Information</Text>
					<Table style={styles.skillsTable}>
						<TableRow itemName="Skills" itemValue="" />
						<FlatList
							data={userDetails.skills}
							keyExtractor={(item) => item}
							// contentContainerStyle={{ columnGap: SIZES.small }}
							renderItem={({ item }) => (
								<SkillsRow itemName="" itemValue={item} />
							)}
						/>
					</Table>

					<View
						style={styles.separator}
						lightColor="#eee"
						darkColor="rgba(255,255,255,0.1)"
					/>

					<View style={styles.detailsSection}>
						<Button style={styles.editButton} mode="contained">
							Edit Profile
						</Button>
						<Button
							style={styles.logOutButton}
							mode="contained"
							labelStyle={{ color: "#4D0400" }}
						>
							Log-Out
						</Button>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 20,
	},
	separator: {
		marginTop: 30,
		height: 1,
		width: "80%",
		alignSelf: "center",
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
	detailsContainer: {
		width: "100%",
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
	detailsSection: {
		marginLeft: "15%",
		maxWidth: "80%",
		marginVertical: 15,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 20,
		marginLeft: "10%",
	},
	detailsItem: {
		flexDirection: "row",
		marginVertical: 2,
		fontSize: 16,
	},
	editButton: {
		maxWidth: "80%",
		marginTop: 30,
		marginBottom: 15,
	},
	logOutButton: {
		maxWidth: "80%",
		marginVertical: 10,
		backgroundColor: "#ff6961",
	},
	table: {
		borderWidth: 0,
		marginLeft: "10%",
	},
	skillsTable: {
		borderWidth: 0,
		marginLeft: "10%",
		flex: 1,
		flexDirection: "row",
	},
	tableHeader: {
		display: "none",
	},
});
