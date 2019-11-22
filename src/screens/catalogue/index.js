import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../redux/actions/movies';

const Catalogue = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  console.log('Loading', loading);
  const dispatch = useDispatch();
  const { listLoaded, list, error } = useSelector(state => state.movies)
  
  useEffect(() => {
    if(error) {
      Alert.alert('Error', error.message);
    }
  }, [error]);

  if(!loading && !listLoaded) {
    setLoading(true);
    dispatch(fetchMovies());
  }
  
  return (
    <View>
      <Text>These are our movies:</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.genre}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString() }
      />
      <Button title="Refresh" onPress={() => {
        dispatch(fetchMovies());
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Catalogue;