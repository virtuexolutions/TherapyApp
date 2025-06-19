import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import CustomStatusBar from '../Components/CustomStatusBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomImage from '../Components/CustomImage';
import * as Progress from 'react-native-progress';


const PerformanceAndAnalytics = () => {
  const progressItems = [
    {
      id: 1,
      label: "Progress",
      progress: 0.73,
      percentage: "73%"
    },
    {
      id: 2,
      label: "Progress 02",
      progress: 0.34,
      percentage: "34%"
    },
    {
      id: 3,
      label: "Progress 03",
      progress: 0.34,
      percentage: "34%"
    }
  ];
  
  return (
    <SafeAreaView style={styles.mainScreen}>
        <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
       <Header 
       textstyle={{
        fontWeight:'bold',
        fontSize:moderateScale(17,0.2),
        color:Color.primaryColor,
        opacity:0.85,
    }}
    // notificationIcon={true}
       title={"Performance & Analytics"}/>
      <ScrollView 
      contentContainerStyle={{alignItems:'center', paddingVertical:moderateScale(10,0.2)}}  
      >
        <View style={styles.imageContainer1}>
          <CustomImage
          source={require('../Assets/Images/graph.png')}
          style={styles.image}
          />
        </View>
        <View style={styles.imageContainer1}>
          <CustomImage
          source={require('../Assets/Images/bar.png')}
          style={styles.image}
          />
        </View>

        <View style={styles.progresses}>
          {progressItems.map((item) => (
            <View key={item.id} style={styles.progressContainer} >
            <View style={styles.circle}>
              <CustomText style={{fontSize:moderateScale(18,0.2), color:Color.secondaryColor, fontWeight:'bold'}}>{item.id}</CustomText>
            </View>
            <View style={styles.progressDetailContainer}>
            <Progress.Bar progress={item.progress} width={windowWidth  * 0.65} color={Color.primaryColor} />
            <View style={styles.progdetail}>
              <CustomText style={styles.txt}>{item.label}</CustomText>
              <CustomText style={styles.txt}>{item.percentage}</CustomText>
            </View>
            </View>
          </View>
          ))}
        </View>
        <View style={{height: windowHeight * 0.1}}/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default PerformanceAndAnalytics

const styles = StyleSheet.create({
  mainScreen:{
    width: windowWidth,
    height:windowHeight
},
  imageContainer1: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.3,
    overflow:"hidden"
  },
  image: {
width:"100%",
height:"100%",
    resizeMode: 'contain',
  },
  circle:{
    width: moderateScale(50, 0.2),
    height: moderateScale(50, 0.2),
    borderRadius: moderateScale(25, 0.2) ,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Color.primaryColor
  },
  progressContainer:{
    flexDirection:'row',
    gap: moderateScale(20, 0.2),
    // backgroundColor:"red",
    marginTop: moderateScale(10, 0.2),


    width: windowWidth * 0.88,
  },
  progressDetailContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  progdetail:{
    width: windowWidth * 0.65,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt:{
    color:"#686868"
  }
})