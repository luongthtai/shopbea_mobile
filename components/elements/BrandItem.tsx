import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../types/stackParams";
import COLORS from "../../constants/colors";

type Props = {
    id: string,
    image?: string,
    name: string
}

export default function BrandItem({ id, image, name }: Props) {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigate = () => navigation.navigate('detail_category')

    return (
        <TouchableOpacity onPress={onNavigate} style={styles.container}>
            <View style={styles.wrapImage}>
                <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.image} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        alignItems: "center"
    },
    wrapImage: {
        width: 64,
        aspectRatio: "1/1",
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: COLORS["Light-Grey-L-Grey-1"]
    },
    image: {
        width: "100%",
        height: "100%",
    },
    name: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: "capitalize"
    }
})
