import { StyleSheet, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <>
    <Text style={s.title} >Pagina 1</Text>
    </>
  );
}

const s = StyleSheet.create({
  title:{
    fontSize: 32
  }

});
