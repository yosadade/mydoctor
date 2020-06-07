import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Input, Button, Gap} from '../../components';
import {colors, useForm, storeData, showError} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

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

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          password: form.password,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };
  return (
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
