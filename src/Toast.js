import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const ToastRef = React.createRef();

const ToastStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1040,
    backgroundColor: '#505050',
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
  },
  text: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export const ToastPosition = StyleSheet.create({
  CENTER: {
    alignSelf: 'center',
    top: Dimensions.get('window').height / 2 - 35,
  },
  BOTTOM: {
    bottom: 80,
    alignSelf: 'center',
  },
  LEFT: {
    left: 40,
    top: Dimensions.get('window').height / 2 - 35,
  },
  RIGHT: {
    right: 40,
    top: Dimensions.get('window').height / 2 - 35,
  },
  TOP: {
    top: 80,
    alignSelf: 'center',
  },
});

export const ToastDuration = {
  SHORT: 2000,
  LONG: 5000,
  INFINITE: 0,
};

class ToastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: '',
      position: ToastPosition.BOTTOM,
    };
    this.opacity = new Animated.Value(0);
  }

  fadeIn() {
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  fadeOut() {
    Animated.timing(this.opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(this.hide.bind(this));
  }

  show(text, position, duration) {
    if (this.timeout) clearTimeout(this.timeout);
    this.setState({ show: true, position, text }, () => {
      this.fadeIn();
      if (duration > ToastDuration.INFINITE)
        this.timeout = setTimeout(this.fadeOut.bind(this, duration), duration);
    });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    const { show, text, position } = this.state;
    const { containerStyle, textStyle } = this.props;
    return show ? (
      <Animated.View
        style={[
          ToastStyle.container,
          position,
          containerStyle,
          { opacity: this.opacity },
        ]}
      >
        {typeof text === 'object' ? (
          <View>{text}</View>
        ) : (
          <Text style={[ToastStyle.text, textStyle]}>{text}</Text>
        )}
      </Animated.View>
    ) : (
      <View />
    );
  }
}

export default props => {
  return <ToastComponent {...props} ref={ToastRef} />;
};

export function Toast(
  text,
  position = ToastPosition.BOTTOM,
  duration = ToastDuration.SHORT
) {
  ToastRef.current.show(text, position, duration);
}

export function ToastHide() {
  ToastRef.current.fadeOut();
}
