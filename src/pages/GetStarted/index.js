import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILlogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <ILlogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 29,
    marginTop: 91,
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
  },
});
