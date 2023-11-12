import { View, Text, Pressable, Image } from "react-native";

import styles from "./coursejobcard.style";
import { checkImageURL } from "../../../../utils";

const CourseJobCard = ({ job, handleNavigate }) => {
	return (
		<Pressable style={styles.container} onPress={handleNavigate}>
			<Pressable style={styles.logoContainer}>
				<Image
					source={{
						uri: checkImageURL(job.employer_logo)
							? job.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logImage}
				/>
			</Pressable>

			<View style={styles.textContainer}>
				<Text style={styles.jobName} numberOfLines={1}>
					{job?.job_title}
				</Text>

				<Text style={styles.jobType}>{job?.employer_name}</Text>
			</View>
		</Pressable>
	);
};

export default CourseJobCard;
