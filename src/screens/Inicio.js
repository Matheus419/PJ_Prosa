// Importa a barra de status do Expo
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import AppLoading from 'expo-app-loading';

// Importa a imagem do girassol
import logo from '../../assets/girassol.png';

// Componente principal do app
export default function Home({navigation}) {
  const [fontsLoaded] = useFonts({
    KaushanScript: KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const openSobreNos = () => {
    Linking.openURL('https://gamma.app/docs/Prosa-Vida-qa3t0jg5666d489?mode=doc')
  }

  return (
    <>
        <LinearGradient 
            colors={['#FEF5E6', '#FFFFFF']}
            style={styles.topBackground}
        />
        <View style={styles.mainContent}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.titleRow}>
                    <Text style={styles.titleProsa}>PROSA</Text>
                    <Text style={styles.titleVida}> VIDA</Text>
                </View>
                <StatusBar style="auto"/>
            </View>

            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('CriarCadastroVoluntario')}>
                    <Text style={styles.buttonText}>Criar Cadastro Voluntário</Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Acesso Administrativo</Text>  
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('LoginVoluntario')}>
                    <Text style={styles.buttonText}>Acesso Voluntário</Text>  
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
          onPress={openSobreNos}>
            <Text style={styles.footerText}>Sobre nós</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Contato</Text>
          </TouchableOpacity>
        </View>
    </>
  );
}

// Estilos da interface
const styles = StyleSheet.create({
    topBackground: {
        position: 'absolute',
        top: 0,
        height: '50%',
        width: '100%',
        zIndex: -1,
      },

  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: -70,
    backgroundColor: "#FAF5E6" // sobe tudo um pouco
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, 
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  titleProsa: {
    fontSize: 32,
    color: '#000',
    fontFamily: 'KaushanScript',
  },

  titleVida: {
    fontSize: 32,
    color: '#D6A500',
    fontFamily: 'KaushanScript',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  actionsContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  button: {
    borderWidth: 1,
    borderColor: '#D6A500',
    padding: 15,
    marginHorizontal: 30,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
  },

  buttonText: {
    color: '#D6A500',
    fontSize: 16,
  },

  termsText: {
    textAlign: 'center',
    color: '#D6A500',
    textDecorationLine: 'underline',
    marginTop: 15,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#A57500',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  footerText: {
    color: '#fff',
    fontSize: 13,
  },
});
