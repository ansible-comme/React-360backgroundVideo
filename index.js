import React from 'react';
import {
  AppRegistry,
  View,
  //Import NativeModules
  NativeModules,
} from 'react-360';

//Create ref
const {VideoModule} = NativeModules;

//You can use componentDidMount to play immediately
componentDidMount() {
  Environment.setBackgroundVideo('myplayer');
  VideoModule.resume('myplayer');
}

//Or through click event
play() {
  Environment.setBackgroundVideo('myplayer');
  VideoModule.resume('myplayer');
}

export default class edition_13th extends React.Component {
  render() {
    return (
      <View>
      <VrButton
            onClick={this.play.bind(this)}>
            <Text>
              Play
            </Text>
          </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('edition_13th', () => edition_13th);
