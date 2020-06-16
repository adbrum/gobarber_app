import React from 'react';
import { Text, View, Button } from 'react-native';
import Background from '~/components/Background';

const Dashboard = ({ navigation }) => {
  return (
    <>
      <Background>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Agendamento</Text>
          <Button
            title="Go To Details Screen"
            // onPress={() => navigation.navigate('Details')}
          />
        </View>
      </Background>
    </>
  );
};

export default Dashboard;