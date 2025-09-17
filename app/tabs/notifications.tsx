import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'match',
      title: 'Potential Match Found!',
      message: 'A black calculator was found near the Engineering building that matches your lost item.',
      timestamp: '2 minutes ago',
      read: false,
      item: 'Scientific Calculator',
      icon: 'notifications'
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      message: 'Maria Santos sent you a message about your found wallet.',
      timestamp: '1 hour ago',
      read: false,
      item: 'Leather Wallet',
      icon: 'chatbubble'
    },
    {
      id: '3',
      type: 'claim',
      title: 'Item Claimed',
      message: 'Your found water bottle has been successfully returned to its owner!',
      timestamp: 'Yesterday',
      read: true,
      item: 'Blue Water Bottle',
      icon: 'checkmark-circle'
    },
    {
      id: '4',
      type: 'system',
      title: 'Welcome to USTP Lost & Found!',
      message: 'Get started by browsing found items or reporting something you lost.',
      timestamp: 'Dec 15',
      read: true,
      item: null,
      icon: 'information-circle'
    }
  ])

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case 'match': return '#FF9500';
      case 'message': return '#007AFF';
      case 'claim': return '#34C759';
      case 'system': return '#5856D6';
      case 'update': return '#AF52DE';
      default: return '#00204A';
    }
  }

  const renderNotification = (notification: any) => (
    <TouchableOpacity 
      style={[styles.notificationCard, !notification.read && styles.unreadCard]}
      onPress={() => markAsRead(notification.id)}
    >
      <View style={styles.notificationHeader}>
        <View style={styles.iconContainer}>
          <Ionicons 
            name={notification.icon} 
            size={20} 
            color={getIconColor(notification.type)} 
          />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationTimestamp}>{notification.timestamp}</Text>
        </View>
        {!notification.read && <View style={styles.unreadDot} />}
      </View>
      
      <Text style={styles.notificationMessage}>{notification.message}</Text>
      
      {notification.item && (
        <View style={styles.itemBadge}>
          <Ionicons name="pricetag-outline" size={14} color="#00204A" />
          <Text style={styles.itemText}> {notification.item}</Text>
        </View>
      )}
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>

      {/* Notifications Container with Clear All Button */}
      <View style={styles.notificationsContainer}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTitle}>Recent Alerts</Text>
          {notifications.length > 0 && (
            <TouchableOpacity onPress={clearAllNotifications}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Notifications Content */}
        <ScrollView style={styles.content}>
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <View key={notification.id}>
                {renderNotification(notification)}
              </View>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="notifications-off-outline" size={64} color="#00204A" />
              <Text style={styles.emptyTitle}>No notifications</Text>
              <Text style={styles.emptyText}>
                You're all caught up! New alerts will appear here.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAFDFF',
  },
  notificationsContainer: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FAFAFA',
  },
  containerTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#00204A',
  },
  clearText: {
    color: '#00204A',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#00204A',
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 2,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF4757',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    marginBottom: 8,
  },
  itemBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFDFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  itemText: {
    fontSize: 12,
    color: '#00204A',
    fontFamily: 'Roboto-Medium',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 100,
    paddingBottom: 200,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    lineHeight: 22,
  },
})

export default Notifications