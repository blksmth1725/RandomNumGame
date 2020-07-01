import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 100,
		paddingTop: 36,
		backgroundColor: Colors.header,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 10,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	headerTitle: {
		fontFamily: "open-sans-bold",
		color: "#E8E8E8",
		fontSize: 20,
	},
});

export default Header;
