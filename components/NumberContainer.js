import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "50%",
		borderWidth: 2,
		borderColor: Colors.header,
		padding: 10,
		borderRadius: 20,
		marginTop: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	number: {
		color: Colors.primary,
		fontSize: 22,
	},
});

export default NumberContainer;
