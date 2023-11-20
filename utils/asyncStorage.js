import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
		return true;
	} catch (error) {
		return error;
	}
};

export const getItem = async (key) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		return error;
	}
};

export const removeItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (error) {
		return error;
	}
};
