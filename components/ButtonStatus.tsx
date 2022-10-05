/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {FC} from 'react';

interface Props {
  name: string;
  onPress?: () => void;
  countStatus: number;
  icon?: any;
  color?: ViewStyle;
  widthStyle?: ViewStyle;
  colorGround?: ViewStyle;
}

const ButtonStatus: FC<Props> = ({
  name,
  onPress,
  countStatus,
  icon,
  color,
  widthStyle,
  colorGround,
}) => {
  const customColorContainer = [styles.container, color, widthStyle];
  const customColorGround = [styles.right, colorGround];

  return (
    <TouchableOpacity onPress={onPress} style={customColorContainer}>
      <View style={styles.left}>
        {icon && <Image source={icon} style={styles.image} />}
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={customColorGround}>
        <Text style={styles.textCount}>{countStatus}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF4E5',
    borderRadius: 8,
    width: 160,
    height: 56,
  },
  left: {
    marginLeft: 16,
  },
  right: {
    marginRight: 16,
    borderRadius: 50,
    height: 24,
    width: 24,
    backgroundColor: '#FC832D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginRight: 13,
  },
  textCount: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#1F1F1F',
  },
});

export default ButtonStatus;
