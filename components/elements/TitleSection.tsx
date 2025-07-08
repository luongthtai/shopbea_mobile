import { StyleSheet, Text } from "react-native";

type Props = {
    title: string
}

export default function TitleSection({ title }: Props) {
    return (
        <Text style={style.title}>{title}</Text>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 700,
        textTransform: "capitalize"
    }
})
