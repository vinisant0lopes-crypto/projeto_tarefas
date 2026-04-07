import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [tarefas,setTarefas] = useState([
    {id:"1",titulo:"aprender Git"},
    {id:"2",titulo:"aprender fazer commit"},
    {id:"3",titulo:"aprender utilizar GitHub"},
    {id:"4",titulo:"Criar um novo commit"},
  ])

  const [novaTarefa,setnovaTarefa] = useState('')

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
   <TextInput style={styles.input}
   placeholder="Digite uma tarefa"
   textAlign='center'></TextInput>

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
  },
  input:{
    backgroundColor:"#ffffff",
    borderWidth: 1,
    width:"90%",
    margin:15,
    borderColor:"#ccc",
    padding:10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign:'center',
  }


});

