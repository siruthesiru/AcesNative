import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

import { authorize, signOut } from "react-native-app-auth";

import { PaperProvider } from "react-native-paper";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	const handleAuthorize = async () => {
		try {
			const result = await authorize({
				issuer: "https://YOUR_ISSUER",
				clientId: "YOUR_CLIENT_ID",
				redirectUrl: "YOUR_REDIRECT_URI",
				scopes: ["openid", "profile", "email"],
				serviceConfiguration: {
					authorizationEndpoint: "https://YOUR_AUTHORIZATION_ENDPOINT",
					tokenEndpoint: "https://YOUR_TOKEN_ENDPOINT",
				},
			});
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSignOut = async () => {
		try {
			await signOut(Option);
			console.log("User signed out");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<PaperProvider>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="modal"
						options={{
							presentation: "modal",
							headerTitle: "Log-Out",
							headerTitleAlign: "center",
						}}
					/>
				</Stack>
			</ThemeProvider>
		</PaperProvider>
	);
}
