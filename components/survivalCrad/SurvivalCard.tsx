import { View, Text, Pressable, Image} from 'react-native'
import React from 'react'
import { styles } from './styles'


interface SurvivalCardProps {
    mensaje: string;
    alPresionar: (objetivo: string) => void;
}

const SurvivalCard = ({ mensaje, alPresionar }: SurvivalCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{mensaje}</Text>
            <Pressable onPress={() => alPresionar('Puerta Principal')}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOpcJGRYDf4CAmlc3utKLOBBfCzFsjXOOWQ&s'}} style={styles.door} />
            </Pressable>
        </View>
    )
}

export default SurvivalCard