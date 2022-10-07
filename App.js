import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  console.log('hello world!!!');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!!!</Text>
    </View>
  );
};
export default HelloWorldApp;
