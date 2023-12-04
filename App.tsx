import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { CoffeeHeader } from "./components/CoffeeHeader/CoffeeHeader";
import { CoffeeItem } from "./components/CoffeeItem";
import { SeparatorItem } from "./components/SeparatorItem/SeparatorItem";
import { Coffee, coffeeList } from "./data/coffeeList";

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }
  return (
    <SafeAreaView style={styles.container}>
          <FlatList 
            keyExtractor={item => item.name}
            data={coffeeList}
            renderItem={({item}) => <CoffeeItem {...item}/>}
          />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
