import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const schoolData = [
  { id: '1', name: 'โรงเรียนอนุบาลเครือข่าย 1', province: 'สุพรรณบุรี', students: '450' },
  { id: '2', name: 'โรงเรียนมัธยมเครือข่าย 2', province: 'สุพรรณบุรี', students: '1,200' },
  { id: '3', name: 'โรงเรียนขยายโอกาสเครือข่าย 3', province: 'สุพรรณบุรี', students: '680' },
];

export default function SchoolScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={schoolData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.schoolName}>{item.name}</Text>
            <Text style={styles.detail}>จังหวัด: {item.province}</Text>
            <Text style={styles.detail}>นักเรียน: {item.students} คน</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 10 },
  schoolName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  detail: { fontSize: 14, color: '#666', marginTop: 4 },
});