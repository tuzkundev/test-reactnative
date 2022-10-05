/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import ButtonStatus from '../components/ButtonStatus';

const OderManage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.textHeader}>Quản lý đơn hàng</Text>
        </View>
      </View>
      {/* button status */}
      <View>
        <View style={styles.buttonFirst}>
          <View>
            <ButtonStatus
              name="Chờ xác nhận"
              countStatus={5}
              color={styles.colorGreen}
              colorGround={styles.colorGroundGreen}
              widthStyle={styles.widthStyle}
            />
          </View>
        </View>
        <View style={styles.buttonStatus}>
          <ButtonStatus
            name="Đang chuẩn bị"
            countStatus={5}
            color={styles.colorBlue}
            colorGround={styles.colorGroundBlue}
          />
          <ButtonStatus name="Đang giao" countStatus={5} />
        </View>
        <View style={styles.buttonStatus}>
          <ButtonStatus
            name="Đã bị huỷ"
            countStatus={5}
            color={styles.colorRed}
            colorGround={styles.colorGroundRed}
          />
          <ButtonStatus
            name="Đã giao"
            countStatus={5}
            color={styles.colorTeal}
            colorGround={styles.colorGroundTeal}
          />
        </View>
      </View>
      {/* o tim kiem */}
      <View>
        <TextInput />
        <Image />
      </View>
      {/* Button navigation */}
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  textHeader: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: 'black',
  },
  buttonStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 23.5,
    marginVertical: 8,
  },
  buttonFirst: {
    alignItems: 'center',
  },
  colorGreen: {
    backgroundColor: '#F6F8ED',
  },
  colorBlue: {
    backgroundColor: '#EAF4FF',
  },
  colorRed: {
    backgroundColor: '#FFF2F1',
  },
  colorTeal: {
    backgroundColor: '#E9F8FF',
  },
  colorGroundRed: {
    backgroundColor: '#FF3B30',
  },
  colorGroundGreen: {
    backgroundColor: '#A6BA1A',
  },
  colorGroundBlue: {
    backgroundColor: '#007AFF',
  },
  colorGroundTeal: {
    backgroundColor: '#5AC8FA',
  },
  widthStyle: {
    width: 330,
  },
});

export default OderManage;
