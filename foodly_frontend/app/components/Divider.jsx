import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme';

const Divider = () => {
    return (
        <View style={styles.divider} />
    )

}

export default Divider;

const styles = StyleSheet.create({
    divider: {
        width: 0.3,
        borderColor: COLORS.gray2,
        opacity: 0.7,
        width: SIZES.width - 20,
        borderWidth: 0.3,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 7
    }
})