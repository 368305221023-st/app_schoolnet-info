import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.name}>ผู้ดูแลระบบเครือข่าย</Text>
        <Text style={styles.role}>ตำแหน่ง: นักวิเคราะห์นโยบายและแผน</Text>
        <Text style={styles.email}>email: admin@schoolnetwork.go.th</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  profileBox: { backgroundColor: '#fff', padding: 20, borderRadius: 8, alignItems: 'center' },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  role: { fontSize: 14, color: '#666', marginTop: 4 },
  email: { fontSize: 14, color: '#888', marginTop: 2 },
});