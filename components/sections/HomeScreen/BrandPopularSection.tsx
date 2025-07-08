import { ScrollView, StyleSheet, View } from "react-native";
import TitleSection from "../../elements/TitleSection";
import BrandItem from "../../elements/BrandItem";

export default function BrandPopularSection() {
    return (
        <View style={styles.container}>
            <TitleSection title="Popular Brands" />

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.brands}>
                    <BrandItem id="1" name="zara" />
                    <BrandItem id="2" name="zara" />
                    <BrandItem id="3" name="zara" />
                    <BrandItem id="4" name="zara" />
                    <BrandItem id="5" name="zara" />
                    <BrandItem id="6" name="zara" />
                    <BrandItem id="7" name="zara" />
                    <BrandItem id="8" name="zara" />
                    <BrandItem id="9" name="zara" />
                    <BrandItem id="10" name="zara" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 12
    },
    brands: {
        flexDirection: "row",
        gap: 16,
        flexWrap: "nowrap",
    }
})
