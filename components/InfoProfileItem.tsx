/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {FC} from 'react';

import {ICON_ARROWRIGHT} from '../src/assets/image';

interface Props {
  icon: ImageSourcePropType;
  name: string;
  iconRight: boolean;
  onPress?: () => void;
  textRight?: string;
}

const InfoProfileItem: FC<Props> = ({
  icon,
  name,
  iconRight,
  onPress,
  textRight,
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.left}>
          <Image source={icon} />
          <Text>{name}</Text>
        </View>
        <View style={styles.right}>
          <Text>{textRight}</Text>
          {iconRight && (
            <View>
              <Image source={ICON_ARROWRIGHT} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
  },
});

export default InfoProfileItem;
