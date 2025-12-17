import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {FlatList, Icon, ScrollView} from 'native-base';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import Review from '../Components/Review';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';

const SpecialistScreen = props => {
  const galleryData = [
    {
      id: 1,
      image: require('../Assets/Images/sur1.png'),
    },
    {
      id: 2,
      image: require('../Assets/Images/sur2.png'),
    },
    {
      id: 3,
      image: require('../Assets/Images/sur3.jpg'),
    },
    {
      id: 4,
      image: require('../Assets/Images/sur4.jpg'),
    },
  ];
  const reviews = [
    {
      id: 1,
      name: 'Juliana Stephen',
      location: 'Kansas Arizona',
      rating: 5,
      time: '1 week ago',
      review:
        'I had a wonderful experience during my fetal scan. The staff was caring, and the images were incredibly clear. Highly recommend...',
      avatar: require('../Assets/Images/review1.jpg'),
    },
    {
      id: 2,
      name: 'Juliana Stephen',
      location: 'Kansas Arizona',
      rating: 5,
      time: '1 week ago',
      review:
        'I had a wonderful experience during my fetal scan. The staff was caring, and the images were incredibly clear. Highly recommend...',
      avatar: require('../Assets/Images/review2.jpg'),
    },
    {
      id: 3,
      name: 'Juliana Stephen',
      location: 'Kansas Arizona',
      rating: 5,
      time: '1 week ago',
      review:
        'I had a wonderful experience during my fetal scan. The staff was caring, and the images were incredibly clear. Highly recommend...',
      avatar: require('../Assets/Images/review1.jpg'),
    },
  ];

  const Specialties = [
    'Cosmetic Surgery',
    'Hair Transplant',
    'Plastic Surgery',
    'Vascular Surgery',
  ];

  const location = [
    'Early pregnancy scan at Cedars-Sinai Medical Center',
    'Early pregnancy scan at UCLA Medical Center',
  ];
  const treatments = [
    'Breast augmentation',
    'Breast lifts',
    'Breast reduction',
    'Face lift',
    'Liposuction',
  ];

  const team = [
    {
      id: 1,
      name: 'Dr. Sherry James',
      image: require('../Assets/Images/PreventiveMedicine.png'),
      Specialties: 'Preventive Medicine',
    },
    {
      id: 2,
      image: require('../Assets/Images/cardiologist.png'),
      name: 'Dr. Alan Smith',
      Specialties: 'Cardiology',
    },
    {
      id: 3,
      image: require('../Assets/Images/neurologist.png'),
      name: 'Dr. Emily Carter',
      Specialties: 'Neurology',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#1B2730'}}>
      <ScreenBoiler
        statusBarBackgroundColor={Color.themeBluishBlack}
        statusBarContentStyle={'light-content'}>
        <Header title={' '} showBack={true} showCart={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.mainScreen,
            {
              paddingBottom: moderateScale(190, 0.6),
            },
          ]}>
          <View style={styles.card_con}>
            <View style={styles.top}>
              <Icon
                name="star"
                as={AntDesign}
                size={moderateScale(12, 0.6)}
                color={'#FFCB82'}
              />
              <CustomText style={styles.top_text}>
                5 (453) Top provider
              </CustomText>
            </View>
            <View style={styles.row}>
              <View style={styles.image_con}>
                <CustomImage
                  style={styles.image}
                  source={require('../Assets/Images/PreventiveMedicine.png')}
                />
              </View>
              <View>
                <CustomText
                  numberOfLines={2}
                  style={[
                    styles.h1,
                    {
                      paddingTop: moderateScale(10, 0.6),
                      paddingLeft: moderateScale(10, 0.6),
                    },
                  ]}>
                  Dustin Sparrow
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(11, 0.6),
                    color: Color.white,
                    paddingLeft: moderateScale(10, 0.6),
                  }}>
                  Plastic Surgery
                </CustomText>
              </View>
              <TouchableOpacity style={styles.like_btn}>
                <Icon
                  name={'heart'}
                  as={Feather}
                  size={moderateScale(15, 0.6)}
                  color={Color.white}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.text_con}>
              <View style={styles.text_Row}>
                <Icon
                  style={{
                    marginTop: moderateScale(3, 0.6),
                  }}
                  as={Feather}
                  name="map-pin"
                  size={moderateScale(13, 0.6)}
                  color={Color.white}
                />
                <CustomText
                  style={[
                    styles.text,
                    {
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  HUX Hosplital, San Francisco, CA
                </CustomText>
              </View>
              <View
                style={[
                  styles.text_Row,
                  {
                    paddingTop: moderateScale(5, 0.6),
                  },
                ]}>
                <Icon
                  style={{
                    marginTop: moderateScale(3, 0.6),
                  }}
                  as={Feather}
                  name="map-pin"
                  size={moderateScale(13, 0.6)}
                  color={Color.white}
                />
                <CustomText style={[styles.text]}>
                  Price range: $600 - $1,200
                </CustomText>
              </View>
              <View
                style={[
                  styles.text_Row,
                  {
                    marginTop: moderateScale(5, 0.6),
                  },
                ]}>
                <Icon
                  style={{
                    marginTop: moderateScale(3, 0.6),
                  }}
                  as={Feather}
                  name={'clock'}
                  size={moderateScale(13, 0.6)}
                  color={Color.white}
                />

                <CustomText style={styles.text}>Opens at 9:00 AM </CustomText>
              </View>
            </View>
          </View>

          <CustomText numberOfLines={2} style={styles.h2}>
            gallery
          </CustomText>
          <View style={styles.gallery_con}>
            <FlatList
              contentContainerStyle={{
                marginHorizontal: moderateScale(10, 0.6),
                marginVertical: moderateScale(10, 0.6),
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={galleryData}
              renderItem={({item}) => {
                return (
                  <View style={styles.gallery_image}>
                    <CustomImage
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      source={item?.image}
                    />
                  </View>
                );
              }}
            />
          </View>

          <CustomText
            style={[
              styles.service_text,
              {
                paddingTop: moderateScale(15, 0.6),
              },
            ]}>
            About the doctor
          </CustomText>
          <CustomText
            style={[
              styles.des,
              {
                lineHeight: 19,
                fontSize: moderateScale(13, 0.6),
              },
            ]}>
            Dr. Dustin Sparrow is a board-certified plastic surgeon dedicated to
            providing exceptional aesthetic and reconstructive procedures. With
            a focus on patient-centered care, Dr. Sparrow combines artistry and
            advanced surgical techniques to achieve natural-looking results.
            {'\n\n'}At HUX Hospital, Dr. Sparrow offers a comprehensive range of
            plastic surgery services, including facial rejuvenation, breast
            augmentation, body contouring, and reconstructive surgery. He is
            committed to helping patients enhance their appearance and improve
            their quality of life through personalized treatment plans. See all
          </CustomText>

          <CustomText
            style={[
              styles.service_text,
              {
                paddingVertical: moderateScale(10, 0.6),
              },
            ]}>
            Specialties
          </CustomText>
          <View style={styles.spec_row}>
            {Specialties?.map(item => {
              return (
                <View style={styles.special_card}>
                  <Icon
                    style={{
                      marginRight: moderateScale(10, 0.6),
                    }}
                    name="check"
                    as={Feather}
                    size={moderateScale(15, 0.6)}
                    color={Color.white}
                  />
                  <CustomText
                    style={{
                      fontSize: moderateScale(13, 0.6),
                      color: Color.white,
                    }}>
                    {item}
                  </CustomText>
                </View>
              );
            })}
          </View>

          <CustomText
            style={[
              styles.service_text,
              {
                paddingVertical: moderateScale(10, 0.6),
              },
            ]}>
            treatments
          </CustomText>
          {treatments?.map(item => {
            return (
              <View style={styles.treat_row}>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.white,
                    width: windowWidth * 0.65,
                  }}>
                  {item}
                </CustomText>
                <TouchableOpacity style={styles.treat_btn}>
                  <CustomText style={styles.treat_btn_text}>
                    see detils
                  </CustomText>
                </TouchableOpacity>
              </View>
            );
          })}
          <CustomText
            onPress={() => {
              console.log('hellooooooooooooooooooooooooo');
            }}
            style={[
              styles.service_text,
              {
                textDecorationLine: 'underline',
                fontSize: moderateScale(13, 0.6),
                paddingTop: moderateScale(15, 0.6),
              },
            ]}>
            see all
          </CustomText>
          <CustomText
            style={[
              styles.service_text,
              {
                paddingVertical: moderateScale(10, 0.6),
              },
            ]}>
            Locations
          </CustomText>
          {location?.map(item => {
            return (
              <View style={styles.location}>
                <Icon
                  style={{
                    marginRight: moderateScale(10, 0.6),
                  }}
                  name="map-pin"
                  as={Feather}
                  size={moderateScale(13, 0.6)}
                  color={Color.white}
                />
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.white,
                  }}>
                  {item}
                </CustomText>
              </View>
            );
          })}

          <CustomText
            style={[
              styles.service_text,
              {
                paddingVertical: moderateScale(10, 0.6),
              },
            ]}>
            meet the doctor
          </CustomText>

          <View>
            <View style={styles.doc_con}>
              <View style={styles.doc_image}>
                <CustomImage
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={require('../Assets/Images/PreventiveMedicine.png')}
                />
              </View>
              <View
                style={{
                  width: windowWidth * 0.45,
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.white,
                  }}>
                  Dr. Sherry James
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(11, 0.6),
                    color: Color.white,
                  }}>
                  Preventive Medicine
                </CustomText>
              </View>
              <TouchableOpacity style={styles.cre_btn}>
                <CustomText
                  style={{
                    fontSize: moderateScale(11, 0.6),
                    color: Color.white,
                    //   width: windowWidth * 0.15,
                    textAlign: 'center',
                  }}>
                  see credential
                </CustomText>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: moderateScale(10, 0.6),
                paddingLeft: moderateScale(35, 0.6),
                paddingVertical: moderateScale(10, 0.6),
              }}>
              <CustomText style={styles.doc_text}>Languages</CustomText>
              <View
                style={[
                  styles.doc_row,
                  {
                    // backgroundColor :'red'
                  },
                ]}>
                <View
                  style={{
                    height: windowHeight * 0.02,
                    width: windowWidth * 0.04,
                  }}>
                  <CustomImage
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={require('../Assets/Images/quotes.png')}
                  />
                </View>
                <CustomText style={styles.sub_text}>
                  English, Spanish, Italian
                </CustomText>
              </View>
              <CustomText style={styles.doc_text}>Qualifications</CustomText>
              <View style={styles.doc_row}>
                <Icon
                  name="graduation-cap"
                  as={Entypo}
                  size={moderateScale(18, 0.6)}
                  color={Color.white}
                />
                <CustomText style={styles.sub_text}>
                  Plastic Surgery Medical Degree at Faculty of Medicine Charles
                  University Prague, 2015
                </CustomText>
              </View>
              <CustomText style={styles.doc_text}>
                Professional experience
              </CustomText>
              <View style={styles.doc_row}>
                <Icon
                  name="suitcase"
                  as={Entypo}
                  size={moderateScale(18, 0.6)}
                  color={Color.white}
                />
                <CustomText style={styles.sub_text}>
                  Physician at the Plastic Surgery Department at Bulovka
                  Hospital – Chief physician for breast diseases
                </CustomText>
              </View>
            </View>
          </View>
          {/* );
          })} */}
          <View style={styles.review_row}>
            <CustomText
              style={[
                styles.service_text,
                {
                  //   paddingTop: moderateScale(15, 0.6),
                },
              ]}>
              review (453)
            </CustomText>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}>
              <CustomText
                style={[
                  styles.service_text,
                  {
                    paddingHorizontal: moderateScale(5, 0.6),
                    fontSize: moderateScale(12, 0.6),
                    // paddingTop: moderateScale(15, 0.6),
                  },
                ]}>
                see all
              </CustomText>
              <Icon
                style={{
                  alignSelf: 'center',
                  marginTop: moderateScale(10, 0.6),
                }}
                name="arrow-right"
                as={Feather}
                size={moderateScale(14, 0.6)}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.map_con}>
            <FlatList
              contentContainerStyle={{
                marginHorizontal: moderateScale(10, 0.6),
                paddingBottom: moderateScale(10, 0.6),
                // marginVertical: moderateScale(10, 0.6),
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={reviews}
              renderItem={({item}) => {
                return <Review item={item} />;
              }}
            />
          </View>
          <CustomButton
            text={'contact'}
            fontSize={moderateScale(15, 0.3)}
            textColor={Color.white}
            borderWidth={0.5}
            borderColor={Color.white}
            borderRadius={moderateScale(15, 0.3)}
            width={windowWidth * 0.9}
            height={windowHeight * 0.05}
            bgColor={'#354654'}
            textTransform={'capitalize'}
            marginTop={moderateScale(10, 0.6)}
            marginBottom={moderateScale(25, 0.6)}
          />
        </ScrollView>
      </ScreenBoiler>
    </View>
  );
};

