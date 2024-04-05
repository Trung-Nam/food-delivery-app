import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { RestaurantContext } from '../../context/RestaurantContext';
import GoogleMapView from '../../components/GoogleMapView';

const Directions = () => {
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);
  const coords = restaurantObj.coords;


  return (
    <View>
      <GoogleMapView placeList={coords} />
    </View>
  )
}

export default Directions

const styles = StyleSheet.create({})