import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {View, Text, Image, Colors} from 'react-native-ui-lib';
import Slider from '@react-native-community/slider';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';

type musicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'music'
>;

type Props = {
  navigation: musicScreenNavigationProp;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const music = ({navigation}: Props) => {
  return (
    <View flex>
      <Image
        assetGroup="WelcomeSleep"
        assetName="bg"
        style={{
          alignSelf: 'center',
          position: 'absolute',
          resizeMode: 'stretch',
          width: width,
          height: height,
        }}
      />
      <View flex row marginT-35>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            backgroundColor: Colors.bgColor1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 55 / 2,
            marginLeft: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName="x" />
        </TouchableOpacity>

        <View flex row right>
          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: Colors.textColor6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55 / 2,
              marginRight: 10,
            }}>
            <Image assetGroup="icons" assetName="Heart" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: Colors.textColor6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55 / 2,
              marginRight: 10,
            }}>
            <Image assetGroup="icons" assetName="Down" />
          </TouchableOpacity>
        </View>
      </View>

      <View flex marginL-15 marginT-30>
        <View marginT-40 center>
          <Text b34 textColor4 marginB-10>
            Night Island
          </Text>
          <Text m14 textColor7>
            SLEEP MUSIC
          </Text>
        </View>
      </View>

      <View flex>
        <View row flex style={{justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image assetGroup="playicons" assetName="back15" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: Colors.textColor6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55 / 2,
              marginRight: 70,
              marginLeft: 70,
            }}>
            <Image assetGroup="playicons" assetName="pause" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image assetGroup="playicons" assetName="next15" />
          </TouchableOpacity>
        </View>

        {/* slider */}
        <View flex>
          <Slider
            style={{
              width: 340,
              height: 40,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#8E97FD"
            minimumTrackTintColor="#E6E7F2"
            maximumTrackTintColor="#3F414E"
            onSlidingComplete={() => {}}
          />
          <View
            row
            style={{
              width: 340,
              justifyContent: 'space-between',
              marginLeft: 30,
            }}>
            <Text textColor4>1:00</Text>
            <Text textColor4>4:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default music;

const styles = StyleSheet.create({});
