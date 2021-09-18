import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  View,
  Text,
  Colors,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native-ui-lib';

const width = Dimensions.get('window').width;
const Onboarding = () => {
  return (
    <View flex backgroundColor="#FFF">
      <View flex>
        <Image
          assetGroup="Onboarding"
          assetName="Frame"
          style={{
            alignSelf: 'center',
            position: 'absolute',
            width: width,
            // height: (width / 423) *400,
            resizeMode: 'stretch',
          }}
        />
        <Image
          assetGroup="Onboarding"
          assetName="moonlogo"
          style={{alignSelf: 'center', marginTop: 30}}
        />
        <Image
          assetGroup="Onboarding"
          assetName="Group"
          style={{alignSelf: 'center', marginTop: 55}}
        />
      </View>
      <View flex style={{alignItems: 'center'}}>
        <Text b30 textColor marginT-110>
          We are what we do
        </Text>
        <Text r14 textColor2 marginT-12>
          Thousand of people are using silent moon
        </Text>
        <Text r14 textColor2>
          for small meditation
        </Text>
        {/* <Button style={{width: 340, height: 57}} marginT-35>
          <Text m14 textColor8>
            SIGN UP
          </Text>
        </Button> */}
        <View row marginT-12>
          <Text m14 textColor2>
            ALREADY HAVE AN ACCOUNT?{'  '}
          </Text>
          {/* <TouchableOpacity>
            <Text m14 primary>
              LOGIN
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
