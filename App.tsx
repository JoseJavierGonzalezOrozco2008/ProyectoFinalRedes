import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routes from './src/screens/Personal_Screen';
import Routes1 from './src/screens/Admin_Screen';
import ProvInic from './src/screens/RegistrarProveedor_Screen';
import ClientInic from './src/screens/RegistrarClientes_Screen';
import AlimAnimInic from './src/screens/RegistrarAlimentoAnimal_Screen';
import MatPrimInic from './src/screens/RegistrarMatPrim';
import ElimAct_Screen from './src/screens/EliminarAct_Screen';
import ElimDireccion_Screen from './src/screens/EliminarDireccion_Screen';
import AlimVentaInic from './src/screens/RegistrarAlimentoVenta_Screen';
import ElimMatPri_Screen from './src/screens/EliminarMatPri_Screen';
import ElimAlimVen_Screen from './src/screens/EliminarAlimentoVenta';
import ElimCompra_Screen from './src/screens/EliminarCompra_Screen';
import ElimCliente_Screen from './src/screens/EliminarCliente_Screen';
import ElimAnimal_Screen from './src/screens/EliminarAnimal_Screen';
import ElimPersonal_Screen from './src/screens/EliminarPersonal_Screen';
import ElimProveedor_Screen from './src/screens/EliminarProveedor_Screen';
import ElimTipoAnim_Screen from './src/screens/EliminarTipoAnimal_Screen';
import ElimVenta_Screen from './src/screens/EliminarVenta_Screen';
import RegistrarActividad_Screen from './src/screens/RegistrarActividad_Screen';
import PersonalInic from './src/screens/RegistrarPersonal_Screen';
import CompraInic from './src/screens/RegistrarCompra_Screen';
import ConsTipAnimInic from './src/screens/ConsultarTipoAnimal_Screen';
import ConsActividadInic from './src/screens/ConsultarActividad_Screen';
import ConsDireccionInic from './src/screens/ConsultarDireccion_Screen';
import ConsAnimalesInic from './src/screens/ConsultarAnimales_Screen';
import ConsAlimAnimalInic from './src/screens/ConsultarAlimentoAnimal_Screen';
import ActAlimAnimalInic from './src/screens/ActualizarAlimentoAnimal';
import VentaInic from './src/screens/RegistrarVenta_Screen';
import ConsultarAlmace from './src/screens/ConsultarAlmace';
import ConsultarAnimales from './src/screens/ConsultarAnimalesCompleto_Screen';
import ConsultarAlimAnimCompleto from './src/screens/ConsultarAlimAnimCompleto_Screen';
import ConsultarVentasCompleto from './src/screens/ConsultaCpmpletaVentas_Screen';
import ConsultarActividadCompleto from './src/screens/ConsComplActividades_Screen';
import ConsultarTipoAnimalCompleto from './src/screens/ConsultaCompletaTipoAnimal_Screen';
import ActPersonalInic from './src/screens/ActualizarPersonal_Screen';
import ActAlimAnimalAdminInic from './src/screens/ActualizarAlimAnimAdmin_Screen';
import ActAlimVentaInic from './src/screens/ActualizarAlimentoVenta_Screen';
import TipoAnimalInic from './src/screens/RegTipoAnimal';

const Stack = createStackNavigator();

const App = () => {
  
    
    return (
        <NavigationContainer>  
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Personal' component={Routes}/> 
                <Stack.Screen name='Admin' component={Routes1}/> 
                <Stack.Screen name='RegProv' component={ProvInic}/> 
                <Stack.Screen name='RegCli' component={ClientInic}/> 
                <Stack.Screen name='RegAlimAnim' component={AlimAnimInic}/> 
                <Stack.Screen name='RegMatPrim' component={MatPrimInic}/> 
                <Stack.Screen name='RegAlimVenta' component={AlimVentaInic}/> 
                <Stack.Screen name='ElimAct' component={ElimAct_Screen}/> 
                <Stack.Screen name='ElimDir' component={ElimDireccion_Screen}/> 
                <Stack.Screen name='ElimMatP' component={ElimMatPri_Screen}/> 
                <Stack.Screen name='ElimAlimVen' component={ElimAlimVen_Screen}/> 
                <Stack.Screen name='ElimCompra' component={ElimCompra_Screen}/> 
                <Stack.Screen name='ElimCliente' component={ElimCliente_Screen}/> 
                <Stack.Screen name='ElimAnimal' component={ElimAnimal_Screen}/> 
                <Stack.Screen name='ElimPersonal' component={ElimPersonal_Screen}/> 
                <Stack.Screen name='ElimProveedor' component={ElimProveedor_Screen}/> 
                <Stack.Screen name='ElimTipoAnim' component={ElimTipoAnim_Screen}/> 
                <Stack.Screen name='ElimVenta' component={ElimVenta_Screen}/> 
                <Stack.Screen name='RegActividad' component={RegistrarActividad_Screen}/> 
                <Stack.Screen name='RegPersonal' component={PersonalInic}/> 
                <Stack.Screen name='RegCompra' component={CompraInic}/> 
                <Stack.Screen name='ConsTipoAnimal' component={ConsTipAnimInic}/> 
                <Stack.Screen name='ConsActividad' component={ConsActividadInic}/> 
                <Stack.Screen name='ConsDireccion' component={ConsDireccionInic}/> 
                <Stack.Screen name='ConsAnimal' component={ConsAnimalesInic}/> 
                <Stack.Screen name='ConsAlimAnim' component={ConsAlimAnimalInic}/> 
                <Stack.Screen name='ActAlimAnim' component={ActAlimAnimalInic}/> 
                <Stack.Screen name='RegVenta' component={VentaInic}/> 
                <Stack.Screen name='ConsAlmacen' component={ConsultarAlmace}/> 
                <Stack.Screen name='ConsultaComplAnimales' component={ConsultarAnimales}/> 
                <Stack.Screen name='ConsAlimAnimCompleto' component={ConsultarAlimAnimCompleto}/> 
                <Stack.Screen name='ConsVentasCompleto' component={ConsultarVentasCompleto}/> 
                <Stack.Screen name='ConsActividadCompleto' component={ConsultarActividadCompleto}/> 
                <Stack.Screen name='ConsTipoAnimCompleto' component={ConsultarTipoAnimalCompleto}/> 
                <Stack.Screen name='ActualizarPersonal' component={ActPersonalInic}/> 
                <Stack.Screen name='ActualizarAlimAnimAdmin' component={ActAlimAnimalAdminInic}/> 
                <Stack.Screen name='ActualizarAlimVenta' component={ActAlimVentaInic}/> 
                <Stack.Screen name='RegTipoAnim' component={TipoAnimalInic}/> 

                
                
                
            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default App
