/* eslint-disable prettier/prettier */
import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

import {ICON_AVATAR, ICON_PROFILE} from '../src/assets/image';
import Tag from '../components/Tag';
import InfoProfileList from '../components/InfoProfileList';

const EditProfile = () => {
  return (
    <View>
      <HeaderComponent name="Sửa thông tin hồ sơ" />
      <View style={styles.avatar}>
        <Image source={ICON_AVATAR} />
      </View>
      {/* ho so cong ty */}
      <View>
        <Tag name="Hồ sơ công ty" />
        <InfoProfileList
          items={[
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: false,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: false,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: true,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: true,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
          ]}
        />
      </View>
      {/* thong tin nguoi dai dien phap luat */}
      <View>
        <Tag name="Thông tin người đại diện pháp luật" />
        <InfoProfileList
          items={[
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: false,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: false,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: true,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
            {
              name: 'Tên người đại diện và pháp luật',
              iconRight: true,
              textRight: 'abc',
              icon: require('../src/assets/profile.png'),
            },
          ]}
        />
      </View>
      {/* thong tin thuong hieu, san pham kinh doanh */}
      <View>
        <Tag name="Thông tin người đại diện pháp luật" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default EditProfile;
