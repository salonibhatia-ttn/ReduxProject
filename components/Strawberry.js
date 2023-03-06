/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {addStrawberry, delStrawberry} from '../redux';

function Strawberry(props) {
  return (
    <Card>
      <Card.Title>STRAWBERRY</Card.Title>
      <View key="STRAWBERRY" style={{flexDirection: 'row'}}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../img/strawberry-fruit-seeds-.jpg')}
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
            onPress={props.addStrawberry}>
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
            {props.numOfStrawberry}
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
            onPress={props.delStrawberry}>
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
    numOfStrawberry: state.strawberry.numOfStrawberry,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStrawberry: () => dispatch(addStrawberry()),
    delStrawberry: () => dispatch(delStrawberry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Strawberry);
