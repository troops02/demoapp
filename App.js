import {setStatusBarBackgroundColor, StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, Alert } from 'react-native' ;
import styled from 'styled-components/native';
import { Button as Btn, TextInput as Input, Card } from 'style-components';
import { Paragraph, Title } from 'react-native-paper';

const ChatBox =styled.View`
  position:absolute;
  bottom:10px;
  right:10px;
  backgroung-color:black;
  border-radius:50px;
  padding:5px;
  box-shadow: 5px 5px 8px black;
`
//medic
export default function App() {
  const [revenue,setRevenue] = useState(0);
  const [expenses,setExpenses] = useState(0);
  const [status,setStatus] = useState(false);


  function TaxCalculator () {
    const profit = revenue - expenses;
    const cit = (20/100) * revenue;
    const vat = (7.5/100) * profit;
    const total = cit + vat;

    return (
      <View styles={styles.summary}>
        <Text style={styles.summaryLine}>Your revenue :{revenue}</Text>
        <Text style={styles.summaryLine}>Your expense :{expenses}</Text>
        <Text style={styles.summaryLine}>Your profit :{profit}</Text>
        <Text style={styles.summaryLine}>CIT Tax : {cit}</Text>
        <Text style={styles.summaryLine}>VAT Tax : {vat}</Text>
        <Text style={styles.summaryLine}>Total Tax to Pay :{total}</Text>

        {/* <BtnBox>
          <Card>
            <Card.Cover source={{uri:'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <Card.Content>
              <Title>HIRE A LINCENCE AUDITOR</Title>
              <Paragraph></Paragraph>
              <Btn mode='contained' color='oldplace'>Learn more</Btn>
            </Card.Content>
          </Card>


          <Text styled={{textALign:'center',fontSize:24,marginBottom:10}}>Send report to your email</Text>
          <Input label='email address' style={{marginBottom:10}}/>
          <Btn mode='contained' color='purple'>SEND </Btn>
        </BtnBox> */}
      </View>
    )
  }

  
   return (
    <View styles={styles.container}>
      <View style={styles.logoWrapper}>
        <Image 
        source={require('./assets/images/firs.jpg')}
        style={styles.logo}
        />
        <Text style={styles.heading}>Company Tax Calculator</Text>
      </View>

      {status == true ? TaxCalculator() : null}

      <TextInput 
      style={styles.input} 
      placeholder='Total revenue'
      onChangeText={(revenueInput) => setRevenue(revenueInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='Total expense'
      onChangeText={(expenseInput) => setExpenses(expenseInput)}
      />

      
      <Button title='CALCULATE TAX' onPress={() =>{
        TaxCalculator;
        setStatus(true);
      }}/>

      
      <ChatBox onCliick={() =>{
        alert('Welcome to WhatsApp')
      }}>
        <Image style={styles.chat} source={require('./assets/images/whatsApp.png')}/>
      </ChatBox>
      <StatusBar style='auto'/>
    </View>
  )
    }


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  input:{
    paddingVertical:14,
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50,
    marginVertical:5
  },
  logoWrapper:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  summary:{
    padding:10,
    backgroundColor:'skyblue',
    borderRadius:8,
  },
  summaryLine:{
    padding:10,
    backgroundColor:'blue',
    fontSize:20,
    marginBottom:4,
  },
  heading:{
    fontSize:28,
  },
  logo:{
    width:80,
    height:80,
    borderRadius:50,
  },
  chat:{
    width:60,
    height:60,
  },
})