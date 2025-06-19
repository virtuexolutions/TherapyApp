import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomStatusBar from '../Components/CustomStatusBar'
import Color from '../Assets/Utilities/Color'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../Components/CustomImage'
import CustomButton from '../Components/CustomButton'

const Dashboard = () => {
    const notifications = [
        {
          id: 1,
          image: require("../Assets/Images/therapy2.png"),
          title: "IV Therapy",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: true
        },
        {
          id: 2,
          image: require("../Assets/Images/therapy1.png"),
          title: "Regenerative Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
        },
        {
          id: 3,
          image: require("../Assets/Images/therapy3.png"),
          title: "Light & Oxygen Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
        },
        {
          id: 4,
          image: require("../Assets/Images/therapy1.png"),
          title: "Regenerative Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
        },
        {
          id: 5,
          image: require("../Assets/Images/therapy3.png"),
          title: "Light & Oxygen Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
        },
        {
          id: 6,
          image: require("../Assets/Images/therapy1.png"),
          title: "Regenerative Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
        },
        {
          id: 7,
          image: require("../Assets/Images/therapy3.png"),
          title: "Light & Oxygen Therapies",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor lacus eros...",
          active: false
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
        color:Color.primaryColor,
        opacity:0.85,
    }}
    notificationIcon={true}
       title={"Provider Dashboard"}/>
       <View style={{paddingHorizontal:moderateScale(15,0.2), paddingVertical:moderateScale(10,0.2)}}>
        <CustomText style={styles.heading}>Notifications</CustomText>
        <CustomText style={styles.desc}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Eu Pulvinar Metus, Fringilla Semper Enim.</CustomText>
       </View>
       <FlatList
       data={notifications}
       keyExtractor={item => item.id.toString()}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
        paddingHorizontal: moderateScale(10, 0.2),
        paddingVertical: moderateScale(10, 0.2),
        gap: moderateScale(10, 0.2)
       }}
       renderItem={({item}) => (
        <NotificationCard item={item}/>
       )}
       ListFooterComponent={() => (
        <View style={{height: windowHeight * 0.08}}/>
       )}
       />

    </SafeAreaView>
  )
}
function NotificationCard ({item}){
    return(
        <View style={[styles.card, item?.active && {
            backgroundColor:Color.primaryColor
        }]}>
            <View style={styles.imageContainer}>
                <CustomImage 
                source={item?.image}
                style={styles.image}
                />
            </View>
            <View style={styles.descContainer}>
            <CustomText style={[styles.heading2, item?.active && {
                color: Color.white
            }]}>{item.title}</CustomText>
            <CustomText style={[styles.desc2, item?.active && {
                color: Color.white
            }]}>{item.description}</CustomText>
            <CustomButton
            text={"Read More"}
            textstyle={{fontSize:moderateScale(8, 0.3), fontWeight:'bold'}}
        textColor={item?.active ? Color.primaryColor : Color.secondaryColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.2}
        // height={windowHeight * 0.025}
        style={{paddingVertical: moderateScale(7, 0.2,
            ), alignSelf: 'flex-start',}}
        bgColor={item?.active ? Color.secondaryColor : Color.primaryColor}
        textTransform={'capitalize'}
        marginTop={windowHeight * 0.02}
        elevation={false}
            />
            </View>
        </View>
    );
}

export default Dashboard

const styles = StyleSheet.create({
    mainScreen:{
        width: windowWidth,
        height:windowHeight
    },
    heading:{
        color:Color.primaryColor,
        fontWeight:'bold',
        fontSize:moderateScale(18,0.2),
    },
    desc:{
        color:Color.primaryColor,
        fontSize:moderateScale(10,0.2),
    },
    card:{
        flexDirection:'row',
        gap:moderateScale(10, 0.2),
        borderRadius: moderateScale(20, 0.2),
        borderWidth: 1,
        padding: moderateScale(10, 0.2),
        // backgroundColor:Color.red,
        borderColor: Color.lightGrey,



    },
    descContainer:{
    paddingHorizontal: moderateScale(5, 0.2),
        // backgroundColor:Color.white,
        // alignItems:'flex-start',
        // justifyContent:"flex-start"
    },
    desc2:{
        width: windowWidth * 0.65,
        color:Color.primaryColor,
        fontSize: moderateScale(10, 0.2),
    },
    heading2:{
        fontSize: moderateScale(12, 0.2),
        color: Color.primaryColor,
        fontWeight: 'bold',
    },
    imageContainer:{
        width: windowWidth * 0.22,
        height: windowWidth * 0.2,
        overflow:"hidden",
        borderRadius: moderateScale(10, 0.2),
    },
    image:{
        width: '100%',
        height: '100%',
    },  
})