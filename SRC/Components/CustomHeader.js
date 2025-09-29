import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

const CustomHeader = ({title, backgroundColor}) => {
  return (
    <View
      style={[
        styles.main_con,
        {
          backgroundColor: backgroundColor ? backgroundColor : Color.white,
        },
      ]}>
      <CustomText
        isBold
        style={{
          fontSize: moderateScale(22, 0.6),
          color: Color.btntextColor,
          // fontWeight: 'bold',
        }}>
        {title}
      </CustomText>

      <View
        style={{
          width: windowHeight * 0.055,
          justifyContent: 'center',
          alignItems: 'center',
          height: windowHeight * 0.055,
          borderRadius: (windowHeight * 0.055) / 2,
          backgroundColor: Color.btntextColor,
        }}>
        <CustomImage
          onPress={() => {}}
          source={require('../Assets/Images/headerimage.png')}
          style={{width: windowHeight * 0.06, height: windowHeight * 0.06}}
        />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main_con: {
    width: windowWidth,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    alignItems: 'center',
  },
});
