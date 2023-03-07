import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Headlines from './features/headlines/presentation/Headlines'
import ErrorBoundary from './shared/components/ErrorBoundary'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import logger from './shared/libs/tracker'
import DetailHeadlines from './features/detailHeadlines/presentation/DetailHeadlines'
import tracker from './shared/libs/tracker'

const Stack = createNativeStackNavigator();


function App() {
  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>();

  return (
    <ErrorBoundary onError={(error, errorInfo) => {
      logger.unexpected.debugWithExtraData(error.message)({
        errorInfo: {
          stack: error.stack,
          info: errorInfo.componentStack
        }
      })
    }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            tracker.root.trackEvent(`open_${currentRouteName.replace(/-/g, '_').toLowerCase()}_page`)
          }
          routeNameRef.current = currentRouteName;
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name='headlines' component={Headlines} options={{ title: 'News App'}}/>
          <Stack.Screen name='detail-headlines' component={DetailHeadlines} options={{ title: 'Detail Headline'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  )
}

export default App