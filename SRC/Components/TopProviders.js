import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { Icon } from 'native-base'
import ProviderComponent from './ProviderComponent';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import { windowWidth } from '../Utillity/utils';

const TopProviders = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.textContainer}>
      <CustomText 
      children={"Top Providers"}
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
    <ProvidersList/>
  </View>
)
}
const ProvidersList =() => {
  const providers = [
      {
        id: 1,
        title: "Cardio Check",
        subtitle:"Women's Clinic",
        specialities: ["Dermatology", "Cardiology",
        "Neurology", 'Internal medicine', '+3 more' ],
        image:require("../Assets/Images/provider1.png"),
        location: "US, San Francisco, CA",
        priceRanfe: "$120 - $900",
    },
    {
        id: 2,
        title: "Dustin Sparrow",
        subtitle:"Implantologist",
        specialities: ["Dermatology", "Cardiology",
        "Neurology", 'Internal medicine', '+3 more' ],
        image: require("../Assets/Images/provider2.jpg"),
        location: "HUX Hosplital, San Francisco, CA",
        priceRange: "$600 - $1,200"
      },
    ];
return (
      <FlatList
      data={providers}
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
            <ProviderComponent item={item}/>
          )
      }}
      />
)
}

export default TopProviders

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