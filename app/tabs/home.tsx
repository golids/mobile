import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

// Define the interface for the item object
interface FoundItem {
  id: string;
  title: string;
  location: string;
  date: string;
  image: any; // Using 'any' for require() images
  category: string;
  status: 'Claimed' | 'Unclaimed';
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Sample data for found items with proper typing
  const foundItems: FoundItem[] = [
    {
      id: '1',
      title: 'Black Wireless Earbuds',
      location: 'Near CEA Building',
      date: '2 hours ago',
      image: require('../../assets/images/stuff.png'),
      category: 'Electronics',
      status: 'Unclaimed'
    },
    {
      id: '2',
      title: 'Student ID Card',
      location: 'Library',
      date: 'Yesterday',
      image: require('../../assets/images/stuff.png'),
      category: 'IDs & Cards',
      status: 'Unclaimed'
    },
    {
      id: '3',
      title: 'Blue Water Bottle',
      location: 'Gym',
      date: '3 days ago',
      image: require('../../assets/images/stuff.png'),
      category: 'Others',
      status: 'Claimed'
    },
    {
      id: '4',
      title: 'Calculus Textbook',
      location: 'Math Department',
      date: '1 week ago',
      image: require('../../assets/images/stuff.png'),
      category: 'Books & Notes',
      status: 'Unclaimed'
    },
  ]

  const categories = ['Electronics', 'IDs & Cards', 'Keys', 'Clothing', 'Books & Notes','Money', 'Others']

  // Add proper typing to the renderItem function parameter
  const renderItem = ({ item }: { item: FoundItem }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
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
        <View style={[styles.statusBadge, item.status === 'Claimed' ? styles.claimedBadge : styles.unclaimedBadge]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* Header with Logo and Stats */}
      <View style={styles.header}>
        <Image 
          source={require("../../assets/images/LU-Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>🔥 253 items reunited with owners!</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for lost items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Filters - FIXED: Added the categoriesSection wrapper and title */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Found Items List */}
      <Text style={styles.sectionTitle}>Recently Found Items</Text>
      <FlatList
        data={foundItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAFDFF',
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 120,
  },
  statsContainer: {
    backgroundColor: '#00204A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 8,
  },
  statsText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  categoriesSection: {
    marginBottom: 10,
  },
  categoriesContainer: {
    maxHeight: 50,
  },
  categoriesContent: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#00204A',
  },
  categoryText: {
    color: '#00204A',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  categoryTextActive: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 80,
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemDetails: {
    padding: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 8,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemLocation: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Roboto-Regular',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
  },
  unclaimedBadge: {
    backgroundColor: '#e44f4fff',
    borderRadius: 20,
  },
  claimedBadge: {
    backgroundColor: '#58cc7bff',
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: '#00204A',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#00204A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
})

export default Home