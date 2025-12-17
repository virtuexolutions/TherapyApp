import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import ThemeIconButton from './ThemeIconButton';
import CustomImage from './CustomImage';
import SwitchToggle from 'react-native-switch-toggle';
import CustomButton from './CustomButton';
import DraggableFlatList, {
  NestableDraggableFlatList,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const LayoutBottomSheet = ({ref}) => {
  const layoutOptions = [
    {
      id: 1,
      title: 'Suggested wellness routines',
      icon: 'grid',
      enabled: true,
    },
    {
      id: 2,
      title: 'Travel packages',
      icon: 'grid',
      enabled: true,
    },
    {
      id: 3,
      title: 'Layaway plans',
      icon: 'grid',
      enabled: true,
    },
    {
      id: 4,
      title: 'Top providers',
      icon: 'grid',
      enabled: false,
    },
    {
      id: 5,
      title: 'AI Recommendations',
      icon: 'grid',
      enabled: false,
    },
    {
      id: 6,
      title: 'Active giveaways',
      icon: 'grid',
      enabled: false,
    },
    {
      id: 7,
      title: 'Orders, favorites, wearerable insights',
      icon: 'grid',
      enabled: false,
    },
  ];

  return (
    <RBSheet
      ref={ref}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: Color.themeDarkBlueGray,
          borderTopRightRadius: moderateScale(22, 0.2),
          borderTopLeftRadius: moderateScale(22, 0.2),
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
      height={windowHeight * 0.85}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <CustomText children={'Layout'} style={styles.text1} />
          <ThemeIconButton
            cross={true}
            iconStyle={styles.icon}
            onPress={() => {
              ref?.current?.close();
            }}
          />
        </View>
          <GestureHandlerRootView style={styles.listItems}>
            <DraggableFlatList
            scrollEnabled
              data={layoutOptions}
              ListFooterComponent={
                <CustomButton
                  isBold
                  text={'Save'}
                  fontSize={moderateScale(12, 0.3)}
                  textColor={Color.white}
                  marginTop={verticalScale(10)}
                  //   paddingHorizontal={scale(10)}
                  width={windowWidth * 0.9}
                  borderRadius={moderateScale(10, 0.3)}
                  height={scale(45)}
                  bgColor={Color.themeBrand500}
                  textTransform={'none'}
                />
              }
              containerStyle={{
                height:"100%",
                paddingBottom:scale(10)}}
              renderItem={({item, isActive, drag, index}) => {
                return (
                  <LayoutItem item={item} drag={drag} isActive={isActive} />
                );
              }}
              keyExtractor={item => item.id}
              onDragEnd={({data}) => console.log(data)}
            />
          </GestureHandlerRootView>
          {/* <View
          style={{height:scale(100)}}
          /> */}
      </View>
    </RBSheet>
  );
};

const LayoutItem = ({item, drag}) => {
  return (
    <TouchableOpacity onLongPress={drag} style={styles.tile}>
      <CustomImage
        source={require('../Assets/Images/layout.png')}
        style={styles.layoutIcon}
      />
      <CustomText children={item.title} style={styles.text2} />
      <SwitchToggle
        switchOn={true}
        // onPress={() => off(!on)}
        containerStyle={{
          // marginTop: 16,
          width: scale(30),
          height: scale(15),
          backgroundColor: 'red',
          borderRadius: 25,
          padding: 5,
        }}
        circleColorOn="white"
        backgroundColorOn={Color.themeBrand500}
        circleStyle={{
          width: scale(10),
          height: scale(10),
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default LayoutBottomSheet;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    borderBottomColor: Color.themeLightBlueGray,
    borderBottomWidth: 1,
  },
  text1: {
    color: Color.white,
    fontSize: moderateScale(16, 0.2),
  },
  icon: {
    width: scale(10),
    height: scale(10),
  },
  text2: {
    color: Color.white,
    fontSize: moderateScale(14, 0.2),
    width: '70%',
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    borderColor: Color.themeLightBlueGray,
    borderWidth: 1,
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10, 0.2),
  },
  listItems: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    gap: scale(18),
  },
});
