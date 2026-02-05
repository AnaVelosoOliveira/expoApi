import { StyleSheet, Text } from 'react-native';

export default function TabListScreen() {
  return (
    <>
    <Text style={s.title} >Pagina List</Text>
    </>
  );
}

const s = StyleSheet.create({
  title:{
    fontSize: 32
  }

});