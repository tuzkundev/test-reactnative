/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {
  name?: string;
}

const Tag: FC<Props> = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 33,
    backgroundColor: '#0000000D',
  },

  text: {
    marginLeft: 24,
    marginTop: 10,

    height: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#3A3A3C',
  },
});

export default Tag;
