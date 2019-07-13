import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

const Test = props => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>This is another test component</Text>
          <Text style={styles.sectionDescription}>
            The purpose of this component is to prove that I can add new components / modules to the
            project without having to manually rebuild. Fingers crossed.
          </Text>
          <Text>{props.prop1}</Text>
        </View>
      </View>
    </SafeAreaView>
  </Fragment>
);

Test.navigationOptions = {
  title: 'Test',
};

Test.propTypes = {
  prop1: PropTypes.bool,
};

export default Test;
