import { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../services/authentication";
import { clearMessage } from "../../app/slices/authenticationSlice";

// import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

// import Feed from "../../components/home/feed/Feed";

export default function Login() {
	const { message } = useSelector((state) => state.authentication);
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const dispatch = useDispatch();

	const [showPassWord, setShowPassword] = useState(false);

	return (
		<View style={styles.container}>
			<Text>Login</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
