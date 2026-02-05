import { router } from "expo-router"
import {Text, StyleSheet, View, TouchableOpacity  } from "react-native";


export default function Home() {

    const go = () => {
        router.push('/(tabs)')
    }
    return(

    <View>
        <Text style={s.title}>Inicial</Text>
        <TouchableOpacity onPress={go}>
            <Text>Ir para as Tabs</Text>
        </TouchableOpacity>
    </View>


)

}

const s = StyleSheet.create({
    title:{
        color: '#090909'
    }
})