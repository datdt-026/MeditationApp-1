import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Text, Colors, Image, TouchableOpacity} from 'react-native-ui-lib';

const width = Dimensions.get('window').width;
const Onboarding = () => {
  return (
    <View flex backgroundColor={Colors.bgColor2}>
      <View flex center marginT-30>
        <Text b28 marginB-15 textColor4>
          Welcome to Sleep
        </Text>
        <View center>
          <Text r14 textColor3 marginB-8>
            Explore the new king of sleep. It uses sound
          </Text>
          <Text r14 textColor3 marginB-8>
            and vesualization to create perfect conditions
          </Text>
          <Text r14 textColor3 marginB-8>
            for refreshing sleep.
          </Text>
        </View>
      </View>
      <View flex center>
        {/* <Image
          assetGroup="Onboarding"
          assetName="Frame"
          style={{
            alignSelf: 'center',
            position: 'absolute',
            width: width,
            height: (width / 423) *400,
            resizeMode: 'stretch',
          }}
        /> */}
        <Image
          assetGroup="WelcomeSleep"
          assetName="Bird"
          style={{alignSelf: 'center', marginTop: 55, position: 'absolute'}}
        />
      </View>

      <View flex center style={{alignItems: 'center'}}>
        <TouchableOpacity
          backgroundColor={Colors.primary}
          style={{width: 340, height: 57}}
          center
          br60>
          <Text m14 textColor8>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
