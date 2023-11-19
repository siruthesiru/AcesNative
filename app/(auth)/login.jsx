import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import { SignIn } from "../../services/authentication";
import { clearMessage } from "../../app/slices/authenticationSlice";

import { Text, View } from "../../components/Themed";
import { TextInput, Divider, Button } from "react-native-paper";

export default function Login() {
	// const submitForm = (event) => {
	// 	// event.preventDefault();
	// 	SignIn(dispatch, { Email, Password });
	// };

	const { message } = useSelector((state) => state.authentication);
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const dispatch = useDispatch();

	const [showPassWord, setShowPassword] = useState(false);

	return (
		<View style={styles.container}>
			<ScrollView>
				<Formik
					// initialValues={{ Email: "", Password: "" }}
					onSubmit={(values) => SignIn(dispatch, { Email, Password })}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<View>
							<TextInput
								onChangeText={handleChange("Email")}
								onBlur={handleBlur("Email")}
								value={values.email}
							/>
							<TextInput
								onChangeText={handleChange("Password")}
								onBlur={handleBlur("Password")}
								value={values.password}
							/>
							<Button onPress={handleSubmit} title="Submit">
								Submit
							</Button>
						</View>
					)}
				</Formik>
			</ScrollView>
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
