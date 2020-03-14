import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Searchbar, DataTable } from "react-native-paper";
import ListItem from "./ListItem";

const compareCount = (a, b) => b.count - a.count;
const compareCountDesc = (a, b) => a.count - b.count;
function compareName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
function compareNameDesc(a, b) {
  if (a.name < b.name) return 1;
  if (a.name > b.name) return -1;
  return 0;
}

export default function List({ singular, type, plural, items }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("count");
  const [ascending, setAscending] = useState(true);
  function sortByName() {
    if (sort === "name") {
      setAscending(!ascending);
    } else {
      setSort("name");
      setAscending(true);
    }
  }
  function sortByCount() {
    if (sort === "count") {
      setAscending(!ascending);
    } else {
      setSort("count");
      setAscending(true);
    }
  }

  const query = search.trim().toUpperCase();
  let listItems = items;
  listItems = listItems.filter(({ count }) => count > 0);
  if (query.length > 0) {
    listItems = items.filter(({ name }) => name.toUpperCase().includes(query));
  }
  if (listItems.length) {
    const sortComparison =
      sort === "name"
        ? ascending
          ? compareName
          : compareNameDesc
        : ascending
        ? compareCount
        : compareCountDesc;
    listItems = listItems.sort(sortComparison);
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
        style={styles.search}
      />
      <DataTable style={styles.container}>
        <DataTable.Header>
          <DataTable.Title
            sortDirection={
              sort === "name" ? (ascending ? "ascending" : "descending") : null
            }
            onPress={sortByName}
          >
            {type}
          </DataTable.Title>
          <DataTable.Title
            sortDirection={
              sort === "count" ? (ascending ? "ascending" : "descending") : null
            }
            onPress={sortByCount}
            numeric
          >
            Moments
          </DataTable.Title>
        </DataTable.Header>
        {listItems.length ? (
          <ScrollView style={styles.container}>
            {listItems.map(({ id, name, count }) => (
              <ListItem key={id} name={name} count={count} type={singular} />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.noresults}>
            No {plural} found for that search.
          </Text>
        )}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    elevation: 0,
    backgroundColor: "#f8f8f8",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    borderRadius: 0
  },
  noresults: {
    padding: 12,
    textAlign: "center"
  }
});
