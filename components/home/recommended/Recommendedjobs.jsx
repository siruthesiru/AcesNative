import { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import { View, Text } from "../../../components/Themed";

import styles from "./recommendedjobs.style";
import { COLORS, SIZES } from "../../../constants";
import RecommendedJobCard from "../../common/cards/recommended/RecommendedJobCard";
import useFetch from "../../../hooks/useFetch";

const Recommendedjobs = () => {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: "1",
	});

	const [selectedJob, setSelectedJob] = useState();

	const handleCardPress = (item) => {
		router.push(`/job-details/${item.job_id}`);
		setSelectedJob(item.job_id);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Recommended jobs</Text>
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
					<FlatList
						showsHorizontalScrollIndicator={false}
						data={data}
						renderItem={({ item }) => (
							<RecommendedJobCard
								item={item}
								selectedJob={selectedJob}
								handleCardPress={handleCardPress}
							/>
						)}
						keyExtractor={(item) => item.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
};

export default Recommendedjobs;
