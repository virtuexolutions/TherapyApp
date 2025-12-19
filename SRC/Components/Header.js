import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import ThemeIconButton from './ThemeIconButton';
import CustomText from './CustomText';
import {View} from 'native-base';
import BackButton from './BackButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useDispatch } from 'react-redux';
import { setUserLogoutAuth } from '../Store/slices/auth';
const Header = ({title='', showBack, showGreeting, logout,showCart = false}) => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.header, title == '' && {
      justifyContent:"space-between"
    }]}>
      {showBack && <BackButton style={styles.backBtn} />}
      <View>
        {title && (
          <View style={{width: !showBack ?windowWidth  : windowWidth * 0.7, alignItems: 'center'}}>
            <CustomText children={title} style={styles.title} />
          </View>
        )}
      </View>
      {showGreeting && (
        <View style={{width: showBack ? windowWidth * 0.7 : windowWidth * 0.8}}>
          <CustomText children={'Hello,'} style={styles.text2} />
          <CustomText children={'Daniel Steward'} style={styles.text1} />
        </View>
      )}
      {showCart && <ThemeIconButton cart={true} />}
      {logout && <ThemeIconButton iconName='logout' iconType={SimpleLineIcons} onPress={()=>{
        dispatch(setUserLogoutAuth())
      }} />}
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    height: windowHeight * 0.075,
    gap: scale(10),
    // height:windowHeight * 0.1,
    backgroundColor: Color.themeBluishBlack,
    borderBottomColor: '#293640',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backBtn: {
    // position:"absolute"
  },
  title: {
    color: Color.white,
    fontSize: moderateScale(16, 0.2),
  },
  text1: {
    color: Color.white,
    fontSize: moderateScale(16, 0.2),
  },
  text2: {
    color: Color.white,
    fontSize: moderateScale(14, 0.2),
  },
});
