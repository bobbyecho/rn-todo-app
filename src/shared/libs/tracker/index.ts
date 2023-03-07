import nimbus from 'nimbus'
import firebaseAnalyticsTransport from './transports/firebaseAnalyticsTransport'
import firebaseCrashlyticsTransport from './transports/firebaseCrashlyticsTransport'
import reactotronTransport from './transports/reactotronTransport'

type CustomLevel = "debug" | "trackEvent" | "error"

const levels = {
  debug: 0,
  trackEvent: 1,
  error: 2
}

const analyticsLevel = {
  trackEvent: 0,
}

 // by ddefault transports for production
const transports = [
  firebaseCrashlyticsTransport,
]
// add transports for development
if (__DEV__) {
  transports.push(nimbus.consoleTransport)
  transports.push(reactotronTransport)
}

const severity = __DEV__ ? 'debug' : 'trackEvent'

const rootLogger = nimbus.createLogger<CustomLevel>({
  levels,
  transports,
  severity,
  historySeverity: 'trackEvent',
  historyMaxTreshold: 20,
})

// separate logger for analytics
const analyticsLogger = nimbus.createLogger<'trackEvent'>({
  levels: analyticsLevel,
  transports: [firebaseAnalyticsTransport],
  severity: 'trackEvent',
  printHistory: false
})

export { levels, analyticsLevel }

const logger = {
  root: rootLogger,
  api: rootLogger.setNamespace('api'),
  headlines: rootLogger.setNamespace('headlines'),
  detailHeadlines: rootLogger.setNamespace('detailHeadlines'),
  unexpected: rootLogger.setNamespace('unexpected')
}

export default logger