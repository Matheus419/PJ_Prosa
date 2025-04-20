import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/screens/Inicio';
import Login from '../src/screens/Login';
import RecuperarSenha from '../src/screens/RecuperarSenha';
import PgLoginIniciado from '../src/screens/PgLoginIniciado';
import CriarCadastroAdministrativo from '../src/screens/CriarCadastroAdministrativo'
import CriarCadastroProsa from '../src/screens/CriarCadastroProsa'
import LoginVoluntario from '../src/screens/LoginVoluntario'
import PgInicialVoluntario from '../src/screens/PgInicialVoluntario'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="PgLoginIniciado" component={PgLoginIniciado} />
        <Stack.Screen name="CriarCadastroAdministrativo" component={CriarCadastroAdministrativo} />
        <Stack.Screen name="CriarCadastroProsa" component={CriarCadastroProsa} />
        <Stack.Screen name="LoginVoluntario" component={LoginVoluntario} />
        <Stack.Screen name="PgInicialVoluntario" component={PgInicialVoluntario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}