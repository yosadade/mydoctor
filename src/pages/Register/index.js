import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Header, Input, Button, Gap, Loading} from '../../components';
import {colors, useForm, storeData, getData} from '../../utils';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    const data = {
      fullName: form.fullName,
      profession: form.profession,
      email: form.profession,
      password: form.password,
    };
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register success', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('error massage', errorMessage);
      });
    console.log(form);
  };
  return (
    <>
      <View style={styles.page}>
        <Header
          onPress={() => navigation.goBack()}
          title="Daftar Akun"
          icon="back-dark"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
