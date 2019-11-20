import React from 'react';
import { connect } from 'react-redux'; 
import { StyleSheet, Text, View, Button } from 'react-native';
import { increment, decrement, reset, setCount } from './redux/actions/counter';

function Counters(props) {
  console.log(props);
  const { count, dispatch } = props;
  return (
    <View style={styles.container}>
      <Text>Redux example</Text>
      <Text>{`Count: ${count}`}</Text>
      <Button title="Increment Counter" onPress={() => { dispatch(increment()) }} />
      <Button title="Decrement Counter" onPress={() => { dispatch(decrement()) }} />
      <Button title="Reset Counter" onPress={() => { dispatch(reset()) }} />
      <Button title="Set Counter" onPress={() => { dispatch(setCount(Math.floor(Math.random()*30))) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  console.log('State: ', state)
  return state.counter;
}

export default connect(mapStateToProps)(Counters);
