import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const { height } = Dimensions.get("window");

import { ITEM_HEIGHT, PRODUCT } from "../dataBase";

const BottomSheetComponent: React.FC = () => {
  return (
    <BottomSheet index={0} snapPoints={[height - ITEM_HEIGHT, height * 0.9]}>
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 16,
            textTransform: "uppercase",
          }}
        >
          {PRODUCT.title}
        </Text>
        <Text style={{ fontSize: 16 }}>{PRODUCT.price}</Text>
        <View style={{ marginVertical: 20 }}>
          {PRODUCT.descrition.map((item, index) => {
            return (
              <Text style={{ lineHeight: 22, marginBottom: 10 }} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={{ marginVertical: 20 }}>
          {PRODUCT.descrition.map((item, index) => {
            return (
              <Text style={{ lineHeight: 22, marginBottom: 10 }} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={{ marginVertical: 20 }}>
          {PRODUCT.descrition.map((item, index) => {
            return (
              <Text style={{ lineHeight: 22, marginBottom: 10 }} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
  },
});

export default BottomSheetComponent;
