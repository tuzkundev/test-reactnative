/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

import {useNavigation} from '@react-navigation/native';

import {ICON_RETURNLEFT} from '../src/assets/image';

interface Props {
  name: string;
  image?: any;
  onPress?: () => any;
}

const HeaderComponent: FC<Props> = ({name, image, onPress}) => {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackHandler}>
          <Image source={ICON_RETURNLEFT} />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={styles.textName}>{name}</Text>
        </View>

        {image && (
          <TouchableOpacity style={styles.icon} onPress={onPress}>
            <Image source={image} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 31.76,

    alignItems: 'center',
  },
  icon: {
    marginLeft: 30,
  },

  nameContainer: {
    marginLeft: 80,
    width: 213,
    height: 22,
  },

  textName: {
    color: '#1F1F1F',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
});

export default HeaderComponent;
