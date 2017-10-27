import React from "react";
import {View,Text} from "react-native";
import { Container} from "native-base";
import MapContainer from "./MapContainer";
import { Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
function randomColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
import HeaderComponent from '../../../components/HeaderComponent'
import FooterComponent from '../../../components/FooterComponent'
import {requestPermission} from 'react-native-android-permissions';
class Home extends React.Component {
     constructor(props){
          super(props)
          this.state = {
               region: {
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
               },
               markers: [],
          }

     }
     /************************ On On Map Press *******************/
     onMapPress(e) {
          this.setState({
               markers: [
                    ...this.state.markers,
                    {
                         coordinate: e.nativeEvent.coordinate,
                         key: id++,
                         color: randomColor(),
                    },
               ],
          });
     }
     componentDidMount(){
          setTimeout(() => {
         requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
           console.log("Granted!");
           navigator.geolocation.getCurrentPosition((position) => {
               console.log(position,"==================================")
          // this.setState({region: {longitude: position.longitude, latitude: position.latitude}});
          }, (error) => {
              alert(JSON.stringify(error))
          }, {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000
          });
        // now you can set the listenner to watch the user geo location
      }, (result) => {
        console.log("Not Granted!");
        console.log(result);
      });

    }, 0);

     //this.props.getCurrentLocation();
     }
     render(){

          return (
               <Container>
                    <HeaderComponent/>
                    {
                         this.state.region.latitude &&
                         <MapContainer  region={this.state.region} onPress={(e) => this.onMapPress(e)} markers={this.state.markers}/>
                    }
                    <FooterComponent />
               </Container>
          )
     }
}
export default Home;
