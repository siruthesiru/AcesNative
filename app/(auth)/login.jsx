import React, { useState } from "react";
import { StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { SignIn } from "../../services/authentication";

import { Text, View } from "../../components/Themed";
import { TextInput, Divider, Button } from "react-native-paper";
import { useNavigation } from "expo-router";
import { showToast, ToastComponent } from "../../utils/toast";

const initialValues = {
	email: "",
	password: "",
};

const LoginSchema = yup.object().shape({
	email: yup
		.string()
		.required("Please enter your email")
		.email("Invalid Email"),
	password: yup.string().required("Please enter your password"),
});

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.userLogin);

	const handleSubmit = ({ email, password }) => {
		dispatch(userLogin(navigation, email, password));
		if (error) {
			showToast("error", "Login Error", error, () =>
				dispatch(userLogin(useNavigation))
			);
		}
	};

	useEffect(() => {
		if (typeof error !== "undefined") {
			showToast("error", "Login Error", error, () =>
				dispatch(userLogin(navigation))
			);
		}
	}, [error]);

	const [showPassWord, setShowPassword] = useState(false);

	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.form}>
					<KeyboardAvoidingView>
						<Formik
							initialValues={{ initialValues }}
							onSubmit={(values) => {
								console.log(Email, Password);
								handleSubmit(values);
								validationSchema = { LoginSchema };
								// SignIn(dispatch, { Email, Password });
							}}
						>
							{({
								handleChange,
								handleBlur,
								handleSubmit,
								values,
								errors,
								touched,
							}) => (
								<View>
									<TextInput
										style={styles.input}
										autoComplete={"email"}
										autoCapitalize="none"
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
										placeholder="Email"
									/>
									{errors.email && touched.email && <Text>{errors.email}</Text>}
									<TextInput
										style={styles.input}
										secureTextEntry={true}
										autoCapitalize="none"
										autoComplete={"password"}
										placeholder={"••••••••"}
										value={values.password}
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
									/>
									{errors.password && touched.password && (
										<Text>{errors.password}</Text>
									)}
									<Button
										onPress={handleSubmit}
										style={styles.buttons}
										loading={loading}
										title="LOGIN"
										mode="contained"
									>
										Login
									</Button>
								</View>
							)}
						</Formik>

						<Text>{email}</Text>

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
					</KeyboardAvoidingView>
					<ToastComponent />
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
