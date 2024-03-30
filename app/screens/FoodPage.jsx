import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartCountContext } from '../context/CartCountContext'
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState('');
  // const { cartCount, setCartCount } = useContext(CartCountContext);


  return (
    <View style={{
      backgroundColor: COLORS.lightWhite,
      height: SIZES.height,

    }}>
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 40,
          }}
        />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons
            name='chevron-back-circle'
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { }} style={styles.shareBtn}>
          <MaterialCommunityIcons
            name='share-circle'
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { }} style={{ position: 'absolute', bottom: 25, right: 3 }}>
          <View style={styles.restBtn}>
            <Text style={styles.restText}>Open the Store</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, { color: COLORS.primary }]}>${(item.price + totalPrice) * count}</Text>
        </View>

        <Text style={styles.small}>{item.description}</Text>
      </View>
    </View>
  )
}

export default FoodPage

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 12,
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    top: SIZES.xxLarge
  },
  title: {
    fontSize: 22,
    fontFamily: 'medium',
    color: COLORS.black
  },
  shareBtn: {
    marginRight: 12,
    alignItems: 'center',
    zIndex: 999,
    right: 0,
    position: 'absolute',
    top: SIZES.xxLarge + 3
  },
  restBtn: {
    borderColor: COLORS.lightWhite,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,

  },
  container: {
    marginHorizontal: 12,
    marginTop: 10
  },
  restText: {
    color: COLORS.lightWhite,
    fontFamily: 'bold'
  },
  small: {
    fontSize: 13,
    fontFamily: 'regular',
    color: COLORS.gray,
    textAlign: 'justify',

  }
})