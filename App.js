// Importa a barra de status do Expo
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import AppLoading from 'expo-app-loading';

// Importa a imagem do girassol
import logo from './assets/girassol.png';

// Componente principal do app
export default function App() {
  const [fontsLoaded] = useFonts({
    KaushanScript: KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
          <StatusBar style="auto" />
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar Cadastro</Text>  
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Já tenho Cadastro</Text>  
          </TouchableOpacity>

          <Text style={styles.termsText}>Termos</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Sobre nós</Text>
        <Text style={styles.footerText}>Suporte</Text>
        <Text style={styles.footerText}>Contato</Text>
        <Text style={styles.footerText}>Instruções</Text>
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
    marginTop: -70, // sobe tudo um pouco
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
    textAlign: 'center',
    flex: 1,
  },
});
