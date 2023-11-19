import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const router = useRouter();

	return (
		<Stack
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerLeft: () => {
					<Pressable>
						{({ pressed }) => (
							<FontAwesome
								name="question-circle"
								size={25}
								color={Colors[colorScheme ?? "light"].text}
								style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
							/>
						)}
					</Pressable>;
				},
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Public Page",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="login"
				options={{
					title: "Login as Alumni",
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="register"
				options={{
					title: "Register as Alumni",
					headerTitleAlign: "center",
				}}
			/>
			{/* <Tabs.Screen
				name="jobs"
				options={{
					title: "Jobs",
					headerTitleAlign: "center",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="briefcase" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					title: "Notifications",
					headerTitleAlign: "center",
					tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="applications"
				options={{
					title: "Applications",
					headerTitleAlign: "center",
					headerTitle: "Job Applications",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="black-tie" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerTitleAlign: "center",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="user-circle-o" color={color} />
					),
					headerRight: () => (
						<Link href="/faq" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="question-circle"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/> */}
		</Stack>
	);
}
