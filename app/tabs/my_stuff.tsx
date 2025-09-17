import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';

const { width } = Dimensions.get('window');

const MyStuff = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('found'); // 'found', 'lost', or 'claims'
  const panelPosition = new Animated.Value(width);

  // Sample data
  const foundItems = [
    {
      id: '1',
      title: 'Black Wireless Earbuds',
      location: 'Near CEA Building',
      date: '2 hours ago',
      status: 'Unclaimed',
    },
    {
      id: '2',
      title: 'Student ID Card',
      location: 'Library',
      date: 'Yesterday',
      status: 'Claimed',
    }
  ];

  const lostItems = [
    {
      id: '1',
      title: 'Calculus Textbook',
      location: 'Math Department',
      date: '3 days ago',
      status: 'Not Found',
    }
  ];

  const claimRequests = [
    {
      id: '1',
      userName: 'Phil Josh Tongco',
      itemName: 'Black Wireless Earbuds',
      message: 'Dol! Dili ni akoa pero pwede ikaw nalang akoa?',
      timestamp: '10:30 AM',
      status: 'pending'
    }
  ];

  useEffect(() => {
    // Set up header right button
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => setIsPanelOpen(true)}
          style={{ marginRight: 15 }}
        >
          <Ionicons name="menu-outline" size={24} color="#00204A" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (isPanelOpen) {
      Animated.timing(panelPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(panelPosition, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isPanelOpen]);

  const handleLogout = () => {
    // Navigate back to the login page (app/index)
    router.replace('/login');
  };

  const handleMenuItemPress = (itemTitle: string) => {
    setIsPanelOpen(false); // Close the panel first
    
    // Add a small delay to allow the panel to close before navigating
    setTimeout(() => {
      if (itemTitle === 'Terms & Condition') {
        router.push('/terms_cond'); // Navigate to Terms & Conditions page
      } else {
        console.log(`${itemTitle} pressed`);
        // Add navigation for other menu items here if needed
      }
    }, 300); // Match the duration of the panel closing animation
  };

  const menuItems = [
    { id: 1, title: 'Account Management', icon: 'person-outline' },
    { id: 2, title: 'Notifications', icon: 'notifications-outline' },
    { id: 3, title: 'Privacy & Security', icon: 'lock-closed-outline' },
    { id: 4, title: 'Terms & Condition', icon: 'newspaper-outline'},
    { id: 5, title: 'Help & Support', icon: 'help-circle-outline' },
    { id: 6, title: 'About', icon: 'information-circle-outline' },
  ];

  const renderItemCard = (item: any, isFound = true) => (
    <View style={styles.itemCard} key={item.id}>
      <Image source={require("../../assets/images/stuff.png")} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemMeta}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.itemLocation}> {item.location}</Text>
        </View>
        <View style={styles.itemMeta}>
          <Ionicons name="time-outline" size={14} color="#666" />
          <Text style={styles.itemDate}> {item.date}</Text>
        </View>
        <View style={[
          styles.statusBadge, 
          item.status === 'Claimed' ? styles.claimedBadge :
          item.status === 'Unclaimed' ? styles.unclaimedBadge :
          styles.notFoundBadge
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  const renderClaimRequest = (request: any) => (
    <View style={styles.claimCard} key={request.id}>
      <View style={styles.claimHeader}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={20} color="#00204A" />
          </View>
          <View>
            <Text style={styles.userName}>{request.userName}</Text>
            <Text style={styles.claimItem}>{request.itemName}</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>{request.timestamp}</Text>
      </View>
      
      <Text style={styles.claimMessage}>{request.message}</Text>
      
      <View style={styles.claimActions}>
        <TouchableOpacity style={[styles.actionButton, styles.acceptButton]}>
          <Ionicons name="checkmark" size={16} color="white" />
          <Text style={styles.actionButtonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.rejectButton]}>
          <Ionicons name="close" size={16} color="white" />
          <Text style={styles.actionButtonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Profile Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarLarge}>
            <Ionicons name="person" size={40} color="#00204A" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Juan Dela Cruz</Text>
            <Text style={styles.userRole}>Student • USTP</Text>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Found</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Lost</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Returned</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'found' && styles.activeTab]}
            onPress={() => setActiveTab('found')}
          >
            <Ionicons 
              name="search" 
              size={20} 
              color={activeTab === 'found' ? '#00204A' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'found' && styles.activeTabText]}>
              Found
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tab, activeTab === 'lost' && styles.activeTab]}
            onPress={() => setActiveTab('lost')}
          >
            <Ionicons 
              name="alert-circle" 
              size={20} 
              color={activeTab === 'lost' ? '#00204A' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'lost' && styles.activeTabText]}>
              Lost
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tab, activeTab === 'claims' && styles.activeTab]}
            onPress={() => setActiveTab('claims')}
          >
            <Ionicons 
              name="chatbubble" 
              size={20} 
              color={activeTab === 'claims' ? '#00204A' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'claims' && styles.activeTabText]}>
              Claims
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Area */}
        <View style={styles.tabContent}>
          {activeTab === 'found' && (
            <View>
              {foundItems.length > 0 ? (
                foundItems.map(item => renderItemCard(item, true))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="search-outline" size={64} color="#00204A" />
                  <Text style={styles.emptyTitle}>No found items yet</Text>
                  <Text style={styles.emptyText}>
                    Items you find and post will appear here.
                  </Text>
                </View>
              )}
            </View>
          )}

          {activeTab === 'lost' && (
            <View>
              {lostItems.length > 0 ? (
                lostItems.map(item => renderItemCard(item, false))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="alert-circle-outline" size={64} color="#00204A" />
                  <Text style={styles.emptyTitle}>No lost items reported</Text>
                  <Text style={styles.emptyText}>
                    Items you report as lost will appear here.
                  </Text>
                </View>
              )}
            </View>
          )}

          {activeTab === 'claims' && (
            <View>
              {claimRequests.length > 0 ? (
                claimRequests.map(renderClaimRequest)
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="chatbubble-outline" size={64} color="#00204A" />
                  <Text style={styles.emptyTitle}>No claim requests</Text>
                  <Text style={styles.emptyText}>
                    Requests from people claiming your found items will appear here.
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Side Panel */}
      {isPanelOpen && (
        <TouchableOpacity 
          style={styles.overlay}
          onPress={() => setIsPanelOpen(false)}
          activeOpacity={1}
        />
      )}
      
      <Animated.View 
        style={[
          styles.panel,
          {
            transform: [{ translateX: panelPosition }]
          }
        ]}
      >
        <SafeAreaView style={styles.panelContent}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>Settings</Text>
            <TouchableOpacity 
              onPress={() => setIsPanelOpen(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="#00204A" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuItems}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => handleMenuItemPress(item.title)}
              >
                <Ionicons 
                  name={item.icon as any}
                  size={22} 
                  color="#00204A" 
                  style={styles.menuIcon} 
                />
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Ionicons name="log-out-outline" size={22} color="#fff" />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
            <Text style={styles.versionText}>App Version 1.0.0</Text>
          </View>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAFDFF',
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EAFDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 2,
  },
  userRole: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 1,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#00204A',
  },
  tabText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: '#666',
  },
  activeTabText: {
    color: '#00204A',
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 4,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  itemLocation: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  itemDate: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  unclaimedBadge: {
    backgroundColor: '#E6F7EE',
  },
  claimedBadge: {
    backgroundColor: '#F0F0F0',
  },
  notFoundBadge: {
    backgroundColor: '#FFECEC',
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: '#00204A',
  },
  claimCard: {
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
  claimHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAFDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  claimItem: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  claimMessage: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    marginBottom: 16,
  },
  claimActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 6,
  },
  acceptButton: {
    backgroundColor: '#34C759',
  },
  rejectButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    lineHeight: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  panel: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  panelContent: {
    flex: 1,
  },
  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  panelTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
  },
  closeButton: {
    padding: 4,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIcon: {
    marginRight: 16,
    width: 24,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#00204A',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00204A',
    padding: 16,
    borderRadius: 15,
    marginBottom: 16,
    gap: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  versionText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
});

export default MyStuff;