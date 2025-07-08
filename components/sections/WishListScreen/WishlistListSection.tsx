import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import WishListItem from '../../elements/WishListItem'

export default function WishlistListSection() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.article}>
                <WishListItem />
                <WishListItem />
                <WishListItem />
                <WishListItem />
                <WishListItem />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    article: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 20
    }
})