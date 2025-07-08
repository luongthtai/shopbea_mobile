import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { tabs } from "../data/tabs"
import COLORS from "../constants/colors"
import Icon from "../components/elements/Icon"
import { Text } from "react-native"

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ animation: "shift", headerShown: false, tabBarStyle: { position: "absolute", paddingHorizontal: 20 } }}>
            {
                tabs.map(router =>
                    <Tab.Screen
                        key={router.key}
                        name={router.name}
                        component={router.screen}
                        options={{
                            tabBarLabel: ({ color, focused }) => focused && <Text style={{ textTransform: "capitalize", color: COLORS["Primary-Green-1"], fontWeight: 600 }}>{router.name}</Text>,
                            tabBarLabelPosition: "beside-icon",
                            tabBarShowLabel: true,
                            tabBarIcon: ({ color, focused }) =>
                                <Icon
                                    type={router.type}
                                    color={focused ? COLORS["Primary-Green-1"] : COLORS["Grey-Grey-1"]}
                                    name={router.activeIcon}
                                    size={router.size}
                                />,
                        }}
                    />
                )
            }
        </Tab.Navigator>
    )
}

export default HomeTabs