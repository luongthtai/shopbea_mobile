import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../../elements/CategoryItem'

export default function CategoriesSection() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <CategoryItem title='All' isActive />
                <CategoryItem title='Top&Bottoms' isActive={false} />
                <CategoryItem title='Shoes' isActive={false} />
                <CategoryItem title='Sacals' isActive={false} />
                <CategoryItem title='Accessories' isActive={false} />
                <CategoryItem title='Shoes' isActive={false} />
                <CategoryItem title='Shoes' isActive={false} />
                <CategoryItem title='Shoes' isActive={false} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16
    }
})