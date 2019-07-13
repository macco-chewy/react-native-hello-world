import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableHighlight, View, Text, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { testFetch } from 'Actions/testFetch';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
  },
  buttonText: {
    color: 'white',
  },
});

const Fetch = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello World - Fetch</Text>
    <TouchableHighlight style={styles.button} onPress={() => props.testFetch()}>
      <Text style={styles.buttonText}>Load Data</Text>
    </TouchableHighlight>

    <View>
      {props.isFetching && <Text>Loading</Text>}
      {props.data
        && props.data.length
        && props.data.map(person => (
          <View key={person.id}>
            <Text>Name: {person.name}</Text>
            <Text>Age: {person.age}</Text>
          </View>
        ))}
    </View>
  </View>
);

Fetch.navigationOptions = {
  title: 'Fetch',
};

Fetch.propTypes = {
  data: PropTypes.any,
  isFetching: PropTypes.bool,
  testFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.testFetch,
  isFetching: state.global.fetch.active,
});

const actions = {
  testFetch,
};

export default connect(
  mapStateToProps,
  actions,
)(Fetch);
