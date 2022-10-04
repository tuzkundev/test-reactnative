/* eslint-disable prettier/prettier */
import {View, FlatList} from 'react-native';
import React, {FC} from 'react';
import InfoProfileItem from './InfoProfileItem';

interface Props {
  items: object[];
}

const InfoProfileList: FC<Props> = ({items}) => {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <InfoProfileItem
            key={index}
            onPress={item.onPress}
            icon={item.icon}
            name={item.name}
            textRight={item.textRight}
            iconRight={item.iconRight}
          />
        )}
      />
    </View>
  );
};

export default InfoProfileList;
