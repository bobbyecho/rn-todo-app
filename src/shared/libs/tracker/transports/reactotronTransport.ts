import { TransportPropsWithHistory } from "nimbus";
import reactotron from "reactotron-react-native"

function reactotronTransport(props: TransportPropsWithHistory) {
  const { level, stringifyMessage, formattedMessage, history, datetime, namespace, extraData } = props;

  const valueToDisplay = {
    ...(namespace && { namespace: namespace.toUpperCase()}),
    message: stringifyMessage,
    level: level.severity.toUpperCase(),
    datetime: datetime,
    ...(history && { history }),
    ...(extraData && { extraData })
  }

  reactotron.display({
    name: 'NIMBUS',
    important: 'true',
    preview: formattedMessage,
    value: valueToDisplay
  })
}

export default reactotronTransport