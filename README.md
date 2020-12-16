# SVMXExternalApp
External test app for app to app communication. URL Schemes is 'svmxtest' for this app.

Steps:
1. curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
2. Open a new shell
3. nvm install v10.17.0 # Install Node JS v 8.9.1 and npm v 5.5.1
4. nvm use 10.17.0
5. npm install -g react-native-cli
6. git clone github.com/ServiceMax-Engineering/svmx-external-app.git
7. cd svmx-external-app
8. npm install
8.1. for ios ---> cd ios --> pod install --> cd ..
7. sudo launchctl remove com.mcafee.agent.macmn # Stop the virus scanner on MacBook
8. Running on Android
8.1. $ANDROID_HOME/tools/emulator -list-avds # List all emulator, say mine is 10.1_WXGA_Tablet_API_25
8.2. $ANDROID_HOME/tools/emulator @10.1_WXGA_Tablet_API_25 # Start emulator
8.3. react-native run-android # Run on the emulator
9. Running on iOS
9.1. react-native run-ios --simulator "iPad Air"# This run the iOS instance on iPad Air
9.2. Testing received
9.2.1. Open Safari within the device and enter the following on the URL field, ensuring no spaces in between.
  svmxtest://json?={"age":10,"name":"Jack","grade":5}
9.2.2. Observe the pretty printed JSON on the "receive JSON Data" tab as follows.
  {
      "age": 10,
      "name": "Jack",
      "grade": 5
  }
10. running on windows:

  cd svmx-external-app
  npm run start

  open visual studio and select executable file from windows folder and then run.

  For more info check below url.
  https://microsoft.github.io/react-native-windows/
