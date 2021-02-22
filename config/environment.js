//environment.js
var environments = {
    staging: {
      FIREBASE_API_KEY: '"AIzaSyCtZTb8fb091ba1KIe8whY4-jQ2QK1jvrI"',
      FIREBASE_AUTH_DOMAIN: 'reactnativeimagerecognit-813ed.firebaseapp.com',
      FIREBASE_DATABASE_URL: 'https://console.firebase.google.com/project/reactnativeimage/storage/reactnativeimage.appspot.com/files',
      FIREBASE_PROJECT_ID: 'soy-extension-300812',
      FIREBASE_STORAGE_BUCKET: 'reactnativeimagerecognit-813ed.appspot.com',
      FIREBASE_MESSAGING_SENDER_ID: '144996793514',
      GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyAPMNiwNAhTBW2sFitOVABzk6spfmiXfRI'
    },
    production: {
      // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
  };
  
  
  function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return 'staging';
    } else if (releaseChannel === 'staging') {
      return 'staging';
    } else {
      return 'staging';
    }
  }

  function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
  }
  
  var Environment = getEnvironment(getReleaseChannel());
  export default Environment;