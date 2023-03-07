/**
 * @format
 */

if(__DEV__) {
  import('./src/shared/libs/debugger/reactotron')
}

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { initCrashlytics } from './src/shared/libs/tracker/transports/firebaseCrashlyticsTransport';

initCrashlytics()

AppRegistry.registerComponent(appName, () => App);
