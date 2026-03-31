import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const tarefas =[
    {id:"1",titulo:"aprender Git"},
    {id:"2",titulo:"aprender fazer commit"},
    {id:"3",titulo:"aprender utilizar GitHub"},
    {id:"3",titulo:"Criar um novo commit"},

  ]
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>lista de tarefas</Text>
      
 

   <FlatList
   data={tarefas}
   keyExtractor={(item)=>item.id}
   renderItem={({item})=>(
    <text style={styles.items}>{item.titulo}</text>

   )}

   
   
   />
    </View>
  );
}

// Estilos utilizando StyleSheet.create para melhor performance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d71111',
    alignItems: 'center',
    padding: 20,
  },
  titulo:{
    fontSize:48,
    fontWeight:'bold',
    color:'black',
    marginBottom:20,
  },
  items:{
    color:'black',
    padding:15,
    marginTop:10,
    backgroundColor:'#e82a2a',
    borderRadius:5
  }


});

