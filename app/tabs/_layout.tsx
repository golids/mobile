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
      name="inbox"
      options={{
        title: "Inbox",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "mail-outline" size ={size} color={color}/>
        )
      }}
      />

      <Tabs.Screen
      name="post"
      options={{
        title: "Post",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "add-circle-outline" size ={size} color={color}/>
        )
      }}
      />

       <Tabs.Screen
      name="my_stuff"
      options={{
        title: "My Stuff",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "person-circle-outline" size ={size} color={color}/>
        )
      }}
      />

      <Tabs.Screen
      name="notifications"
      options={{
        title: "Notifications",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "notifications-outline" size ={size} color={color}/>
        )
      }}
      />

    </Tabs>   
  )
}
