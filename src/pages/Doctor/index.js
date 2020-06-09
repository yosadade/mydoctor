import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DocterCategory,
  RatedDoctors,
  NewsItem,
  Gap,
} from '../../components';
import {fonts, colors, showError} from '../../utils';
import {DummyDocter1, DummyDocter2, DummyDocter3} from '../../assets';
import {Fire} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        console.log(res.val());
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    Fire.database()
      .ref('doctor_category/')
      .once('value')
      .then(res => {
        console.log('category doctor', res.val());
        if (res.val()) {
          setCategoryDoctor(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryDoctor.map((item, index) => {
                  return (
                    <DocterCategory
                      key={index}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctors
              avatar={DummyDocter3}
              onPress={() => navigation.navigate('DoctorProfile')}
              name="Alexa Rachel"
              desc="Pediatrician"
            />
            <RatedDoctors
              avatar={DummyDocter2}
              onPress={() => navigation.navigate('DoctorProfile')}
              name="Sunny Frank"
              desc="Dentist"
            />
            <RatedDoctors
              avatar={DummyDocter1}
              onPress={() => navigation.navigate('DoctorProfile')}
              name="Poe Minn"
              desc="Podiatrist"
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
