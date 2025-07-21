import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import SearchContainer from '../Components/SearchContainer';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import Therapycard from '../Components/Therapycard';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        textstyle={{
          color: Color.btntextColor,
          fontWeight: '800',
          letterSpacing: 0.5,
        }}
        title={'Directory'}
        headerColor={Color.bgColor}
      />
      <View style={styles.row}>
        <SearchContainer
          input
          width={windowWidth * 0.8}
          height={windowHeight * 0.05}
          style={{
            borderRadius: moderateScale(30, 0.6),
            borderColor: Color.btntextColor,
          }}
          inputStyle={{
            paddingTop: moderateScale(10, 0.6),
          }}
        />
        <TouchableOpacity style={styles.filter}>
          <Icon
            name="tune"
            as={MaterialIcons}
            size={moderateScale(22, 0.6)}
            color={Color.btntextColor}
          />
          {/* <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../Assets/Images/sort.png')}
          /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    color: Color.btntextColor,
  },
  row: {
    flexDirection: 'row',
  },
  filter: {
    width: windowWidth * 0.11,
    height: windowWidth * 0.11,
    borderRadius: (windowWidth * 0.11) / 2,
    borderWidth: 1.5,
    borderColor: Color.btntextColor,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
