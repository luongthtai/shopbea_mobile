import { Icons } from "../components/elements/Icon";
import ChatScreen from "../screens/ChatScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WishlistScreen from "../screens/WishlistScreen";

export const tabs = [
    {
        key: 1,
        type: Icons.Octicons,
        activeIcon: "home",
        size: 20,
        name: 'home',
        screen: HomeScreen
    },
    {
        key: 2,
        type: Icons.Feather,
        activeIcon: "compass",
        size: 24,
        name: 'discovery',
        screen: DiscoveryScreen
    },
    {
        key: 3,
        type: Icons.Ionicons,
        activeIcon: "chatbubble-ellipses-outline",
        size: 24,
        name: 'chat',
        screen: ChatScreen
    },
    {
        key: 4,
        type: Icons.Ionicons,
        activeIcon: "heart-outline",
        size: 26,
        name: 'wishlist',
        screen: WishlistScreen
    },
    {
        key: 5,
        type: Icons.EvilIcons,
        activeIcon: "user",
        size: 32,
        name: 'profile',
        screen: ProfileScreen
    },
]
