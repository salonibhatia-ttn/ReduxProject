/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {addApple, delApple} from '../redux';

function Apple(props) {
  return (
    <Card>
      <Card.Title>APPLE</Card.Title>
      <View key="APPLE" style={{flexDirection: 'row'}}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../img/apple.jpg')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            paddingRight: 70,
          }}>
          $2.50/KG
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 20,
              borderColor: 'black',
              borderWidth: 2,
            }}
            onPress={props.addApple}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            {props.numOfApples}
          </Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 20,
              borderRadius: 20,
              borderColor: 'black',
              borderWidth: 2,
            }}
            onPress={props.delApple}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    numOfApples: state.apple.numOfApples,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addApple: () => dispatch(addApple()),
    delApple: () => dispatch(delApple()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Apple);
