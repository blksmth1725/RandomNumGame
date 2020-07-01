import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<Text>Number of rounds: {props.roundsNumber}</Text>
			<Text>Number was: {props.userNumber}</Text>
			<Button title="New Game" onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GameOverScreen;
