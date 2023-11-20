import React from "react";
import Toast from "react-native-toast-message";

export const showToast = (type, text1, text2, onHide) => {
	Toast.show({
		type,
		text1,
		text2,
		position: "bottom",
		onHide,
	});
};

export const ToastComponent = () => {
	return <Toast />;
};
