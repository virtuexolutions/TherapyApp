import { Pressable, StyleSheet } from "react-native";
import Color from "../Assets/Utilities/Color";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { windowWidth } from "../Utillity/utils";
import CustomImage from "./CustomImage";
import CustomText from "./CustomText";

const CustomTile = ({title, showLeadingImage=true,onPress,selected = false, style}) => {
    return (
     <Pressable 
     onPress={onPress}
     style={[styles.goal, selected && styles.selectedGoal, style]}>
     {showLeadingImage && <CustomImage source={require("../Assets/Images/wave.png")}/>}
      <CustomText
      children={title}
      style={styles.text}
      />
     </Pressable>
    )
  }
export default CustomTile;

const styles = StyleSheet.create({
    goal:{
        flexDirection:"row",
        paddingVertical:verticalScale(15),
        paddingHorizontal:scale(10),
        marginTop:verticalScale(10),
        gap:scale(10),
        alignItems:"center",
        width: windowWidth * 0.9,    
        borderRadius:moderateScale(10,0.2),
        backgroundColor:Color.themeDarkBlueGray,
        borderWidth:1,
        borderColor:Color.themeLightBlueGray
    },
    selectedGoal:{
        backgroundColor:Color.themeLightAqua,
        borderColor:Color.themeVeryLightAqua
    },
    text:{
        color:Color.white,
        fontSize:moderateScale(14,0.2),
        textTransform:"none",
    }
})