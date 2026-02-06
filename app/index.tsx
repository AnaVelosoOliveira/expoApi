import { router} from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function  Inicial(){
    function nextPage() {
        router.push("/list")
    }

    return(
        <>
         <View
         style={s.wrapInicial}>
            <Text style={s.titulo}>Consumo da API dos personagens do Dragon Ball</Text>
        </View>
        <View style={s.wrapInicial}>
            <Image style={s.img} source={require('@/assets/logo.webp')} alt="Logo"/>

        </View>
        <View style={s.wrapInicial}>
            <TouchableOpacity style={s.btn} onPress={ nextPage}
            >
                <Text style={s.btnText}>Visitar Personagens</Text>

            </TouchableOpacity>
        </View>

        </>
    )
}

const s = StyleSheet.create({
    wrapInicial: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(51, 28, 28, 0.75)', 
    textShadowOffset: { width: 0, height: 2 }, 
    textShadowRadius: 5,
    color: '#000000ad',
    },
    img:{
        width: '50%',
        height: 200
    },
    btn: {
        backgroundColor: '#2168c5',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    btnText: {
        color: '#ffffff',
        fontSize: 22

    }




})