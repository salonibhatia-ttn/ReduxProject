/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {addOrange, delOrange} from '../redux';

function Orange(props) {
  return (
    <Card>
      <Card.Title>ORANGE</Card.Title>
      <View key="ORANGE" style={{flexDirection: 'row'}}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../img/oranges.jpg')}
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
            onPress={props.addOrange}>
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
            {props.numOfOranges}
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
            onPress={props.delOrange}>
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
    // <View>
    //   <Text>Number of oranges - {props.numOfOranges}</Text>
    //   <TouchableOpacity
    //     style={{
    //       width: 100,
    //       height: 30,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       marginBottom: 20,
    //       borderRadius: 20,
    //       borderColor: 'white',
    //       borderWidth: 2,
    //     }}
    //     onPress={props.addOrange}>
    //     <Text>+</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style={{
    //       width: 100,
    //       height: 30,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       marginBottom: 20,
    //       borderRadius: 20,
    //       borderColor: 'white',
    //       borderWidth: 2,
    //     }}
    //     onPress={props.delOrange}>
    //     <Text>+</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const mapStateToProps = state => {
  return {
    numOfOranges: state.orange.numOfOranges,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOrange: () => dispatch(addOrange()),
    delOrange: () => dispatch(delOrange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orange);
