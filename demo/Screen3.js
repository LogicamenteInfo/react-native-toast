import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Toast, ToastPosition, ToastDuration, ToastHide } from './Toast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '50%',
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

export default function Screen3() {
  const [toastDuration, setToastDuration] = React.useState(ToastDuration.SHORT);

  const showBottom = () =>
    Toast(<Loading />, ToastPosition.BOTTOM, toastDuration);

  return (
    <View style={styles.container}>
      <Text>Control Toast duration {'\n'}</Text>
      <Button
        title="SHORT"
        onPress={() => setToastDuration(ToastDuration.SHORT)}
      />
      <Text>{'\n'}</Text>
      <Button
        title="LONG"
        onPress={() => setToastDuration(ToastDuration.LONG)}
      />
      <Text>{'\n'}</Text>
      <Button
        title="INFINITE"
        onPress={() => setToastDuration(ToastDuration.INFINITE)}
      />
      <Text>{'\n'}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        value={toastDuration.toString()}
        onChangeText={e => setToastDuration(parseInt(e, 10))}
      />
      <Text>{'\n'}</Text>
      <Button title="OPEN TOAST" onPress={showBottom} />
      <Text>{'\n'}</Text>
      <Button title="CLOSE TOAST" onPress={() => ToastHide()} />
    </View>
  );
}
