import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image                                        // Imagen de la NFT
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton                                 // Boton de página atras
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton                                 // Boton de favoritos en la esquina superior derecha
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);


const Details = ({ route, navigation }) => {

  const { data } = route.params; // Cuando se pulsa en el boton de comprar de la NFTCard, se le pasa el objeto data de la NFTCard

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar                 // Barra de status
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View                             // Contenedor del boton de compra, abajo de la pantalla
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList 
        data={ data.bids }                                        // Lista de personas que estan pujando por el nft     
        renderItem={({ item }) => <DetailsBid bid={ item } />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
          backgroundColor: COLORS.white,
        }}
        ListHeaderComponent={() => (
          <React.Fragment  
          >
            <DetailsHeader  // Imagen de la nft con boton de pag atras y favoritos
              data={ data } 
              navigation={ navigation } />
            
            <SubInfo // Subinfo de la NFT: People y endDate 
            /> 

            <View style={{ padding: SIZES.font }}>
            
              <DetailsDesc data={ data } />

              { data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details