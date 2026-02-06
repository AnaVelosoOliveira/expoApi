import {Text, View, StyleSheet,FlatList, TextInput, } from "react-native"
import { useEffect, useState,  } from "react";
import {Image} from "expo-image"

export default function List()  {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchCharacters = async () => {
        try{
            const response = await fetch("https://dragonball-api.com/api/characters?page="+page);
                const data = await response.json();
                setPersonagens(data.items);
        }catch (error ){
            console.error(error)
        } finally {
           setLoading(false);
        }
    }

        useEffect(() => {
            if(page > 0 && page < 7){
            fetchCharacters();
            }
        }, [page]);

    return(
        <View style={s.screen}>
        
        
            <Text style={s.titulo}>Lista de personagens</Text>
            <TextInput keyboardType="numeric" value={page.toString()} onChangeText={(value) => setPage(+value)} placeholder="Digite o número" style={s.input}/>
        
            {
                loading ?
                <View style={s.wrapImage}>
                    <Image source={require("@/assets/loading.gif")} style={s.loading}/>
                </View>
                :
                <FlatList
                 data={personagens}
            renderItem={({item}:any) => {
                return (
                    
                    <View style={s.personagem}>
                        <Text>{item.name}</Text>
                        <View style={s.imageContainer}>
                            <Image source={{uri: item.image}} contentFit="cover" style={s.image}></Image>
                        </View>
                        </View>

                )
            }
        } 
        />
   
            }
        </View>
    )
}

const s = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",


    },
    titulo:{
        fontSize: 32,
        alignSelf: "center",
        textAlign: "center"
    },
    wrapImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loading:{
        width: 130,
        height: 130
    },
    imageContainer:{
        width: 350,
        height: 1000
    },
    image:{
        flex: 1,
        width: "100%"
        
    },
    personagem:{
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        gap: 10
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
    }
})
