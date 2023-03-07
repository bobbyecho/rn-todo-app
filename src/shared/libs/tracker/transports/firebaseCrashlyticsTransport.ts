import { TransportPropsWithHistory } from "nimbus";
import crashlytics from '@react-native-firebase/crashlytics'
import { levels } from "..";

export function initCrashlytics() {
  crashlytics().setCrashlyticsCollectionEnabled(true)
}

function crashlyticsTransport(props: TransportPropsWithHistory) {
  const { level, stringifyMessage, history } = props;

  if (level.value >= levels.trackEvent) {
    if (level.severity === 'error') {
      crashlytics().setAttributes({
        history: JSON.stringify(history, null, 2),
      })
  
      crashlytics().recordError(new Error(stringifyMessage))
    }
  }
}

export default crashlyticsTransport