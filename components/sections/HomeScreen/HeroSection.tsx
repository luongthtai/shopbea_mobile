import { StyleSheet, View } from "react-native";
import HeroImageItem from "../../elements/HeroImageItem";

export default function HeroSection() {
    return (
        <View style={styles.container}>
            <HeroImageItem />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 6,
    },
    images: {
        height: 209,
    },
})
