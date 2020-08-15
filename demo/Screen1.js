import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Toast, ToastPosition } from './Toast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Screen1() {
  const showTop = () => Toast('This is my toast!', ToastPosition.TOP);
  const showBottom = () => Toast('This is my toast!', ToastPosition.BOTTOM);
  const showLeft = () => Toast('This is my toast!', ToastPosition.LEFT);
  const showRight = () => Toast('This is my toast!', ToastPosition.RIGHT);
  const showCenter = () => Toast('This is my toast!', ToastPosition.CENTER);

  return (
    <View style={styles.container}>
      <Text>Simple string as Toast content{'\n'}</Text>
      <Button title="SHOW TOP" onPress={showTop} />
      <Text>{'\n'}</Text>
      <Button title="SHOW BOTTOM" onPress={showBottom} />
      <Text>{'\n'}</Text>
      <Button title="SHOW CENTER" onPress={showCenter} />
      <Text>{'\n'}</Text>
      <Button title="SHOW LEFT" onPress={showLeft} />
      <Text>{'\n'}</Text>
      <Button title="SHOW RIGHT" onPress={showRight} />
    </View>
  );
}
