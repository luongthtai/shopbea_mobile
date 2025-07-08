import React from 'react'
import { StyleSheet, View } from 'react-native'
import ProductItem from '../elements/ProductItem'
import { products } from '../../data/productsData'

export default function ProductsSection() {
    return (
        <View style={styles.productList}>
            <View style={styles.productList__left}>
                {
                    products.map((item, index) => {
                        if (index % 2 === 1) {
                            return (
                                <ProductItem
                                    key={item.id}
                                    category={item.category}
                                    price={item.price}
                                    productName={item.productName}
                                    star={item.star}
                                    index={(index + 1) % 4 === 0}
                                />
                            )
                        }
                    })
                }
            </View>
            <View style={styles.productList__right}>
                {
                    products.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <ProductItem
                                    key={item.id}
                                    category={item.category}
                                    price={item.price}
                                    productName={item.productName}
                                    star={item.star}
                                    index={index % 4 === 0}
                                />
                            )
                        }
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productList: {
        flexDirection: "row",
        gap: 16,
        flex: 2
    },
    productList__left: {
        flexGrow: 1,
        flexShrink: 1,
        gap: 16,
    },
    productList__right: {
        flexGrow: 1,
        gap: 16,
        flexShrink: 1
    },
})