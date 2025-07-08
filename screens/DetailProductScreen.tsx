import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import HeaderDetailProduct from '../components/layouts/HeaderDetailProduct'
import GlobalStyles from '../assets/css/GlobalStyles';
import SliderProduct from '../components/elements/SliderProduct';
import InforProductSection from '../components/sections/DetailProduct/InforProductSection';
import SizeProductSection from '../components/sections/DetailProduct/SizeProductSection';
import DescriptionSection from '../components/sections/DetailProduct/DescriptionSection';
import CategoryVisitSection from '../components/sections/DetailProduct/CategoryVisitSection';
import MoreProductSection from '../components/sections/DetailProduct/MoreProductSection';
import ProductReviewsSection from '../components/sections/DetailProduct/ProductReviewsSection';
import ProductActionBar from '../components/sections/DetailProduct/ProductActionBar';
import COLORS from '../constants/colors';

export default function DetailProductScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <HeaderDetailProduct />

            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: COLORS["Light-Grey-L-Grey-1"] }}>
                <SliderProduct />

                <View style={styles.container}>
                    <View style={styles.contents}>
                        <InforProductSection />
                        <SizeProductSection />
                        <DescriptionSection />
                        <CategoryVisitSection />
                    </View>

                    <MoreProductSection />
                    <ProductReviewsSection />
                </View>
            </ScrollView>

            <ProductActionBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    contents: {
        gap: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS["White-White-1"],
    }
})
