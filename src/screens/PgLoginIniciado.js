import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import AppLoading from 'expo-app-loading';

// Importa a imagem do girassol
import logo from '../../assets/girassol.png';

export default function PgLoginIniciado({navigation}) {
      const [fontsLoaded] = useFonts({
        KaushanScript: KaushanScript_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

      var nome = 'Matheus';
    
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
                            <Text style={styles.titleProsa}>Seja Bem vindo {nome}</Text>
                        </View>
                        <StatusBar style="auto" />
                    </View>

                    <View style={styles.actionsContainer}>
                        <Text style={styles.titleProsa2}>Vamos iniciar sua prosa?</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar Prosa</Text>  
                        </TouchableOpacity>
                    </View>
    
                    <View style={styles.actionsContainer}>
                        <Text style={styles.titleProsa2}>Menus Administrativo</Text>
                        <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('CriarCadastroAdministrativo')}>
                            <Text style={styles.buttonText}>Criar Cadastro Administrativo</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('CriarCadastroProsa')}>
                            <Text style={styles.buttonText}>Criar Cadastro Prosa</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Gerenciar Dispositivos</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Gerenciar Usuários</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
        </>
      );
    }
    
    // Estilos da interface
    const styles = StyleSheet.create({

        titleProsa2: {
            fontSize: 20,
            color: "#7E4E2F",
            textAlign: "center",
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
        marginTop: 10,
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
      
})