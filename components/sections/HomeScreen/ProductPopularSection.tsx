import { StyleSheet, View } from "react-native";
import TitleSection from "../../elements/TitleSection";
import ProductsSection from "../../shared/ProductsSection";

export default function ProductPopularSection() {
    return (
        <View style={styles.container}>
            <TitleSection title="Popular Product" />
            <ProductsSection />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 12,
        flex: 1
    }
})
