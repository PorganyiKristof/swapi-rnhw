import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Search = ({ onChangeText, text }) => {
  return (
    <TextInput
      style={styles.searchInput}
      onChangeText={onChangeText}
      value={text}
      placeholder="Search"
      placeholderTextColor="#888"
    />
  );
};

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const FirstItemHeadSection = ({ headElement }) => {
  if (headElement[0]?.name) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Head Item: {headElement[0].name}</Text>
        <Text style={styles.headerSubText}>
          Birth Year: {headElement[0].birth_year} {"\n"}
          Height: {headElement[0].height} {"\n"}
          Eye Color: {headElement[0].eye_color}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>None</Text>
    </View>
  );
};

const FlatListWithSearch = ({ data = [] }) => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    let updatedData = [...data];

    if (text) {
      updatedData = updatedData.filter((item) =>
        item.name?.toLowerCase().includes(text.toLowerCase())
      );
    }

    updatedData.sort((a, b) => a.name?.localeCompare(b.name));

    setFilteredData(updatedData);
  }, [text, data]);

  const headElement = filteredData?.slice(0, 1);

  return (
    <View style={styles.container}>
      <Search onChangeText={setText} text={text} />
      <FirstItemHeadSection headElement={headElement} />
      <List data={filteredData} />
    </View>
  );
};

export default FlatListWithSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    width: "100%",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 4,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
