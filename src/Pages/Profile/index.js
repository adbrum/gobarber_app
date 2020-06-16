import React from 'react';
import { Text, View, Button } from 'react-native';

import Background from '~/components/Background';

const Profile = ({ navigation }) => {
  return (
    <>
      <Background>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Meu Perfil</Text>
          <Button
            title="Go To Details Screen"
            // onPress={() => navigation.navigate('Details')}
          />
        </View>
      </Background>
    </>
  );
};

export default Profile;
