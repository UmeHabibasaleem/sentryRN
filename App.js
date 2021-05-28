/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: "https://ad67b323599a4594a3a08117e966517a@o739669.ingest.sentry.io/5785919",
  /*integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],*/
})


const sentryTest =() =>{
  try{
    let obj = {name:'abc', age:'23'}
    const displayName = "CoolComponent";
    throw new Error("Error");
    console.log('try', displayName)
  }catch (e) {
    console.log('else catch')
    Sentry.setContext("character", {
      name: "Mighty Fighter",
      age: 19,
      attack_type: "melee",
    });
    Sentry.captureException(new Error("error form RNSentry"));

  }
}
const App: () => Node = () => {
  return (
    <View style={{justifyContent: "space-around" , flex: 1}}>
    <Button onPress={sentryTest} title="open camera picker" color="#841584" />
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
