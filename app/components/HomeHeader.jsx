import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import AssetImage from './AssetImage'
import { UserReversedGeoCode } from '../context/UserReversedGeoCode'
import { COLORS, SIZES } from '../constants/theme'

const HomeHeader = () => {
    const { address, setAddress } = useContext(UserReversedGeoCode);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.outerStyle}>
                <AssetImage
                    data={require('../../assets/images/profile.jpg')}
                    width={50}
                    height={50}
                    mode={"cover"}
                    radius={99}
                />


                <View style={styles.headerStyle}>
                    <Text style={styles.heading}>Delivering to</Text>
                    <Text style={styles.location}>{`${address.city} ${address.name}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    outerStyle: {
        marginTop: 16,
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    headerStyle: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    heading: {
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: COLORS.secondary
    },
    location: {
        fontFamily: 'regular',
        fontSize: SIZES.small + 2,
        color: COLORS.gray
    },
})