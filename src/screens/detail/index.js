import React from 'react';
import { View, Text, Button } from 'react-native';

const Detail = ({ navigation }) => (
  <View>
    <Text>Detail View</Text>
    <Button
      title="Go Back" onPress={()=> { navigation.goBack() }} />
  </View>
)

export default Detail;