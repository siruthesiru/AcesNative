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

import { persistor, store } from "./slices/store";

import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaView } from "react-native-safe-area-context";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(auth)",
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

	return (
		// <ClerkProvider publishableKey="pk_test_Zmlyc3QtcmFjZXItNDMuY2xlcmsuYWNjb3VudHMuZGV2JA">
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<PaperProvider>
					<ThemeProvider
						value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
					>
						{/* <SafeAreaView> */}
						<Stack>
							<Stack.Screen name="(auth)" options={{ headerShown: false }} />

							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
							<Stack.Screen
								name="faq"
								options={{
									presentation: "modal",
									headerTitle: "Frequently Asked Questions",
									headerTitleAlign: "center",
								}}
							/>
						</Stack>
						{/* </SafeAreaView> */}
					</ThemeProvider>
				</PaperProvider>
			</PersistGate>
		</Provider>
		// </ClerkProvider>
	);
}
