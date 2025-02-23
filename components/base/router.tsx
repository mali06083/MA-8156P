import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../Screens/login";
import useAppStore from "../../store/appStore";
import Home from "../../Screens/drawers/Home";

const Stack = createNativeStackNavigator();

function Router() {
    const isAuthenticated = useAppStore((state) => state.auth.isAuthenticated);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <Stack.Screen name="Home" component={Home} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
}
  
export default Router;
