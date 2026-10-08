import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';         // หน้าแดชบอร์ด / ภาพรวมระบบ
import SchoolScreen from './screens/SchoolScreen';     // หน้าข้อมูลโรงเรียนเครือข่าย
import ReportScreen from './screens/ReportScreen';     // หน้ารายงานสารสนเทศ / สถิติ
import SettingScreen from './screens/SettingScreen';   // หน้าตั้งค่า / ข้อมูลผู้ใช้งาน

// นำเข้า Style
import styles, { COLORS } from './styles/ProjectStyles';

// สร้าง Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarStyle: styles.tabBar,

         
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'School') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Report') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >

        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'ภาพรวมระบบ' }} 
        />
        <Tab.Screen 
          name="School" 
          component={SchoolScreen} 
          options={{ title: 'โรงเรียนเครือข่าย' }} 
        />
        <Tab.Screen 
          name="Report" 
          component={ReportScreen} 
          options={{ title: 'รายงานสารสนเทศ' }} 
        />
        <Tab.Screen 
          name="Setting" 
          component={SettingScreen} 
          options={{ title: 'ตั้งค่าระบบ' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}