import analytics from "@react-native-firebase/analytics";
import { TransportPropsWithHistory } from "nimbus";
import { analyticsLevel } from "..";

function firebaseAnalyticsTransport(props: TransportPropsWithHistory) {
  const { level, stringifyMessage, extraData } = props;

  if (level.value >= analyticsLevel.trackEvent) {
    analytics().logEvent(stringifyMessage.trim(), props.extraData !== null ? {...extraData} : undefined)
  }
}

export default firebaseAnalyticsTransport