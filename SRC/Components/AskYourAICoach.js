import { Pressable, StyleSheet, View } from "react-native";
import { scale, moderateScale,verticalScale } from "react-native-size-matters";
import { windowHeight, windowWidth } from "../Utillity/utils";
import Color from "../Assets/Utilities/Color";
import LinearGradient from "react-native-linear-gradient";
import CustomImage from "./CustomImage";
import CustomText from "./CustomText";
import ThemeIconButton from "./ThemeIconButton";

const AskYourAICoach = ({onPress, onIconPress }) => {
    return (
      <Pressable 
      onPress={onPress}
      style={styles.mainContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradient}
          colors={['#8CB679', '#C1C9BC', '#DCECD4', '#95BE83']}>
          <View
            style={styles.innerContainer}>
           <CustomImage
           source={require("../Assets/Images/Ai.png")}
           style={styles.icon}
           />   
          <CustomText 
          children={'Ask anything to your AI coach...'} 
          style={styles.text1} 
          />
            </View>
        </LinearGradient>
        <ThemeIconButton
        style={styles.iconBtn}
        explore={true}
        onPress={onIconPress}
        />
      </Pressable>
    );
  };
  export default AskYourAICoach;

  const styles = StyleSheet.create({
    mainContainer:{width: windowWidth, 
        flexDirection:"row",
        gap:scale(5),
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: verticalScale(20)},
    gradient:{
        width: windowWidth * 0.8,
        height: windowHeight * 0.07, 
        borderRadius: moderateScale(13, 0.2),
        alignItems:"center",
        justifyContent:"center"
      },
    icon:{
        width: scale(20), 
        height:scale(20)
    },
    text1: {
        color: Color.white,
        fontSize: moderateScale(16, 0.2),
      },
      iconBtn:{height:windowHeight * 0.065, width: windowWidth * 0.14},
      innerContainer:{
        borderRadius: moderateScale(13, 0.2),
        width: windowWidth * 0.786,
        height: windowHeight * 0.064,
        backgroundColor: Color.themeBluishBlack,
        flexDirection:"row",
        alignItems:"center",
        gap:scale(10),
        paddingHorizontal:scale(10)
      }
  });