import React, {useState} from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import { Container,
Form,
Button,
Item,
Input,
H1, 
} from "native-base";
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';


const Add = ({navigation}) =>{
  const [name, setName] = useState('')
  const [passWord, setPassWord] = useState('')

  const addToDoList = async() =>{
    try {
      if (!name || !passWord) {
        return alert('Please fill Two fields')
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name: name, 
        passWord: passWord,
      }
      const storedValue = await AsyncStorage.getItem('@season_list')
      const prevList= await JSON.parse(storedValue)
      if(!prevList){
         navigation.navigate('Chat')
      } else {
        alert('Please enter Correct Credentials')
      }
    
    } catch (error) {
      console.log(error)
    }

  }

    return(
        <Container style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow:1}}>
            <H1 style={styles.heading}>Add to Watch List</H1>
            <Form>
              <Item rounded style={styles.formItem}>
                <Input 
                placeholder="Season name"
                style={{color:"#eee"}}
                value={name}
                onChangeText={(text)=>setName(text)}
                />
              </Item>
              <Item rounded style={styles.formItem}>
                <Input 
                placeholder="Total No Of Seasons"
                style={{color:"#eee"}}
				secureTextEntry={true}
                value={passWord}
                onChangeText={(text)=> setpassWord(text)}
                />
                
              </Item>
              <Button rounded block 
              onPress={addToDoList}>
                  <Text style={{color:"#eee"}}>Login</Text>
                </Button>
				<Button rounded block 
              onPress={navigation.navigate('SignUp')}>
                  <Text style={{color:"#eee"}}>SignUP</Text>
                </Button>
            </Form>

          </ScrollView>
        
        </Container>
    )
}

export default Add;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });