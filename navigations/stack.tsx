import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailCategoryScreen from "../screens/DetailCategoryScreen"
import HomeTabs from "./HomeTabs"
import DetailProductScreen from "../screens/DetailProductScreen"
import { RootStackParamList } from "../types/stackParams"
import CheckoutScreen from "../screens/CheckoutScreen"
import StatusCheckoutScreen from "../screens/StatusCheckoutScreen"
import SettingScreen from "../screens/SettingScreen"
import EditProfileScreen from "../screens/EditProfileScreen"
import AddressListScreen from "../screens/AddressListScreen"
import PasswordSecuritySreen from "../screens/PasswordSecuritySreen"
import ChangePasswordScreen from "../screens/ChangePasswordScreen"
import MyCartScreen from "../screens/MyCartScreen"
import SignInScreen from "../screens/SignInScreen"
import RegisterScreen from "../screens/RegisterScreen"
import OnBoardingScreen from "../screens/OnBoardingScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
            <Stack.Screen name="onboarding" component={OnBoardingScreen} />
            <Stack.Screen name="main" component={HomeTabs} />
            <Stack.Screen name="detail_category" component={DetailCategoryScreen} />
            <Stack.Screen name="detail_product" component={DetailProductScreen} />
            <Stack.Screen name="checkout" component={CheckoutScreen} />
            <Stack.Screen name="status_checkout" component={StatusCheckoutScreen} />
            <Stack.Screen name="setting" component={SettingScreen} />
            <Stack.Screen name="edit_profile" component={EditProfileScreen} />
            <Stack.Screen name="address_list" component={AddressListScreen} />
            <Stack.Screen name="password_security" component={PasswordSecuritySreen} />
            <Stack.Screen name="change_password" component={ChangePasswordScreen} />
            <Stack.Screen name="my_cart" component={MyCartScreen} />
            <Stack.Screen name="signin" component={SignInScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
