import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Mixins, Typography, Colors} from '@styles';
const AppText = props => {
  return (
      <Text
        {...props}
        numberOfLines={props.numberOfline}
        allowFontScaling={false}
        style={[
          styles.text,
          {
            fontWeight: props.bold
              ? Typography.FONT_WEIGHT_BOLD
              : Typography.FONT_WEIGHT_REGULAR,
          },
          props.style,
        ]}>
        {props.children}
      </Text>
  );
};

const styles = {
  container: {
    ...Mixins.padding(4, 4, 4, 4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
        // ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_HELVETICA,
    paddingVertical:2
  },
};
export default AppText;
