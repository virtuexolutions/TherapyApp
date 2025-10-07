import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomErrorModal = ({ onClose, message, visible }) => {
    if (!visible) return null;
    return (
        <View>
            <Text>CustomErrorModal</Text>
        </View>
    )
}

export default CustomErrorModal

const styles = StyleSheet.create({})