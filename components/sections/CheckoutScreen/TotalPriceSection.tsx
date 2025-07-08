import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from '../../elements/ButtonPrimary'
import PriceItem from '../../elements/PriceItem'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../types/stackParams'
import COLORS from '../../../constants/colors'

export default function TotalPriceSection() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToCheckout = () => navigation.navigate('status_checkout')

    return (
        <View style={styles.contents}>
            <View>
                <View style={styles.list_price}>
                    <PriceItem title='Unit Cost' price='19' />
                    <PriceItem title='Qty' price='19' />
                    <PriceItem title='Subtotal' price='19' />
                    <PriceItem title='Shipping Cost' price='19' />
                </View>
                <View style={styles.total}>
                    <Text style={styles.total_title}>Total</Text>
                    <Text style={styles.total_price}>$20.2</Text>
                </View>
            </View>

            <ButtonPrimary title='Checkout' onPress={onNavigateToCheckout} />
        </View>
    )
}

const styles = StyleSheet.create({
    contents: {
        gap: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS["White-White-1"],
    },
    list_price: {
        gap: 9,
        paddingBottom: 17,
        borderBottomWidth: 2,
        borderBottomColor: COLORS['Grey-Grey-1'],
        borderStyle: 'dashed'
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 17
    },
    total_title: {
        fontWeight: 700,
        fontSize: 16
    },
    total_price: {
        fontWeight: 700,
        fontSize: 16,
        color: COLORS['Support-Color-Red']
    },
})
