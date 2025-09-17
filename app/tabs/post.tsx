import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

// Define types for our form data and post type
type PostType = 'found' | 'lost' | null;
interface FormData {
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  contactInfo: string;
}

const Post = () => {
  const [postType, setPostType] = useState<PostType>(null)
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    location: '',
    date: '',
    contactInfo: ''
  })

  const categories = ['Electronics', 'IDs & Cards', 'Keys', 'Wallets', 'Books & Notes', 'Money', 'Others']

  // Add type annotations to function parameters
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', { type: postType, ...formData })
    // Reset form after submission
    setPostType(null)
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      date: '',
      contactInfo: ''
    })
  }

  if (!postType) {
    return (
      <View style={styles.container}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceTitle}>What would you like to post?</Text>
          <Text style={styles.choiceSubtitle}>Help the USTP community reunite with their belongings</Text>
          
          <TouchableOpacity 
            style={[styles.choiceButton, styles.foundButton]}
            onPress={() => setPostType('found')}
          >
            <Ionicons name="search" size={32} color="white" />
            <Text style={styles.choiceButtonText}>I Found an Item</Text>
            <Text style={styles.choiceButtonSubtext}>Post something you found on campus</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.choiceButton, styles.lostButton]}
            onPress={() => setPostType('lost')}
          >
            <Ionicons name="alert-circle" size={32} color="white" />
            <Text style={styles.choiceButtonText}>I Lost an Item</Text>
            <Text style={styles.choiceButtonSubtext}>Report something you lost</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.formContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPostType(null)} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#00204A" />
        </TouchableOpacity>
        <Text style={styles.formTitle}>
          {postType === 'found' ? 'Report Found Item' : 'Report Lost Item'}
        </Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      {/* Image Upload */}
      <View style={styles.uploadSection}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="camera" size={32} color="#00204A" />
          <Text style={styles.uploadText}>Add Photos</Text>
          <Text style={styles.uploadSubtext}>Maximum 4 images</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>Item Details</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Item Title*"
          value={formData.title}
          onChangeText={(text) => handleInputChange('title', text)}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description*"
          value={formData.description}
          onChangeText={(text) => handleInputChange('description', text)}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Category*</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                formData.category === category && styles.categoryButtonActive
              ]}
              onPress={() => handleInputChange('category', category)}
            >
              <Text style={[
                styles.categoryText,
                formData.category === category && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Location*"
          value={formData.location}
          onChangeText={(text) => handleInputChange('location', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Date Found/Lost (Optional)"
          value={formData.date}
          onChangeText={(text) => handleInputChange('date', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Contact Info (Optional)"
          value={formData.contactInfo}
          onChangeText={(text) => handleInputChange('contactInfo', text)}
        />

        {postType === 'lost' && (
          <View style={styles.rewardContainer}>
            <Ionicons name="gift" size={20} color="#00204A" />
            <Text style={styles.rewardText}>Offer reward (optional)</Text>
            <TouchableOpacity style={styles.rewardToggle}>
              <Ionicons name="toggle" size={24} color="#00204A" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>
          {postType === 'found' ? 'Post Found Item' : 'Post Lost Item'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        By posting, you agree to handle the return process responsibly. USTP is not liable for transactions.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAFDFF',
  },
  choiceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  choiceTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 8,
    textAlign: 'center',
  },
  choiceSubtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginBottom: 40,
  },
  choiceButton: {
    width: '100%',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  foundButton: {
    backgroundColor: '#00204A',
  },
  lostButton: {
    backgroundColor: '#FF9500',
  },
  choiceButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    marginTop: 12,
    marginBottom: 4,
  },
  choiceButtonSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  formContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  formTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    textAlign: 'center',
    flex: 1,
  },
  uploadSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#00204A',
    marginBottom: 12,
  },
  uploadButton: {
    height: 120,
    borderWidth: 2,
    borderColor: '#00204A',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 32, 74, 0.05)',
  },
  uploadText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#00204A',
    marginTop: 8,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    marginTop: 2,
  },
  formSection: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#00204A',
    marginBottom: 8,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  categoryButtonActive: {
    backgroundColor: '#00204A',
  },
  categoryText: {
    color: '#00204A',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  categoryTextActive: {
    color: 'white',
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  rewardText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#00204A',
  },
  rewardToggle: {
    // Add styles for toggle if needed
  },
  submitButton: {
    backgroundColor: '#00204A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    lineHeight: 16,
  },
})

export default Post