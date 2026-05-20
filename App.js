// App.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.hero}>
        <Text style={styles.name}>المهندس أحمد العصري</Text>

        <Text style={styles.title}>
          مطور تطبيقات React Native ومهتم بالذكاء الاصطناعي
        </Text>

        <Text style={styles.description}>
          أقوم بتطوير تطبيقات حديثة وسريعة باستخدام React Native مع تصميم
          احترافي وتجربة مستخدم ممتازة.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>تواصل معي</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>الخدمات</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>تطوير تطبيقات موبايل</Text>
          <Text style={styles.cardText}>
            إنشاء تطبيقات Android و iOS باستخدام React Native.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>واجهات حديثة</Text>
          <Text style={styles.cardText}>
            تصميم واجهات عصرية وسريعة الاستجابة.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>حلول ذكاء اصطناعي</Text>
          <Text style={styles.cardText}>
            دمج تقنيات الذكاء الاصطناعي داخل التطبيقات.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 المهندس أحمد العصري
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  hero: {
    padding: 30,
    alignItems: 'center',
    marginTop: 60,
  },

  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  title: {
    fontSize: 18,
    color: '#38bdf8',
    marginTop: 15,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 26,
  },

  button: {
    backgroundColor: '#38bdf8',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    marginTop: 30,
  },

  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  cardTitle: {
    color: '#38bdf8',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 24,
  },

  footer: {
    padding: 30,
    alignItems: 'center',
  },

  footerText: {
    color: '#94a3b8',
    fontSize: 14,
  },
});