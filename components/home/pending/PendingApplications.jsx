import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./pendingapplications.style";
import { COLORS } from "../../../constants";
import PendingApplicationCard from "../../common/cards/pending/PendingApplicationCard";
import useFetch from "../../../hook/useFetch";

const PendingApplications = () => {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "SCRUM Master",
		num_pages: "1",
	});

	data.pop();
	data.pop();
	data.pop();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Your Pending Applications</Text>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					data?.map((job) => (
						<PendingApplicationCard
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

export default PendingApplications;
