import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./slices/store";
import { PersistGate } from "redux-persist/integration/react";

import { SWRConfig } from "swr";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StrictMode, useEffect } from "react";
import { useColorScheme } from "react-native";

import { fetcher } from "../utils/fetcher";

import { PaperProvider } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

import AccountVerify from "../components/accountverify";

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

	return (
		<Provider store={store}>
			<RootLayoutNav />
		</Provider>
	);
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	const { isSucceed, role, isAccess } = useSelector(
		(state) => state.authentication
	);

	const isAuthorized = role === "ALUMNI";

	if (!isAccess) {
		if (!isAuthorized || !isSucceed) {
			screenToRender = <Stack.Screen name="(auth)" />;
		} else {
			screenToRender = <AccountVerify />;
		}
	} else {
		if (isAccess) {
			screenToRender = <Stack.Screen name="(tabs)" />;
		}
	}

	return (
		<SWRConfig
			value={{
				fetcher,
			}}
		>
			<StrictMode>
				<Provider store={store}>
					<PaperProvider>
						<ThemeProvider
							value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
						>
							<Stack
								screenOptions={{
									headerShown: false,
								}}
							>
								{screenToRender}
							</Stack>
						</ThemeProvider>
					</PaperProvider>
				</Provider>
			</StrictMode>
		</SWRConfig>
	);
}
