import React, { useState } from "react";
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
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.form}>
					<Formik
						required
						initialValues={{ Email: "", Password: "" }}
						onSubmit={(values) => SignIn(dispatch, { Email, Password })}
					>
						{({ handleChange, handleBlur, handleSubmit, values }) => (
							<View>
								<TextInput
									style={styles.input}
									onChangeText={handleChange("Email")}
									onBlur={handleBlur("Email")}
									value={values.Email}
									placeholder="Email"
									required
								/>
								<TextInput
									style={styles.input}
									onChangeText={handleChange("Password")}
									onBlur={handleBlur("Password")}
									value={values.Password}
									placeholder="Password"
									required
								/>
								<Button
									onPress={handleSubmit}
									style={styles.buttons}
									title="Submit"
									mode="contained"
								>
									Login
								</Button>
							</View>
						)}
					</Formik>

					<Divider></Divider>

					<Text>Don't have an account yet?</Text>
					<Button
						style={styles.buttons}
						mode="outlined"
						onPress={() => router.push("./register")}
					>
						Register
					</Button>
					<Button
						style={styles.buttons}
						mode="text"
						onPress={() => router.push("./forgot")}
					>
						Reset password
					</Button>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		paddingTop: 300,
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
	buttons: {
		marginVertical: 15,
	},
	input: {
		marginVertical: 5,
	},
	form: {
		flex: 1,
		width: "70%",
		justifyContent: "center",
		height: "100%",
	},
});
