import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import { windowWidth } from '../Utillity/utils'
import CustomText from './CustomText'
import { Icon } from 'native-base';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import GiveAwayComponent from './GiveAwayComponent'


const ActiveGiveaways = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.textContainer}>
      <CustomText 
      children={"Active giveaways"}
      style={styles.heading}
      />
      <Pressable 
      onPress={()=>{}}
      style={styles.textBtn}>
      <CustomText 
      children={"See all"}
      style={styles.text2}
      />
      <Icon
      name='arrow-right'
      as={FontAwesome6}
      color={Color.white}
      size={moderateScale(14,0.2)}
      />
      </Pressable>
    </View>
    <ConsulationsList/>
  </View>
  )
}
const ConsulationsList =() => {
  const data = [
      {
        id: 1,
        title: "Virtual consultations",
        desc: "Win a year of free virtual consultations.",
        image:require("../Assets/Images/gradient1.png"),
        iconSource: require("../Assets/Images/folder.png")
      },
      {
        id: 2,
        title: "Virtual consultations",
        desc: "Win a year of free virtual consultations.",
        image: require("../Assets/Images/gradient2.png"),
        iconSource: require("../Assets/Images/lock2.png")

      }
    ];
return (
      <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{width: windowWidth,}}
      contentContainerStyle={{
       paddingVertical:verticalScale(10),
       paddingHorizontal:scale(20),
       gap:scale(10)
      }}
      renderItem={({item}) =>{
          return(
            <GiveAwayComponent item={item}/>
          )
      }}
      />
)
}
export default ActiveGiveaways

const styles = StyleSheet.create({
  mainContainer:{
      width: windowWidth,
      marginTop:verticalScale(12),
  },
  textContainer:{
    width: windowWidth * 0.9,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    alignItems:"center",
    alignSelf:"center",
  //   paddingVertical:verticalScale(10)
  },
  heading:{
      fontSize:moderateScale(16,0.2),
      color:Color.white,                        
  },
  text2:{
      color:Color.white,
      fontSize:moderateScale(12,0.2)
  },
  textBtn:{
      flexDirection:"row",
      alignItems:"center",
      gap:scale(7)
  },
 
})