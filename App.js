import {
  createStackNavigator,
} from 'react-navigation';
import AppNavigator from './src/navigation'
import store from './src/store'
import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import {View,Text} from 'react-native'


const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


export default Root