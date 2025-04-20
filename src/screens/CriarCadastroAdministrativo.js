// Importa a barra de status do Expo
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import AppLoading from 'expo-app-loading';

// Importa a imagem do girassol
import logo from '../../assets/girassol.png';

// Componente principal do app
export default function CriarCadastroadm({navigation}) {
  const [fontsLoaded] = useFonts({
    KaushanScript: KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  /* Variaveis */
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  /* Verificação */
  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Nome:', nome);
    // Usar handeLogin para validação banco
    if (!nome || !senha || !email || !confSenha || !email.includes('@')){
        alert("Erro: Preencha todos os campos!")
    }
    else {
        if(senha == confSenha) {
            alert(`Usuário ${nome} criado com sucesso!`)
            navigation.navigate('PgLoginIniciado')
        }
        else {
            alert("Erro: As senhas não são iguais!")
        }
    }
    

  };

  return (
    <>
        <LinearGradient 
        colors={['#FEF5E6', '#FFFFFF']}
        style={styles.topBackground}
        />
            <View style={styles.mainContent}>
                <View style={styles.container}>
                    <Image source={logo} style={styles.logo} />
                    <StatusBar style="auto" />
                </View>
                <Text style={styles.titleProsa}>Crie seu cadastro</Text>
                <View style={styles.containerCreate}>
                    {/* Imput de Nome */}
                    <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    value={nome}
                    onChangeText={setNome}
                    keyboardType="text"
                    autoCapitalize="none">
                    </TextInput>
                    {/* Imput se E-mail */}
                    <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none">
                    </TextInput>
                    {/* Imput senha */}
                    <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry>
                    </TextInput>
                    {/* Imput confirmar senha */}
                    <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    value={confSenha}
                    onChangeText={setConfSenha}
                    secureTextEntry>
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Acessar</Text>  
                    </TouchableOpacity>
                </View>
            </View>
    </>
  );
}

// Estilos da interface
const styles = StyleSheet.create({

    containerCreate: {
        width: 500,
        alignItems: "center"
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

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  titleProsa: {
    fontSize: 32,
    color: '#000',
    fontFamily: 'KaushanScript',
    marginBottom: 30,
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
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
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
