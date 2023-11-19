import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, ActivityIndicator } from "react-native";

import { View, Text } from "../../../components/Themed";
import styles from "./coursejobs.style";
import { COLORS } from "../../../constants";
import CourseJobCard from "../../common/cards/by_course/CourseJobCard";
import useFetch from "../../../hook/useFetch";

const Coursejobs = () => {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "React Native developer",
		num_pages: "1",
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Jobs for "BSIT"</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					data?.map((job) => (
						<CourseJobCard
							job={job}
							key={`nearby-job-${job.job_id}`}
							handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Coursejobs;
