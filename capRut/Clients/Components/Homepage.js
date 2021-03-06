import React, { Component } from 'react';
import { Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { render } from 'react-dom';
import { firestore, auth } from '../../fire';

import styles from './Style';
import { AuthSession } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class Homepage extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerRight: <Button title="Sign Out" onPress={() => navigate('Home')} />,
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const handlePress = () => false;
    return (
     <ScrollView style={styles.home}>
      <View style={styles.container1}>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="My Profile"
            onPress={() => navigate('Profile')}
          />
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="pill" size={50} color="white" />
          <Button
            style={styles.button}
            color="white"
            title="Medications"
            onPress={() =>
              navigate('Medications', {
                userId: auth.currentUser.uid,
              })
            }
          />
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="format-list-checks"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Immunizations"
            onPress={() => navigate('Immunizations')}
          />
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="file-search-outline"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Files"
            onPress={() => navigate('Files')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="camera" size={50} color="white" />
          <Button
            style={styles.button}
            color="white"
            title="Upload"
            onPress={() => navigate('Upload')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="alert-octagon-outline"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Allergies"
            onPress={() => navigate('Allergies')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="doctor" size={50} color="white" />
          <Button
            style={styles.button}
            color="white"
            title="Doctor"
            onPress={() => navigate('Doctors')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Insurance"
            onPress={() => navigate('Insurance')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={50}
            color="white"
          />
          <Button
            style={styles.button}
            color="white"
            title="Calendar"
            onPress={() => navigate('Calendar')}
          />
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="clock-alert" size={50} color="white" />
          <Button
            style={styles.button}
            color="white"
            title="Reminders"
            onPress={() => navigate('Reminders')}
          />
        </View>
        
      </View>
      <TouchableOpacity onPress={() => navigate('Emergency')}>
      <Text style={styles.buttonsss}>Emergency</Text>
    </TouchableOpacity>
    </ScrollView>
    );
  }
}
