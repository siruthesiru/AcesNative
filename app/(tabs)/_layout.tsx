import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const router = useRouter();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Feed",
					headerTitleAlign: "center",
					headerTitle: "Events & Announcements",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="newspaper-o" color={color} />
					),
				}}
			/>
			<Tabs.Screen
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
				name="faq"
				options={{
					title: "FAQ",
					headerTitleAlign: "center",
					headerTitle: "Frequently Asked Questions",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="question-circle" color={color} />
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
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="sign-out"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
		</Tabs>
	);
}
