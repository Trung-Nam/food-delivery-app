import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants/theme'

const CategoryItem = ({ category, selected }) => {
    return (
        <View style={{
            width: 82,
            height: 55,
            padding: 5,
            marginLeft: 12,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: category.value === selected ? COLORS.secondary : 'transparent',
            shadowColor: SHADOWS.small
        }}>

            <Image
                source={{ uri: category.imageUrl }}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: 13, fontFamily: 'regular' }}>{category.title}</Text>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({})