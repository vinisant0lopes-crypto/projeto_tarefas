import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

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

   <TouchableOpacity style={styles.btnAdicionar}>
    <Text>Adicionar Tarefa</Text>
   </TouchableOpacity>
    </View>
  );
}

// Estilos utilizando StyleSheet.create para melhor performance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636262',
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
    borderRadius:5,
  },
  btnAdicionar:{
    width: "90%",
    backgroundColor: "#ff0000",
    margin: 15,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  }


});

