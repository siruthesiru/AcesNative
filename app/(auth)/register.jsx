import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAlumni } from "../../services/authentication";
import { clearMessage } from "../../app/slices/authenticationSlice";
import { programs } from "../../constants/helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { setItem } from "../../utils/asyncStorage";
import axios from "axios";

import {
	RegisterActions,
	UserDetailActions,
	UserLoginActions,
} from "../../utils/types";

import { Formik } from "formik";
import DropDownPicker from "react-native-dropdown-picker";

import { Text, View } from "../../components/Themed";

import { Button, TextInput, Divider } from "react-native-paper";

export default function Register() {
	const { message } = useSelector((state) => state.authentication);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = [
		{ label: "Bachelor of Science in Computer Science", value: "BSCS" },
		{ label: "Bachelor of Science in Information Science", value: "BSIS" },
		{
			label: "Bachelor of Science in Information Technology",
			value: "BSIT",
		},
		{ label: "Bachelor of Science in Mathematics", value: "BSMath" },
		{
			label: "Bachelor of Science in Information Communication Technology",
			value: "BSICT",
		},
		{ label: "Bachelor of Science in Library Science", value: "BSLS" },
		{
			label: "Bachelor of Science in Applied Mathematics",
			value: "BSAMath",
		},
		{ label: "Master of Science in Mathematics", value: "MSMath" },
		{ label: "Doctor of Computer Science", value: "DCS" },
		{ label: "Doctor of Information Science", value: "DIS" },
		{ label: "Doctor of Information Technology", value: "DIT" },
		{ label: "Doctor of Mathematics", value: "DMath" },
		{
			label: "Doctor of Information Communication Technology",
			value: "DICT",
		},
		{ label: "Doctor of Library Science", value: "DLS" },
		{ label: "Doctor of Applied Mathematics", value: "DAMath" },
	];

	const [formData, setFormData] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		idNum: "",
		courses: {
			programCode: "",
			programDescription: "",
			educationalLevel: "",
		},
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
		passwordError: "",
	});

	const {
		firstName,
		middleName,
		lastName,
		idNum,
		courses: { programCode, programDescription, educationalLevel },
		email,
		password,
		confirmPassword,
		// showPassword,
		// showConfirmPassword,
		passwordError,
	} = formData;

	// const [password, setPassword] = useState("");

	// // State variable to track password visibility
	const [showPassword, setShowPassword] = useState(false);

	// Function to toggle the password visibility state
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	// Function to toggle the password visibility state
	const toggleShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (password === formData.confirmPassword) {
			SignUpAlumni(dispatch, {
				firstName,
				middleName,
				lastName,
				idNum,
				courses: {
					programCode,
					programDescription,
					educationalLevel,
				},
				email,
				password,
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleTogglePasswordVisibility = (field) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: !prevData[field],
		}));
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.form}>
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							password: "",
							idNum: "",
						}}
						onSubmit={(values) => {
							handleFormSubmit;
						}}
					>
						{({ handleChange, handleBlur, handleSubmit, values }) => (
							<View>
								<TextInput
									style={styles.input}
									onBlur={Formik.handleBlur}
									value={Formik.firstName}
									placeholder="First Name"
									onChange={Formik.handleChange}
									required
								/>
								<TextInput
									style={styles.input}
									onBlur={Formik.handleBlur}
									value={Formik.firstName}
									placeholder="Last Name"
									onChange={Formik.handleChange}
									required
								/>

								<TextInput
									style={styles.input}
									onBlur={Formik.handleBlur}
									value={Formik.idNum}
									placeholder="USC ID Number"
									onChange={Formik.handleChange}
									required
								/>

								{/* <DropDownPicker
									open={open}
									value={value}
									items={items}
									setOpen={setOpen}
									setValue={setValue}
									setItems={setItems}
								/> */}

								<TextInput
									style={styles.input}
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									placeholder="Email"
								/>
								<View style={styles.passwordContainer}>
									<TextInput
										secureTextEntry={!showPassword}
										style={styles.passwordInput}
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
										placeholder="Password"
									/>
									<MaterialCommunityIcons
										name={showPassword ? "eye-off" : "eye"}
										size={24}
										color="#aaa"
										style={styles.icon}
										onPress={toggleShowPassword}
									/>
								</View>
								<View style={styles.passwordContainer}>
									<TextInput
										secureTextEntry={!showConfirmPassword}
										style={styles.passwordInput}
										onChangeText={handleChange("confirmPassword")}
										onBlur={handleBlur("confirmPassword")}
										value={values.confirmPassword}
										placeholder="Confirm Password"
										disabled={password !== confirmPassword}
									/>
									<MaterialCommunityIcons
										name={showConfirmPassword ? "eye-off" : "eye"}
										size={24}
										color="#aaa"
										style={styles.icon}
										onPress={toggleShowConfirmPassword}
									/>
								</View>

								<Button
									onPress={handleSubmit}
									style={styles.buttons}
									title="Submit"
									mode="contained"
								>
									Register
								</Button>
							</View>
						)}
					</Formik>

					<Divider></Divider>

					<Text>Already a registered alumnus?</Text>
					<Button
						style={styles.buttons}
						mode="outlined"
						onPress={() => router.push("./register")}
					>
						Login
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
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingHorizontal: 14,
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
	passwordInput: {
		marginVertical: 5,
		width: "96%",
		zIndex: 1,
	},
	form: {
		flex: 1,
		width: "70%",
		justifyContent: "center",
		height: "100%",
	},
	icon: {
		zIndex: 5,
	},
});
