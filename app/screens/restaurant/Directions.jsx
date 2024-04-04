import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { RestaurantContext } from '../../context/RestaurantContext';

const Directions = () => {
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);

  return (
    <View>
      <Text>Directions</Text>
    </View>
  )
}

export default Directions

const styles = StyleSheet.create({})