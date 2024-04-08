import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RestaurantContext } from '../../context/RestaurantContext';
import uidata from '../../constants/uidata'
import FoodTile from '../../components/FoodTile';
import CategoryFoodComp from '../../components/CategoryFoodComp';

const Menu = () => {
  const navigation = useNavigation();
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);

  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        data={uidata.foods}
        showVerticalScrollIndicator={false}
        style={{ marginTop: 5 }}
        keyExtractor={(item) => item._id}
        scrollEnabled
        renderItem={({ item }) => (
          // <FoodTile item={item} showDetails={() => navigation.navigate('food-navigation', item)} />
          <View style={{ left: 8 }}>
            <CategoryFoodComp item={item} onPress={() => navigation.navigate('food-navigation', item)} />
          </View>
        )}
      />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})