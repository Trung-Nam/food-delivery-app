import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodComponent from './FoodComponent'
import uidata from '../constants/uidata'

const NewFoodList = () => {

    const renderItem = ({ item }) => (
        <FoodComponent
            key={item._id}
            item={item}
            onPress={() => { }}
        />
    )

    return (
        <View style={{ marginLeft: 12, marginBottom: 10 }}>
            <FlatList
                data={uidata.foods}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5, rowGap: 10 }}
                scrollEnabled
                renderItem={renderItem}
            />
        </View>
    )
}

export default NewFoodList

const styles = StyleSheet.create({})