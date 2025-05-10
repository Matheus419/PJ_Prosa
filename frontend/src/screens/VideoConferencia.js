import React, { useEffect } from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

export default function VideoConferencia() {
  useEffect(() => {
    Linking.openURL('https://meet.jit.si/ProsaCam2025#config.disableDeepLinking=true');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Abrindo a videochamada no navegador...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
