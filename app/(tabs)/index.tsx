import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [isLoading , setIsLoading] = useState(true);
  const [error , setError] = useState();
  const [response , setResponse] = useState();

  useEffect(()=>{
    fetch("https://swapi.dev/api/people").then(res=>res.json()).then(result=>{
      setIsLoading(false);
      setResponse(result);
    },(error) =>{
      setIsLoading(false);
      setError(error)
    })

  },[])

  const getContent = ()=>{
    if(isLoading){
      return <ActivityIndicator size='large' />

    }
    if(error){
      return <Text>ERROR: {error}</Text>
    }
    console.log(response);
    return <Text>API Called</Text>
  }
  return (
    <View style={styles.container}>
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    justifyContent:'center',
    textAlign:'center'
  }
});
