import { useFonts } from 'expo-font';
import Main from './src/Main';
import { StatusBar } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
	const [isFonstLoaded] = useFonts({
		'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
	});

	if(!isFonstLoaded){
		return null;
	}

	return (
		<>
			<Main/>
			<StatusBar barStyle='dark-content' backgroundColor="transparent"  translucent/>
		</>
	);
}
