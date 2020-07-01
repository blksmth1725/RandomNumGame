import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		backgroundColor: "white",
		padding: 20,
	},
});

export default Card;
