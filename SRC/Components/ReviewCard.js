import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'

const ReviewCard = ({ item }) => {
    return (
        <View style={{
            width: windowWidth * 0.9,
            height: windowWidth * 0.2,
        }}>
            <Text>ReviewCard</Text>
        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({})