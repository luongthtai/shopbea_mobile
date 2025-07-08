import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Octicons, Feather, Ionicons, EvilIcons } from '@expo/vector-icons';

export const Icons = {
    Octicons,
    Feather,
    Ionicons,
    EvilIcons
}


export interface IconProps {
    type: any;
    name: string;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const Icon = ({ type, name, color, size = 24, style }: IconProps) => {
    const fontSize = 24;
    const Tag = type

    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export default Icon