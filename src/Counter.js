import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {addition, substraction} from './store/actions';
const Counter = () => {
  //   const [counter, setCounter] = useState(0);

  //   const increament = () => {
  //     setCounter(counter + 1);
  //   };
  //   const decreament = () => {
  //     setCounter(counter - 1);
  //   };

  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.comtainer}>
      <View style={{margin: 4}}>
        <Button title="Add" onPress={() => dispatch(addition())}></Button>
      </View>
      <Text>{data}</Text>
      <View style={{margin: 4}}>
        <Button
          title="Subtract"
          onPress={() => dispatch(substraction())}></Button>
      </View>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
