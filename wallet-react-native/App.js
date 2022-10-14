import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Login from './views/Login';

class App extends React.Component {
	
	render() {
		return (
			<NativeRouter>
				<View style={styles.container}>
					<Routes>
						<Route exact path='/' element={<Login />} />
					</Routes>
				</View>
			</NativeRouter>
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

export default App;
