import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ระบบสารสนเทศสถานศึกษาเครือข่าย</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>โรงเรียนในเครือข่าย</Text>
        <Text style={styles.cardValue}>12 แห่ง</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>จำนวนบุคลากรครู</Text>
        <Text style={styles.cardValue}>245 คน</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>จำนวนนักเรียนรวม</Text>
        <Text style={styles.cardValue}>3,820 คน</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 8, marginBottom: 12, elevation: 2 },
  cardTitle: { fontSize: 16, color: '#666' },
  cardValue: { fontSize: 24, fontWeight: 'bold', color: '#007AFF', marginTop: 8 },
});