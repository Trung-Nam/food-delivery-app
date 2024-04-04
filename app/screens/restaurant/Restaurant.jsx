import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import RestaurantPage from '../../navigation/RestaurantPage'
import NetworkImage from '../../components/NetworkImage'
import { COLORS, SIZES } from '../../constants/theme'
import { useRoute } from '@react-navigation/native'
import { RatingInput } from 'react-native-stock-star-rating'


const Restaurant = ({ navigation }) => {
    const route = useRoute();
    const item = route.params;
    return (
        <View>
            <View>
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

                <NetworkImage
                    data={item}
                    source={item.imageUrl}
                    height={SIZES.height / 3.4}
                    width={SIZES.width}
                    radius={15}
                />
                <View style={styles.rating}>
                    <View style={styles.innaRating}>
                        <RatingInput
                            rating={Number(item.rating)}
                            size={22}
                        // color={COLORS.lightWhite}
                        />

                        <TouchableOpacity style={styles.ratingBtn} onPress={() => {}}>
                            <Text style={styles.btnText}>Rate This Store</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            <View style={{ height: 200 }}>

            </View>
            <View style={{ height: 400 }}>
                <RestaurantPage />
            </View>
        </View>
    )
}

export default Restaurant

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
    btnText: {
        fontSize: 16,
        fontFamily: 'medium',
        color: COLORS.lightWhite
    },
    shareBtn: {
        marginRight: 12,
        alignItems: 'center',
        zIndex: 999,
        right: 0,
        position: 'absolute',
        top: SIZES.xxLarge + 3
    },
    rating: {
        height: 50,
        width: "100%",
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: "#00fff",
        zIndex: 999,
        bottom: 0,
        borderRadius: 15
    },
    innaRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12
    },
    ratingBtn: {
        borderColor: COLORS.lightWhite,
        borderWidth: 1,
        borderRadius: 12,
        padding: 6,

    }
})