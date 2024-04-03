import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantPage from '../../navigation/RestaurantPage'
import NetworkImage from '../../components/NetworkImage'
import { SIZES } from '../../constants/theme'
import { useRoute } from '@react-navigation/native'

const Restaurant = ({ navigation }) => {
    const route = useRoute();
    const item = route.params;
    return (
        <View>
            <View>
                <NetworkImage
                    data={item}
                    source={item.imageUrl}
                    height={SIZES.height / 3.4}
                    width={SIZES.width}
                    radius={15}
                />
            </View>
            <View style={{height:200}}>

            </View>
            <View style={{ height: 400 }}>
                <RestaurantPage />
            </View>
        </View>
    )
}

export default Restaurant

const styles = StyleSheet.create({})