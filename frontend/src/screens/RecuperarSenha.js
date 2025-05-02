// Importa a barra de status do Expo
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import AppLoading from 'expo-app-loading';

// Importa a imagem do girassol
import logo from '../../../assets/girassol.png';

// Componente principal do app
export default function RecuperarSenha({navigation}) {
  const [fontsLoaded] = useFonts({
    KaushanScript: KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [email, setEmail] = useState('');

  const validacao = () => {
    console.log('Email:', email);
    // Usar handeLogin para validação banco
    if (!email || !email.includes('@')) {
        alert("Erro: Você não preencheu todos os campos!")
    }
    else {

    
    alert(`Enviamos um e-mail para: ${email}. Verifique sua caixa de e-mail.`)
        }
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
                        <Text style={styles.titleProsa}>RECUPERAR SENHA</Text>
                    </View>
                    <StatusBar style="auto" />
                </View>

                <View style={styles.actionsContainer}>
                    <Text style={styles.titleDescripiton}>Digite um E-mail para recuperar seu acesso!</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none">
                    </TextInput>
                    <TouchableOpacity style={styles.button} onPress={validacao}>
                        <Text style={styles.buttonText}>Enviar</Text>  
                    </TouchableOpacity>
                </View>
            </View>
    </>
  );
}

// Estilos da interface
const styles = StyleSheet.create({

    titleDescripiton: {
        color: "#B48C00",
        width: 200,
        textAlign: "center",
        marginBottom: 20
    },

    recoverKey: {
        padding: 10,
    },

    recoverKeyText: {
        color: "#E6BE5F",
        
    },

    topBackground: {
        position: 'absolute',
        top: 0,
        height: '50%',
        width: '100%',
        zIndex: -1,
      },

  input: {
    width: 250,
    borderRadius: 10,
    backgroundColor: "#A9A9A9",
    color: "#fff",
    padding: 10,
    marginBottom: 10,
    height: 50
  },

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
    backgroundColor: "#FAF5E6"// sobe tudo um pouco
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center', 
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  titleProsa: {
    fontSize: 25,
    color: '#000',
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
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
  },

  buttonText: {
    color: '#D6A500',
    fontSize: 16,
  },
});
