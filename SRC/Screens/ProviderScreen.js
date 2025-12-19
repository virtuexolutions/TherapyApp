import React, {useRef} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {FlatList, Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {Rating} from 'react-native-ratings';
import CustomButton from '../Components/CustomButton';
import Review from '../Components/Review';
import navigationService from '../navigationService';

const ProviderScreen = props => {
  const galleryData = [
    {
      id: 1,
      image: require('../Assets/Images/gallery1.png'),
    },
    {
      id: 2,
      image: require('../Assets/Images/gallery2.png'),
    },
    {
      id: 3,
      image: require('../Assets/Images/gallery1.png'),
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
    'Dermatology    ',
    'Obstetrics',
    'Cardiology',
    'Gastroenterology',
    'Neurology',
    'Endocrinology',
    'Pediatrics',
  ];

  const location = [
    'Early pregnancy scan at Cedars-Sinai Medical Center',
    'Early pregnancy scan at UCLA Medical Center',
    'Early pregnancy scan at Providence Saint John s Health Center',
    'Early pregnancy scan at Keck Medicine of USC',
  ];
  const treatments = [
    'Early pregnancy scan (booking or dating scan)',
    'Ultrasound for fetal anatomy assessment',
    'Routine prenatal check-up',
    'Gestational diabetes screening',
    'Postpartum follow-up appointment',
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
        <Header title={''} 
        showGreeting={true}
        logout={true} 
              
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.mainScreen,
            
          ]}
          contentContainerStyle={{
            paddingBottom:scale(80)
          }}
          >
          <View style={styles.card_con}>
            <View
              style={{
                flexDirection: 'row',
                padding: moderateScale(2, 0.6),
                width: windowWidth * 0.36,
                borderRadius: 8,
                alignItems: 'center',
                paddingHorizontal: moderateScale(5, 0.6),
                backgroundColor: '#867a60ff',
                marginBottom: moderateScale(5,.6)
              }}>
              <Icon
                name="star"
                as={AntDesign}
                size={moderateScale(12, 0.6)}
                color={'#FFCB82'}
              />
              <CustomText
                style={{
                  color: '#FFCB82',
                  fontSize: moderateScale(11, 0.6),
                  marginHorizontal: moderateScale(4, 0.6),
                }}>
                5 (453) Top provider
              </CustomText>
            </View>
            <View style={styles.row}>
              <View style={styles.image_con}>
                <CustomImage
                  style={styles.image}
                  source={require('../Assets/Images/other.png')}
                />
              </View>

              <CustomText numberOfLines={2} style={styles.h1}>
                {`Costal View Women’s \nClinic`}
              </CustomText>

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
                  Saint Barnabas Hospital, Los Angeles, CA
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
                  <View
                    style={{
                      height: windowHeight * 0.15,
                      width: windowWidth * 0.4,
                      borderRadius: 10,
                      overflow: 'hidden',
                      marginRight: moderateScale(10, 0.6),
                      backgroundColor: 'red',
                    }}>
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
            About the Hospital
          </CustomText>
          <CustomText
            style={[
              styles.des,
              {
                lineHeight: 19,
                fontSize: moderateScale(13, 0.6),
              },
            ]}>
            At Costal View Women’s Clinic, we offer detailed fetal anatomy
            ultrasounds, allowing you to witness your baby's development. Our
            expert team uses advanced technology to provide clear and
            comprehensive images, ensuring you can cherish these early moments.
            {'\n\n'}
            We are committed to providing exceptional care and support
            throughout your pregnancy journey. With our state-of-the-art
            facilities and experienced medical professionals, you can trust us
            to deliver accurate and reliable results, giving you peace of mind
            as you prepare for your little one's arrival. See all
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
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {Specialties?.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: moderateScale(10, 0.6),
                    paddingVertical: moderateScale(2, 0.6),
                    backgroundColor: '#202F3A',
                    borderRadius: 5,
                    marginVertical: moderateScale(5, 0.6),
                    marginHorizontal: moderateScale(15, 0.6),
                  }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingVertical: moderateScale(5, 0.6),
                  backgroundColor: '#202F3A',
                  borderRadius: 5,
                  width: windowWidth * 0.95,
                  justifyContent: 'space-between',
                  marginVertical: moderateScale(3, 0.6),
                  marginHorizontal: moderateScale(15, 0.6),
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.white,
                    width: windowWidth * 0.65,
                  }}>
                  {item}
                </CustomText>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: moderateScale(5, 0.6),
                    borderWidth: 0.5,
                    width: windowWidth * 0.2,
                    paddingVertical: moderateScale(3, 0.6),
                    borderColor: Color.white,
                    borderRadius: 5,
                    backgroundColor: '#354654',
                    // alignItems :'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(11, 0.6),
                      color: Color.white,
                      //   width: windowWidth * 0.15,
                      textAlign: 'center',
                    }}>
                    see detils
                  </CustomText>
                </TouchableOpacity>
              </View>
            );
          })}
          <CustomText
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingVertical: moderateScale(2, 0.6),
                  //   backgroundColor: '#202F3A',
                  borderRadius: 5,
                  //   width : windowWidth *0.7,
                  marginVertical: moderateScale(3, 0.6),
                  marginHorizontal: moderateScale(15, 0.6),
                }}>
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
            meet the team
          </CustomText>
          {team?.map(item => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingVertical: moderateScale(5, 0.6),
                  backgroundColor: '#202F3A',
                  borderRadius: 5,
                  width: windowWidth * 0.95,
                  justifyContent: 'space-between',
                  marginVertical: moderateScale(3, 0.6),
                  marginHorizontal: moderateScale(15, 0.6),
                }}>
                <View
                  style={{
                    height: windowHeight * 0.07,
                    width: windowHeight * 0.07,
                    borderRadius: (windowHeight * 0.07) / 2,
                    marginRight: moderateScale(10, 0.6),
                  }}>
                  <CustomImage
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={item?.image}
                  />
                </View>
                <View
                  style={{
                    width: windowWidth * 0.45,
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(13, 0.6),
                      color: Color.white,
                    }}>
                    {item?.name}
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: moderateScale(11, 0.6),
                      color: Color.white,
                    }}>
                    {item?.Specialties}
                  </CustomText>
                </View>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: moderateScale(5, 0.6),
                    borderWidth: 0.5,
                    width: windowWidth * 0.25,
                    paddingVertical: moderateScale(8, 0.6),
                    borderColor: Color.white,
                    borderRadius: 5,
                    backgroundColor: '#354654',
                    // alignItems :'center',
                    justifyContent: 'center',
                  }}>
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
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: moderateScale(10, 0.6),
              paddingRight: moderateScale(15, 0.6),
            }}>
            <CustomText
              style={[
                styles.service_text,
                {
                  //   paddingTop: moderateScale(15, 0.6),
                },
              ]}>
              reviews (453)
            </CustomText>
            <Pressable
            onPress={()=>{
              navigationService.navigate("ReviewScreen")
            }}
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
            </Pressable>
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

export default ProviderScreen;

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
    paddingHorizontal: moderateScale(10, 0.6),
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
    // backgroundColor :'green' 
  },
  image_con: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.1,
    borderRadius: 5,
    overflow: 'hidden',
    // backgroundColor :'yellow', 

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
  h1: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
    marginTop: moderateScale(7, 0.6),
    // backgroundColor :'red'
    // paddingHorizontal: moderateScale(5, 0.6),
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
  map_con: {
    // height: windowHeight * 0.13,
    marginVertical: moderateScale(15, 0.6),
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
});
