import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

const Search = ({ onChangeText, text }) => {
  return (
    <TextInput
      style={styles.searchInput}
      onChangeText={onChangeText}
      value={text}
      placeholder="Search"
    />
  );
};
const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    />
  );
};

const FlatListWithSearch = ({ data }) => {
  const [text, setText] = useState();
  const [filteredData, setfilteredData] = useState(data);

  useEffect(() => {
    if (text) {
      setfilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setfilteredData(data);
    }
  }, [text]);

  return (
    <View className={styles.container}>
      <Search onChangeText={setText} text={text} />
      <List data={filteredData} />
    </View>
  );
};

export default FlatListWithSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
