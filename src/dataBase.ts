import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const IMAGENS = [
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_1_1_1.jpg?ts=1643201605450",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_1_1.jpg?ts=1643201606390",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_2_1.jpg?ts=1643201638985",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_2_3_1.jpg?ts=1643201627487",
  "https://static.zara.net/photos///2022/V/0/1/p/4661/712/800/2/w/563/4661712800_6_1_1.jpg?ts=1643274959248",
];

export const PRODUCT = {
  title: "JAQUETA COM BOTÕES METÁLICOS",
  descrition: [
    "Jaqueta de gola com lapela e manga comprida. Bolsos falsos com aba na frente. Fecho na frente com botões metálicos.",
    "PRETO | 4661/712",
  ],
  price: "R$ 479,00",
};

export const ITEM_WIDTH = width;
export const ITEM_HEIGHT = height * 0.75;

export const DOT_SIZE = 8;
export const DOT_SPACING = 8;
export const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
