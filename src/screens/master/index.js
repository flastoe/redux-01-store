import React from 'react';
import { View, Text, Button } from 'react-native';

const Master = ({ navigation }) => (
  <View>
    <Text>Master View</Text>
    <Button
      title="Detail" onPress={()=> { navigation.navigate('Detail')}} />
  </View>
)

export default Master;