import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Linking,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class SVMXExternalApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selectedTab: 'home',
      receivedText: '',
    };
  }

  componentDidMount() {
    this.setState({ selectedTab: 'home' });
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({url: url});
      }
    }).catch(err => console.error('An error occurred', err));
  }

  onPressReceiveTab = () => {
    this.setState({ selectedTab: 'received' });
  }

  onReceiveText = (receivedText) => {
    this.setState({ receivedText });
  }

  handleOpenURL = (event) => {
    try {
      const questionMark = event.url.indexOf('?') + 1;
      const parameterString = event.url.substring(questionMark, event.url.length);
      var allParams = {};
      const paramsArray = parameterString.split('&');
      for (var i = 0; i < paramsArray.length; i++) {
        const indexOfEqualSign = paramsArray[i].indexOf('=');
        var paramKey = paramsArray[i].substring(0, indexOfEqualSign);
        var paramValue = paramsArray[i].substring(indexOfEqualSign+1, paramsArray[i].length);
        if (paramKey === 'data') {
          allParams[paramKey] = JSON.parse(decodeURIComponent(paramValue));
        } else {
          allParams[paramKey] = paramValue;
        }
      }
      const indent = 2;
      /* incoming data will have a key called 'data' which contains all the Json data */
      const prettyJson = JSON.stringify(allParams.data, undefined, indent);
      this.setState({
        selectedTab: 'received',
        receivedText: prettyJson
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleBtnClick = () => {
    const data = this.state.text;
    this.launchedSVMXApp(data);
  }

  _populateDefaultJSON = () => {
    const defaultJSONData = this._getJSONData();
    this.setState({ text: defaultJSONData });
  }
  /* eslint-disable no-useless-escape */
  _getJSONData() {
    return '[{\"id\":\"a0tZ0000003ZuwFIAS\",\"name\":\"\",\"title\":\"Create New Support Case\",\"desc\":\"This SFM transaction is used to create a support case to report an issue with an existing account.\",\"object\":{\"name\":\"Case\",\"label\":\"Case\"}},{\"id\":\"a0tZ0000003ZuwHIAS\",\"name\":\"\",\"title\":\"Create New RMA\",\"desc\":\"This SFM transaction is used to create an authorization to return a product (RMA).\",\"object\":{\"name\":\"SVMXC__RMA_Shipment_Order__c\",\"label\":\"Parts Order\"}},{\"id\":\"a0tZ0000003Zuw9IAC\",\"name\":\"\",\"title\":\"Create New Contact (for an existing account)\",\"desc\":\"This SFM transaction is used to create new Contact record for an existing account.\",\"object\":{\"name\":\"Contact\",\"label\":\"Contact\"}},{\"id\":\"a0tZ0000003ZuwBIAS\",\"name\":\"\",\"title\":\"Create New Location (for an existing account)\",\"desc\":\"This SFM transaction is used to create new service location or address location for an existing account.\",\"object\":{\"name\":\"SVMXC__Site__c\",\"label\":\"Location\"}},{\"id\":\"a0tZ0000003ZuwDIAS\",\"name\":\"\",\"title\":\"Create New Installed Product (for an existing account)\",\"desc\":\"This SFM transaction is used to create a new installed product record for an existing account.\",\"object\":{\"name\":\"SVMXC__Installed_Product__c\",\"label\":\"Installed Product\"}},{\"id\":\"a0tZ0000003ZuwJIAS\",\"name\":\"\",\"title\":\"Create New Shipment Order\",\"desc\":\"This SFM transaction is used to create an order for a part to be shipped to customer.\",\"object\":{\"name\":\"SVMXC__RMA_Shipment_Order__c\",\"label\":\"Parts Order\"}},{\"id\":\"a0tZ0000003ZuwpIAC\",\"name\":\"\",\"title\":\"Create Activity Master\",\"desc\":\"Create Activity Master\",\"object\":{\"name\":\"SVMXC__Activity_Master__c\",\"label\":\"Activity Master\"}},{\"id\":\"a0tZ0000003ZuwrIAC\",\"name\":\"\",\"title\":\"Create Service Price Book\",\"desc\":\"Create Service Price Book\",\"object\":{\"name\":\"SVMXC__Service_Pricebook__c\",\"label\":\"Service Pricebook\"}},{\"id\":\"a0tZ0000003ZuwtIAC\",\"name\":\"\",\"title\":\"Create Service\",\"desc\":\"Create Service\",\"object\":{\"name\":\"SVMXC__Service__c\",\"label\":\"Available Service\"}},{\"id\":\"a0tZ0000003Zux3IAC\",\"name\":\"\",\"title\":\"Create Service Plan\",\"desc\":\"Create Service Plan\",\"object\":{\"name\":\"SVMXC__Service_Plan__c\",\"label\":\"Service Plan\"}},{\"id\":\"a0tZ0000003ZuxGIAS\",\"name\":\"\",\"title\":\"Create Preventive Maintenance Plan Template\",\"desc\":\"Create Preventive Maintenance Plan\",\"object\":{\"name\":\"SVMXC__PM_Plan_Template__c\",\"label\":\"PM Plan Template\"}},{\"id\":\"a0tZ0000003ZuxHIAS\",\"name\":\"\",\"title\":\"Create Work Template\",\"desc\":\"Create Work Template\",\"object\":{\"name\":\"SVMXC__Task_Template__c\",\"label\":\"Task Template\"}},{\"id\":\"a0tZ0000003klNOIAY\",\"name\":\"\",\"title\":\"Create New Event\",\"desc\":\"This SFM transaction is used to create the ServiceMax Event record\",\"object\":{\"name\":\"SVMXC__SVMX_Event__c\",\"label\":\"ServiceMax Event\"}},{\"id\":\"a0tZ0000003knztIAA\",\"name\":\"\",\"title\":\"Create Account\",\"desc\":\"\",\"object\":{\"name\":\"Account\",\"label\":\"Account\"}},{\"id\":\"a0tZ0000003ZyJGIA0\",\"name\":\"\",\"title\":\"TestCreateCustomFld\",\"desc\":\"\",\"object\":{\"name\":\"SVMXC__Service_Order__c\",\"label\":\"Work Order\"}},{\"id\":\"a0tZ0000003knzeIAA\",\"name\":\"\",\"title\":\"Create Work Order\",\"desc\":\"\",\"object\":{\"name\":\"SVMXC__Service_Order__c\",\"label\":\"Work Order\"}},{\"id\":\"a0tZ0000004QdWAIA0\",\"name\":\"\",\"title\":\"Create custom object\",\"desc\":\"\",\"object\":{\"name\":\"Custom_Object__c\",\"label\":\"Custom Object\"}}]';
  }

  launchedSVMXApp(data) {
    const servicemaxSchemaName = 'svmx';
    const action = 'update';
    const url = `${servicemaxSchemaName}://${action}?data=${encodeURIComponent(data)}`;
    Linking.canOpenURL(url).then((supported) => {
      console.log(`URL: ${url}; + supported? ${supported}`);
        return Linking.openURL(url);
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          titleStyle={styles.welcome}
          selected={this.state.selectedTab === 'home'}
          title="Send JSON Data"
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome Buddy
                {'\n'}{'\n'}
              <Text style={styles.normaltext}>
                  Enter JSON data and click 'Send' button to send data to ServiceMax app {'\n'} or click link for
                </Text>
              <Text style={{ color: 'black', fontSize: 20, textDecorationLine: 'underline', fontWeight: 'bold' }} onPress={this._populateDefaultJSON}>
                &nbsp;Sample JSON
              </Text>
            </Text>

            <TextInput
              style={{ height: '60%', borderColor: 'gray', borderWidth: 10, fontSize: 20, margin: 20, borderRadius: 10, borderWidth: 2 }}
              multiline
              editable
              numberOfLines={4}
              borderColor="gray"
              placeholder={' Please enter json data...'}
              placeholderTextColor="#a9a9a9"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />

            <View style={styles.buttonContainer}>
              <Button
                style={styles.buttonContainer}
                onPress={this.handleBtnClick}
                title="Send"
                color="black"
              />
            </View>
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item
          titleStyle={styles.welcome}
          selected={this.state.selectedTab === 'received'}
          title="Receive JSON Data"
          onPress={this.onPressReceiveTab}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>
                Received data
            </Text>
            <TextInput
              style={{ height: '70%', borderColor: 'gray', borderWidth: 10, fontSize: 20, margin: 20, borderRadius: 10, borderWidth: 2 }}
              multiline
              editable={true}
              numberOfLines={4}
              borderColor="gray"
              placeholderTextColor="#a9a9a9"
              onChangeText={this.onReceiveText}
              value={this.state.receivedText}
            />
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
  normaltext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('SVMXExternalApp', () => SVMXExternalApp);
