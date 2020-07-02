import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game Is Over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					fadeDuration={300}
					style={styles.image}
					source={require("../assets/success.png")}
					/*This is how you would import a image from the web
					source={{uri: ""}}*/
					resizeMode="cover"
				/>
			</View>
			<BodyText style={styles.resultText}>
				Your phone needed{" "}
				<Text style={styles.highlight}>{props.roundsNumber}</Text> turns
				to guess the number{" "}
				<Text style={styles.highlight}>{props.userNumber}</Text>.
			</BodyText>
			<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: "black",
		overflow: "hidden",
		marginVertical: 30,
	},
	highlight: {
		color: Colors.primary,
		fontFamily: "open-sans-bold",
	},
	resultText: {
		textAlign: "center",
		fontSize: 15,
	},
});

export default GameOverScreen;
