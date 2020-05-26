import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILlogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts, colors} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <ILlogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 29,
    marginTop: 91,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
