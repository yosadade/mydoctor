import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImageFromGallery = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('response', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'oops, sepertinya anda tidak memilih foto nya ?',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const sourcePhoto = {uri: response.uri};
        setPhoto(sourcePhoto);
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header
        title="Upoad Photo"
        onPress={() => navigation.goBack()}
        icon="back-dark"
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={getImageFromGallery}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
});
