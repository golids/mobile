import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#00204A'
     }}
     >
      <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "home-outline" size ={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name="find"
      options={{
        title: "Find",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "search" size ={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name="add_item"
      options={{
        title: "Add Item",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "add" size ={size} color={color}/>
        )
      }}
      />
       <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "person-circle-outline" size ={size} color={color}/>
        )
      }}
      />
    </Tabs>   
  )
}
