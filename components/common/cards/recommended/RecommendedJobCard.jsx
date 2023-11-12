import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";

import styles from "./recommendedjobcard.style";
import { checkImageURL } from "../../../../utils";

const RecommendedJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<Pressable
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<Pressable style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item?.employer_logo)
							? item.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</Pressable>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
					{item.job_title}
				</Text>
				<Text style={styles.description} numberOfLines={4}>
					{item.job_description}
				</Text>
				{/* <View style={styles.infoWrapper}>
					<Text style={styles.publisher(selectedJob, item)}>
						{item?.job_publisher} -
					</Text>
					<Text style={styles.location}> {item.job_country}</Text>
				</View> */}
			</View>
		</Pressable>
	);
};

export default RecommendedJobCard;
