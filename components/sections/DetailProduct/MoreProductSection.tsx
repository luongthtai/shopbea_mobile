import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import ProductItem from '../../elements/ProductItem'
import COLORS from '../../../constants/colors'

export default function MoreProductSection() {
    return (
        <View style={styles.contents}>
            <TitleSection title='More Product From H&M' />

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.products}>
                    <ProductItem key={1} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={2} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={3} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={4} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={5} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={6} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={7} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={8} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={9} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={10} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={11} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={12} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={13} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                    <ProductItem key={14} productName='Barbie T-Shirt in White' category='Tops & Bottoms' price='19' star='2' width={160} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contents: {
        gap: 16,
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: COLORS["White-White-1"],
    },
    products: {
        flexDirection: "row",
        gap: 12
    }
})
