import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  Button,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const IMAGENS = [
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_1_1_1.jpg?ts=1643201605450",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_1_1.jpg?ts=1643201606390",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_2_1.jpg?ts=1643201638985",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_3_1.jpg?ts=1643201627487",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_6_1_1.jpg?ts=1643274959248",
];

const PRODUCT = {
  title: "JAQUETA COM BOTÕES METÁLICOS",
  descrition: [
    "Jaqueta de gola com lapela e manga comprida. Bolsos falsos com aba na frente. Fecho na frente com botões metálicos.",
    "PRETO | 4661/712",
  ],
  price: "R$ 479,00",
};

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const ProductScreen: React.FC = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />

      <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
        <Animated.FlatList
          data={IMAGENS}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            );
          }}
        />

        <View style={styles.pagination}>
          {IMAGENS.map((_, index) => {
            return <View key={index} style={styles.dot}></View>;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={[height - ITEM_HEIGHT, height * 0.9]}
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    top: ITEM_HEIGHT / 2,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: "#333",
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: "#333",
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
  },
});

export default ProductScreen;
