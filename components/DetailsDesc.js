import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";


const DetailsDesc = ({ data }) => {

  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle                     // Titulo de la NFT
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice                      // Precio de la NFT            
          price={data.price} />   
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text                           // Label de descripción de la NFT
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View                           // Descripción de la NFT  
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {              // Si no esta readMore, se muestra la descripción completa
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));  // Si esta readMore, se muestra la descripción corta
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>

    </>
  )
}

export default DetailsDesc