import React from 'react'
import { SafeAreaView } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import WishlistListSection from '../components/sections/WishListScreen/WishlistListSection'
import EmptyWishListSection from '../components/sections/WishListScreen/EmptyWishListSection'

export default function WishlistScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Wishlist' isScreen />

            {/* <WishlistListSection /> */}
            <EmptyWishListSection />
        </SafeAreaView>
    )
}

