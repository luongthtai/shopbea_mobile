import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../types/stackParams";
import COLORS from "../../constants/colors";

type Props = {
    width?: number,
    category: string,
    productName: string,
    price: string,
    star: string,
    index?: boolean
}

export default function ProductItem({ width, category, price, productName, star, index }: Props) {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToDetail = () => navigation.navigate(`detail_product`)

    return (
        <TouchableOpacity onPress={onNavigateToDetail} style={[styles.product, { width: width ? width : '100%' }]}>
            <View style={[styles.product__image, { aspectRatio: index ? '1/1' : '3/4' }]}>
                <Image source={require('../../assets/images/product.webp')} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <View style={styles.product__image_heat}><Ionicons name="heart" size={18} color={COLORS['Support-Color-Red']} /></View>
            </View>
            <View style={styles.product__content}>
                <Text style={styles.product__content_cate}>{category}</Text>
                <Text style={styles.product__content_name}>{productName}</Text>
                <View style={styles.product__content_info}>
                    <Text style={styles.product__content_info_price}>${price}</Text>
                    <View style={styles.product__content_info_star}>
                        <Ionicons name="star" color={COLORS["Support-Color-Orange-1"]} style={{ transform: [{ translateY: 1 }] }} />
                        <Text style={{ fontSize: 12 }}>{star}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    product: {
        gap: 8
    },
    product__image: {
        position: "relative",
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
    },
    product__image_heat: {
        position: "absolute",
        backgroundColor: COLORS["White-White-1"],
        right: 0,
        marginHorizontal: 12,
        marginVertical: 12,
        padding: 5,
        borderRadius: 100
    },
    product__content: {
        gap: 4
    },
    product__content_cate: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1'],
        textTransform: "capitalize"
    },
    product__content_name: {
        color: COLORS["Black-Black-1"],
        fontWeight: 700,
        fontSize: 14
    },
    product__content_info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    product__content_info_price: {
        color: COLORS["Primary-Green-1"],
        fontWeight: "700"
    },
    product__content_info_star: {
        flexDirection: "row",
        gap: 2
    },
})