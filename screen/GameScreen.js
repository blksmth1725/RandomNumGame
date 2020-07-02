import React, { useState, useRef, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Alert,
	ScrollView,
	FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.ceil(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const renderListItem = (listLength, itemData) => (
	<View style={styles.listItem}>
		<BodyText>#{listLength - itemData.index}</BodyText>
		<BodyText>{itemData.item}</BodyText>
	</View>
);

const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < props.userChoice) ||
			(direction === "greater" && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't Lie!", "You know that this is wrong...", [
				{ text: "sorry", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess,
		);
		setCurrentGuess(nextNumber);
		//setRounds((curRounds) => curRounds + 1);
		setPastGuesses((curPastGuesses) => [
			nextNumber.toString(),
			...curPastGuesses,
		]);
	};

	return (
		<View style={styles.screen}>
			<TitleText>Opponents Guess</TitleText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={nextGuessHandler.bind(this, "lower")}>
					<Ionicons name="md-remove" size={24} color="white" />
				</MainButton>
				<MainButton onPress={nextGuessHandler.bind(this, "greater")}>
					<Ionicons name="md-add" size={24} color="white" />
				</MainButton>
			</Card>
			<View style={styles.listContainer}>
				<FlatList
					keyExtractor={(item) => item}
					data={pastGuesses}
					renderItem={renderListItem.bind(this, pastGuesses.length)}
					contentContainerStyle={styles.list}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	buttonContainer: {
		height: 125,
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 30,
		width: 400,
		maxWidth: "80%",
	},
	list: {
		marginLeft: 25,
		flexGrow: 1,
		//alignItems: "center",
		justifyContent: "flex-end",
	},
	listItem: {
		borderRadius: 15,
		borderColor: "black",
		padding: 15,
		margin: 10,
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "80%",
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 10,
		backgroundColor: "white",
		padding: 20,
	},
	listContainer: {
		alignItems: "center",
		flex: 1,
		marginTop: 25,
		width: "80%",
	},
});

export default GameScreen;
