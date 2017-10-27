import React from "react";
import { View,Text } from "native-base";
import MapView from "react-native-maps";
import styles from "./MapContainerStyles.js";
import SearchBox from "../SearchBox";
export const MapContainer = ({region,onPress,markers}) => {
     return (
          <View style={styles.container}>
          <Text>
           hello mangal
          </Text>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            onPress = {onPress}
          >
          {
          markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
           ))
      }

          </MapView>

          </View>
)
}
export default MapContainer;
