import GlobalAPIs from "@/services/GlobalAPIs";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryListData = async () => {
    try {
      const results = await GlobalAPIs.GetCategoryList();

      if (results?.data?.data) {
        setCategoryList(results?.data?.data);
      } else {
        setCategoryList([]);
      }
    } catch (error) {
      setCategoryList([]);
      console.log("error in getCategoryData ", error);
    }
  };
  useEffect(() => {
    getCategoryListData();
  }, []);
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.heading}>Category List</Text>

      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item, index }: any) => (
          <View style={styles.categoryContainer}>
            <Image
              source={{ uri: item?.image?.url }}
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ marginTop: 3, fontFamily: "outfit" }}>
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  categoryContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
});
