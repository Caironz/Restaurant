// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Restaurant Name Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ARAY MO</Text>
        <Text style={styles.subHeader}>RESTAURANT</Text>
        <Text style={styles.tagline}>Delicious Flavors Await</Text>
      </View>

      {/* Opening Hours Display */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>⏰ Opening Hours</Text>
        <View style={styles.hoursContainer}>
          <View style={styles.hourRow}>
            <Text style={styles.dayLabel}>Mon - Fri</Text>
            <Text style={styles.timeLabel}>10:00 AM - 10:00 PM</Text>
          </View>
          <View style={[styles.hourRow, styles.weekend]}>
            <Text style={styles.dayLabel}>Sat - Sun</Text>
            <Text style={styles.timeLabel}>9:00 AM - 11:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Featured Menu Items */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🍽️ Featured Menu Items</Text>
        <View style={styles.menuGrid}>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>🍝</Text>
            <Text style={styles.menuName}>Spaghetti Carbonara</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>🥗</Text>
            <Text style={styles.menuName}>Caesar Salad</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>🍕</Text>
            <Text style={styles.menuName}>Margherita Pizza</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuIcon}>🍰</Text>
            <Text style={styles.menuName}>Chocolate Lava Cake</Text>
          </View>
        </View>
      </View>

      {/* Contact/Location Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📍 Contact & Location</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📍</Text>
          <Text style={styles.contactText}>8400 Narciso Street, Surigao City</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>📞</Text>
          <Text style={styles.contactText}>09700597730</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>✉️</Text>
          <Text style={styles.contactText}>info@araymo.com</Text>
        </View>
      </View>

      {/* Reserve Table Button */}
      <TouchableOpacity 
        style={styles.reserveButton}
        onPress={() => alert('Reservation feature coming soon!')}
        activeOpacity={0.8}
      >
        <Text style={styles.reserveButtonText}>Reserve a Table</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>Thank you for your visit! 🙏</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: '#d35400',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 2,
  },
  subHeader: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    marginTop: 5,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 12,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 18,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#d35400',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#d35400',
  },
  hoursContainer: {
    gap: 12,
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  weekend: {
    backgroundColor: '#fff3e0',
  },
  dayLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
  },
  timeLabel: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: '600',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  menuItem: {
    width: '48%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  menuIcon: {
    fontSize: 32,
    marginBottom: 8,
    color: '#2c3e50',
  },
  menuName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  reserveButton: {
    marginHorizontal: 16,
    marginVertical: 20,
    paddingVertical: 16,
    backgroundColor: '#d35400',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#d35400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  reserveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    color: '#d35400',
  },
  contactText: {
    fontSize: 14,
    color: '#34495e',
    flex: 1,
    lineHeight: 20,
    fontWeight: '500',
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#d35400',
    marginTop: 30,
    fontWeight: '600',
  },
});
