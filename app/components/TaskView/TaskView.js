import React, { PropTypes } from 'react';
import { View, Text, Animated } from 'react-native';

export default class TaskView extends React.Component {
  static propTypes = {
    marginTop: PropTypes.number.isRequired,
  };

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={{ marginTop: this.props.marginTop }}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    return (
      <Animated.ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        {this._renderScrollViewContent.bind(this)}
      </Animated.ScrollView>
    );
  }
}
