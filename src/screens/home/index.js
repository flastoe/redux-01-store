import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Text>Welcome to the Movie Store</Text>
    <Text>You have N movies selected</Text>
    <Button
      title="View Movie Catalogue" onPress={()=> { navigation.navigate('Catalogue')}} />
  </View>
);

export default Home;