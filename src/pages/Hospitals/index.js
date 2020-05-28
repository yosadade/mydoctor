import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBG, Hospital1, Hospital2, Hospital3} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
  const [hospitals] = useState([
    {
      avatar: Hospital1,
      title: 'Citra Bunga Merdeka',
      address: 'Jln. Surya Sejahtera 20',
    },
    {
      avatar: Hospital2,
      title: 'Happy Family & Kids',
      address: 'Jln. Surya Sejahtera 20',
    },
    {
      avatar: Hospital3,
      title: 'Tingkatan Paling Atas',
      address: 'Jln. Surya Sejahtera 20',
    },
  ]);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map((item, index) => {
          return (
            <ListHospital
              key={index}
              avatar={item.avatar}
              title={item.title}
              address={item.address}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
