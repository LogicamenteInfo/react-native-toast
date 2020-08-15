import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Toast, ToastPosition } from './Toast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    padding: 15,
  },
  loadingText: {
    color: '#fff',
  },
});

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator color="#fff" />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

export default function Screen2() {
  const showTop = () => Toast(<Loading />, ToastPosition.TOP);
  const showBottom = () => Toast(<Loading />, ToastPosition.BOTTOM);
  const showLeft = () => Toast(<Loading />, ToastPosition.LEFT);
  const showRight = () => Toast(<Loading />, ToastPosition.RIGHT);
  const showCenter = () => Toast(<Loading />, ToastPosition.CENTER);

  return (
    <View style={styles.container}>
      <Text>Component as Toast content {'\n'}</Text>
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
