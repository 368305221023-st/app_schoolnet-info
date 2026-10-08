import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>รายงานและเอกสารสารสนเทศ</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📄 รายงานสรุปผลสัมฤทธิ์ทางการเรียนประจำปี</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📊 รายงานงบประมาณและอัตรากำลังครู</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📂 สรุปโครงการความร่วมมือเครือข่าย</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  button: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  buttonText: { fontSize: 15, color: '#333' },
});