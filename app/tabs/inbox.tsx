import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Inbox = () => {
  // Sample conversation data
  const conversations = [
    {
      id: '1',
      userName: 'Phil Josh Tongco',
      userRole: 'STUDENT',
      itemName: 'Motorcycle key',
      lastMessage: 'Asa nimo nakita?',
      timestamp: '10:30 AM',
      unread: true,
      itemImage: require('../../assets/images/stuff.png')
    },
    {
      id: '2',
      userName: 'John Dela Cruz',
      userRole: 'FACULTY',
      itemName: 'Calculus Textbook',
      lastMessage: 'Thank you for holding my book!',
      timestamp: 'Yesterday',
      unread: false,
      itemImage: require('../../assets/images/stuff.png')
    },
    {
      id: '3',
      userName: 'USTP Admin Office',
      userRole: 'STAFF',
      itemName: 'Student ID Card',
      lastMessage: 'Please come to the admin office to claim your ID.',
      timestamp: 'Dec 15',
      unread: false,
      itemImage: require('../../assets/images/stuff.png')
    },
    {
      id: '4',
      userName: 'John Lloyd Angeles',
      userRole: 'STUDENT',
      itemName: 'ID',
      lastMessage: 'Yahay! Josh e uli na. Baylo laptop.',
      timestamp: 'Dec 12',
      unread: false,
      itemImage: require('../../assets/images/stuff.png')
    }
  ]

  const renderConversation = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.conversationCard}>
      <Image source={item.itemImage} style={styles.itemImage} />
      
      <View style={styles.conversationContent}>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        
        <Text style={styles.userRole}>{item.userRole}</Text>
        <Text style={styles.itemName} numberOfLines={1}>{item.itemName}</Text>
        
        <View style={styles.messageRow}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread && <View style={styles.unreadBadge} />}
        </View>
      </View>
      
      <Ionicons name="chevron-forward" size={20} color="#00204A" />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>

      {/* Inbox Content */}
      <View style={styles.content}>
        {conversations.length > 0 ? (
          <FlatList
            data={conversations}
            renderItem={renderConversation}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="chatbubble-ellipses-outline" size={64} color="#00204A" />
            <Text style={styles.emptyTitle}>No messages yet</Text>
            <Text style={styles.emptyText}>
              Your conversations about lost and found items will appear here.
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAFDFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContent: {
    marginTop: 10,
    paddingBottom: 20,
  },
  conversationCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  conversationContent: {
    flex: 1,
    marginRight: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  userRole: {
    fontSize: 12,
    color: '#00204A',
    fontFamily: 'Roboto-Italic',
    marginBottom: 2,
  },
  itemName: {
    fontSize: 14,
    color: '#00204A',
    fontFamily: 'Roboto-Medium',
    marginBottom: 4,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF4757',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
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

export default Inbox