/* eslint-disable import/no-extraneous-dependencies */
import reactotron, { networking, openInEditor } from 'reactotron-react-native';

declare global {
  interface Console {
    // eslint-disable-next-line no-undef
    tron: typeof reactotron;
  }
}
reactotron.configure({
  name: 'SiCepat - Consumer Mobile',
}) // controls connection & communication settings
.useReactNative() // add all built-in react native plugins
.use(openInEditor())
.use(
  networking({
    ignoreUrls: /localhost/
  })
);

reactotron.connect();
reactotron.clear!();

// @ts-ignore
global.console.tron = reactotron;
