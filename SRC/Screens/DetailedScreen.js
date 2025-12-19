import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {FlatList, Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {SafeAreaView} from 'react-native-safe-area-context';
import navigationService from '../navigationService';
import RequestModal from '../Components/RequestModal';

const DetailedScreen = ({route}) => {
  // const fromOrder = true;
  const fromOrder = route?.params?.fromOrder;
  const ref= useRef(null);

  const refRBSheet = useRef();
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
  const g_info = [
    {
      id: 1,
      image: require('../Assets/Images/time.png'),
      label: 'duration',
      value: '1 hour',
    },
    {
      id: 2,
      label: 'Treatment Type',
      image: require('../Assets/Images/vector.png'),

      value: 'Ultrasound',
    },
    {
      id: 3,
      label: 'Treatment Type',
      image: require('../Assets/Images/vector.png'),
      value: 'Ultrasound',
    },
  ];

  const include_data = [
    'Detailed examination of fetal anatomy',
    'Assessment of gestational age and growth',
    'Evaluation of amniotic fluid levels',
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#1B2730'}}>
      <ScreenBoiler
        statusBarBackgroundColor={Color.themeBluishBlack}
        statusBarContentStyle={'light-content'}>
        <Header
          title={''}
          showBack={true}
          showCart={fromOrder ? false : true}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.mainScreen,
            {
              paddingBottom: moderateScale(190, 0.6),
            },
          ]}>
          <View style={styles.card_con}>
            <View style={styles.row}>
              <View style={styles.image_con}>
                <CustomImage
                  style={styles.image}
                  source={require('../Assets/Images/other.png')}
                />
              </View>

              <CustomText style={styles.text_pro}>
                Provided by
                <CustomText
                  style={{
                    fontSize: moderateScale(11, 0.6),
                    color: '#17B28A',
                    borderBottomWidth: 1,

                    textDecorationLine: 'underline',
                  }}>
                  HealthFirst Medical
                </CustomText>
              </CustomText>

              {!fromOrder && (
                <TouchableOpacity style={styles.like_btn}>
                  <Icon
                    name={'heart'}
                    as={Feather}
                    size={moderateScale(15, 0.6)}
                    color={Color.white}
                  />
                </TouchableOpacity>
              )}
            </View>

            <CustomText numberOfLines={2} style={styles.h1}>
              Ultrasound for fetal anatomy assessment
            </CustomText>
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
              {!fromOrder ? (
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
              ) : (
                <View
                  style={[
                    styles.text_Row,
                    {
                      justifyContent: 'space-between',
                      // backgroundColor :'red',
                      // marginTop: moderateScale(5, 0.6),
                    },
                  ]}>
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
                      as={FontAwesome}
                      name={'calendar'}
                      size={moderateScale(13, 0.6)}
                      color={Color.white}
                    />

                    <CustomText style={styles.text}>
                      Purchased on: 12/24/25
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
                      name={'dollar-sign'}
                      size={moderateScale(13, 0.6)}
                      color={Color.white}
                    />

                    <CustomText style={styles.text}>Price: $350.00</CustomText>
                  </View>
                </View>
              )}
            </View>
          </View>

          {!fromOrder && (
            <>
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
            </>
          )}
          <CustomText
            style={[
              styles.service_text,
              {
                paddingTop: moderateScale(15, 0.6),
              },
            ]}>
            About the service
          </CustomText>
          <CustomText
            style={[
              styles.des,
              {
                lineHeight: 19,
                fontSize :moderateScale(13,.6)
              },
            ]}>
            At Saint Barnabas Hospital, experience the wonder of seeing your
            baby's development through our detailed fetal anatomy ultrasound.
          </CustomText>
          <CustomText
            style={[
              styles.service_text,
              {
                paddingTop: moderateScale(15, 0.6),
              },
            ]}>
            General information
          </CustomText>
          <View style={styles.map_con}>
            <FlatList
              contentContainerStyle={{
                marginHorizontal: moderateScale(10, 0.6),
                // marginVertical: moderateScale(10, 0.6),
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={g_info}
              renderItem={({item}) => {
                return (
                  <View style={styles.info_card}>
                    <View style={styles.icon_con}>
                      <View style={styles.icon}>
                        <CustomImage
                          style={{
                            height: '100%',
                            width: '100%',
                          }}
                          source={item?.image}
                        />
                      </View>
                    </View>
                    <CustomText
                      style={{
                        fontSize: moderateScale(14, 0.6),
                        color: Color.white,
                      }}>
                      {item?.label}
                    </CustomText>
                    <CustomText
                      style={{
                        fontSize: moderateScale(12, 0.6),
                        color: Color.white,
                      }}>
                      {item?.value}
                    </CustomText>
                  </View>
                );
              }}
            />
          </View>
          <CustomText
            style={[
              styles.service_text,
              {
                paddingTop: moderateScale(0, 0.6),
                marginTop: moderateScale(-10, 0.6),
              },
            ]}>
            What includes?
          </CustomText>
          {include_data?.map(item => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingVertical: moderateScale(2, 0.6),
                }}>
                <Icon
                  style={{
                    marginRight: moderateScale(10, 0.6),
                  }}
                  name="check"
                  as={Feather}
                  size={moderateScale(15, 0.6)}
                  color={'#17B28A'}
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
          {!fromOrder && (
            <>
              <CustomText style={[styles.service_text]}>
                Meet your provider
              </CustomText>
              <View style={styles.row_sec}>
                <View style={styles.image_con}>
                  <CustomImage source={require('../Assets/Images/other.png')} />
                </View>
                <View>
                  <CustomText isBold style={styles.h3}>
                    HealthFirst Medical
                  </CustomText>
                  <CustomText style={[styles.dec]}>
                    HealthFirst Medical is dedicated to pushing the boundaries
                    of medical science. Our commitment is to deliver exceptional
                    solutions.
                  </CustomText>
                </View>
              </View>
            </>
          )}

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: moderateScale(10, 0.6),
              paddingTop: moderateScale(10, 0.6),
              marginTop : moderateScale(10,.6),
              justifyContent: 'space-between',
              // height : windowHeight*0.5, 
              // backgroundColor: 'red',
              // bottom: 10,
              // position: 'absolute',
            }}>
            <TouchableOpacity style={styles.detail_btn}
            onPress={()=>{
              ref.current?.open()
            }}
            >
              <CustomText style={styles.btn_text}>request a call</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                navigationService.navigate("MessageScreen");
              }}
              style={[
                styles.detail_btn,
                {
                  backgroundColor: '#069571',
                  borderWidth: 0,
                },
              ]}>
              <CustomText style={styles.btn_text}>send message</CustomText>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {!fromOrder && (
          <View style={styles.package_row}>
            <View>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                }}>
                Vitality Price
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.white,
                }}>
                $350.00
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(11, 0.6),
                  color: Color.white,
                  textDecorationLine: 'line-through',
                }}>
                $590.00
              </CustomText>
            </View>
            <TouchableOpacity style={styles.detail_btn} onPress={() =>{
              navigationService.navigate("PurchaseTreatment")
            }}>
              <CustomText
                style={{color: Color.white, fontSize: moderateScale(12, 0.6)}}>
                Get treatment
              </CustomText>
            </TouchableOpacity>
          </View>
        )}
        <RequestModal
        ref={ref}
        
        />
        {/* </LinearGradient> */}
      </ScreenBoiler>
    </View>
  );
};

