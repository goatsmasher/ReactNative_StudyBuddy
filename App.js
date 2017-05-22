import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-nati1ve';

const helloWorld = () => {
	alert("Vincent Sucks");
}

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<Button
					raised
					icon={{ name: 'home', size: 32 }}
					buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
					textStyle={{ textAlign: 'center' }}
					title={`Enter\nCS Study Buddy`}
					onPress={helloWorld} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
