import {Assets, Image} from 'react-native-ui-lib';

Assets.loadAssetsGroup('icons', {});
Assets.loadAssetsGroup('Onboarding', {
  Group: require('../assets/Group.png'),
  Frame: require('../assets/Frame.png'),
  moonlogo: require('../assets/moonlogo.png'),
});
Assets.loadAssetsGroup('WelcomeSleep', {
  Bird: require('../assets/Bird.png'),
  // Welcome: require('../assets/welcomesleep')
});

export default Assets;