export default DetailedScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#1B2730',
  },

  card_con: {
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: '#354654',
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
  },
  image_con: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.1,
    borderRadius: 5,
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
  h1: {
    fontSize: moderateScale(18, 0.6),
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
  btn: {
    width: windowWidth * 0.68,
    borderWidth: 1,
    backgroundColor: '#354654',
    padding: moderateScale(4, 0.6),
    borderColor: Color.white,
    borderRadius: moderateScale(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(8, 6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  saving_con: {
    width: windowWidth * 0.21,
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
    borderRadius: 5,
    paddingVertical: moderateScale(2, 0.6),
    backgroundColor: '#36D1A333',
  },
  saving_text: {
    fontSize: moderateScale(11, 0.6),
    color: '#17B28A',
  },
  package_row: {
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.6),
    justifyContent: 'space-between',
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
    height: windowHeight * 0.13,
    marginVertical: moderateScale(15, 0.6),
  },
  info_card: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.37,
    backgroundColor: 'transparent',
    marginRight: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 0.5,
    borderColor: Color.white,
  },
  icon_con: {
    height: windowHeight * 0.03,
    width: windowHeight * 0.03,
    borderRadius: (windowHeight * 0.03) / 2,
    borderWidth: 0.3,
    borderColor: Color.white,
    marginBottom: moderateScale(15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: windowHeight * 0.015,
    width: windowHeight * 0.015,
  },
  dec: {
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
    width: windowWidth * 0.8,
  },
  h3: {
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
    letterSpacing: 0.6,
  },
  row_sec: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
  package_row: {
    flexDirection: 'row',
    height: windowHeight * 0.1,
    alignItems: 'center',
    paddingHorizontal: moderateScale(15, 0.6),
    justifyContent: 'space-between',
    backgroundColor: '#354654',
    borderRadius: 20,
  },
  detail_btn: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.037,
    marginTop: moderateScale(6, 0.6),
    backgroundColor: '#354654',
    borderColor: Color.white,
    borderWidth: 0.6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },

  detail_btn: {
    width: windowWidth * 0.45,
    height: windowHeight * 0.036,
    marginTop: moderateScale(6, 0.6),
    backgroundColor: '#354654',
    borderColor: Color.white,
    borderWidth: 0.6,
    borderRadius: 8,
    // backgroundColor :'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
