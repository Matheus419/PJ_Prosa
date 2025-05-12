import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VideoConferencia() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://console-api-sig.zegocloud.com/s/uikit/VRzIzm'
        }}
        style={{ flex: 1 }}
        javaScriptEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



