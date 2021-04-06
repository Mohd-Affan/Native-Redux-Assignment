/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// import TabNav from './src/navigate/TabNav';
import Switches from './src/components/Switches';

AppRegistry.registerComponent(appName, () => App);
