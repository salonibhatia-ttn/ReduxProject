/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, ListItem} from 'react-native-elements';
import {Text, View, TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Delivery Charges',
    price: '$18.00',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sub Total',
    price: '$200.75',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Total',
    price: '$218.75',
  },
];
const Total = () => {
  return (
    <View>
      <Card>
        {DATA.map((d, i) => (
          <ListItem key={i}>
            <ListItem.Content
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <ListItem.Title>{d.title}</ListItem.Title>
              <ListItem.Subtitle>{d.price}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
      <TouchableOpacity
        style={{
          width: 350,
          height: 25,
          marginLeft: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          borderRadius: 20,
          backgroundColor: 'red',
        }}>
        <Text style={{color: 'white', fontSize: 15}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Total;
