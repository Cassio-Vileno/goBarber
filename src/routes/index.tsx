import Rect from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#312e38"}
    }}
    >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>

)
export default AuthRoutes;