export default SpecialistScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#1B2730',
  },

  card_con: {
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: '#1F2D37',
    width: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
    borderEndEndRadius: 20,
    borderStartEndRadius: 20,
  },
  text_pro: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(5, 0.6),
    marginTop: moderateScale(15, 0.6),
    width: '80%',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_con: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    borderRadius: (windowHeight * 0.07) / 2,
    overflow: 'hidden',
    marginTop: moderateScale(7, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  like_btn: {
    height: windowHeight * 0.032,
    width: windowHeight * 0.032,
    borderRadius: (windowHeight * 0.032) / 2,
    borderWidth: 1,
    backgroundColor: '#354654',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    marginTop: moderateScale(10, 0.6),
  },
  treat_row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(7, 0.6),
    backgroundColor: '#202F3A',
    borderRadius: 5,
    width: windowWidth * 0.95,
    justifyContent: 'space-between',
    marginVertical: moderateScale(3, 0.6),
    marginHorizontal: moderateScale(15, 0.6),
  },
  doc_image: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    borderRadius: (windowHeight * 0.07) / 2,
    marginRight: moderateScale(10, 0.6),
  },
  review_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: moderateScale(10, 0.6),
    paddingRight: moderateScale(15, 0.6),
  },
  h1: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    width: windowWidth * 0.67,
    marginTop: moderateScale(7, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },

  text_con: {
    paddingTop: moderateScale(15, 0.6),
  },
  text_Row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(13, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
    color: Color.white,
  },

  h2: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(10, 0.6),
  },
  gallery_con: {
    height: windowHeight * 0.17,
  },
  service_text: {
    paddingTop: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
  },
  des: {
    paddingTop: moderateScale(2, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    textAlign: 'left',
  },
  cre_btn: {
    paddingHorizontal: moderateScale(5, 0.6),
    borderWidth: 0.5,
    width: windowWidth * 0.25,
    paddingVertical: moderateScale(3, 0.6),
    borderColor: Color.white,
    borderRadius: 5,
    backgroundColor: '#354654',
    // alignItems :'center',
    justifyContent: 'center',
  },
  map_con: {
    // height: windowHeight * 0.13,
    marginVertical: moderateScale(15, 0.6),
  },
  top_text: {
    color: '#FFCB82',
    fontSize: moderateScale(11, 0.6),
    marginHorizontal: moderateScale(4, 0.6),
  },
  info_card: {
    height: windowHeight * 0.18,
    width: windowWidth * 0.65,
    backgroundColor: 'transparent',
    marginRight: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 0.5,
    borderColor: Color.white,
  },

  dec: {
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
    width: windowWidth * 0.8,
  },
  doc_con: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    // paddingVertical: moderateScale(5, 0.6),
    // backgroundColor: '#202F3A',
    borderRadius: 5,
    width: windowWidth * 0.95,
    justifyContent: 'space-between',
    marginVertical: moderateScale(3, 0.6),
    marginHorizontal: moderateScale(15, 0.6),
  },
  top: {
    flexDirection: 'row',
    padding: moderateScale(2, 0.6),
    width: windowWidth * 0.36,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: moderateScale(5, 0.6),
    backgroundColor: '#867a60ff',
    marginBottom: moderateScale(5, 0.6),
  },
  doc_row: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    // paddingVertical :
    borderColor: Color.white,
    paddingVertical: moderateScale(8, 0.6),
  },
  doc_text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.white,
    paddingTop: moderateScale(5, 0.6),
  },
  sub_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
    marginHorizontal: moderateScale(8, 0.6),
  },
  gallery_image: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.4,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: moderateScale(10, 0.6),
    backgroundColor: 'red',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(2, 0.6),
    //   backgroundColor: '#202F3A',
    borderRadius: 5,
    //   width : windowWidth *0.7,
    marginVertical: moderateScale(3, 0.6),
    marginHorizontal: moderateScale(15, 0.6),
  },
  spec_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  special_card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(2, 0.6),
    backgroundColor: '#202F3A',
    borderRadius: 5,
    marginVertical: moderateScale(5, 0.6),
    marginHorizontal: moderateScale(15, 0.6),
  },
  treat_btn: {
    paddingHorizontal: moderateScale(5, 0.6),
    borderWidth: 0.5,
    width: windowWidth * 0.2,
    paddingVertical: moderateScale(3, 0.6),
    borderColor: Color.white,
    borderRadius: 5,
    backgroundColor: '#354654',
    // alignItems :'center',
    justifyContent: 'center',
  },
  treat_btn_text: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    textAlign: 'center',
  },
});
