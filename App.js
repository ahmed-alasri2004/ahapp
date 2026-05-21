// App.js
import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ تم إصلاح الخطأ هنا فقط
  const sendMessage = async () => {
    try {
      const response = await fetch("http://192.168.43.73:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert("تم الإرسال بنجاح");

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      Alert.alert("خطأ في الاتصال بالسيرفر");
      console.log(error);
    }
  };

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

        <TextInput
          placeholder="الاسم"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="البريد الإلكتروني"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="الرسالة"
          placeholderTextColor="#94a3b8"
          style={[styles.input, { height: 120 }]}
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={sendMessage}>
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
        <Text style={styles.footerText}>© 2026 المهندس أحمد العصري</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  hero: {
    padding: 30,
    alignItems: "center",
    marginTop: 60,
  },

  name: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  title: {
    fontSize: 18,
    color: "#38bdf8",
    marginTop: 15,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 26,
  },

  button: {
    backgroundColor: "#38bdf8",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    marginTop: 30,
  },

  buttonText: {
    color: "#0f172a",
    fontWeight: "bold",
    fontSize: 16,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#38bdf8",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardText: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 24,
  },

  footer: {
    padding: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#94a3b8",
    fontSize: 14,
  },

  input: {
    width: "100%",
    backgroundColor: "#1e293b",
    marginTop: 15,
    borderRadius: 12,
    padding: 15,
    color: "#ffffff",
    fontSize: 16,
  },
});
