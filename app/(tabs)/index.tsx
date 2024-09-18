import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { useEffect, useState } from 'react';
import FlatListWithSearch from '@/components/FlatListWithSearch';

type FullList = {
  count: number,
  results: [],
}

export default function HomeScreen() {
  const [isLoading , setIsLoading] = useState(true);
  const [error , setError] = useState();
  const [response , setResponse] = useState<FullList>();

  useEffect(()=>{
    fetch("https://swapi.dev/api/people/").then(res=>res.json()).then(result=>{
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
    return <FlatListWithSearch data={response?.results}>

    </FlatListWithSearch>
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
    textAlign:'center',
    alignItems: 'center',
  }
});
