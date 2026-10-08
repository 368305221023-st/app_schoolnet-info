import { StyleSheet } from 'react-native';

// 1. กำหนดชุดสีหลัก (Color Palette) สำหรับระบบสารสนเทศสถานศึกษา
export const COLORS = {
  primary: '#1E3A8A',       // สีน้ำเงินเข้ม (แสดงถึงความน่าเชื่อถือ/ทางการ)
  secondary: '#3B82F6',     // สีฟ้า (ใช้เป็นสีเน้น หรือปุ่มรอง)
  accent: '#10B981',        // สีเขียว (ใช้สำหรับสถานะปกติ/สำเร็จ)
  background: '#F3F4F6',    // สีเทาอ่อน (พื้นหลังแอปพลิเคชัน)
  cardBackground: '#FFFFFF',// สีขาว (พื้นหลังของการ์ดข้อมูล)
  
  textPrimary: '#1F2937',   // สีข้อความหลัก (เทาเข้มเกือบดำ)
  textSecondary: '#6B7280', // สีข้อความรอง / เมนูที่ไม่ถูกเลือก (เทา)
  border: '#E5E7EB',        // สีเส้นขอบ
  danger: '#EF4444',        // สีแจ้งเตือน/ยกเลิก
};

// 2. กำหนด Style Center สำหรับเรียกใช้งานร่วมกันทั้งแอป
const styles = StyleSheet.create({
  // Container หลัก
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  
  // สไตล์สำหรับ TabBar ด้านล่าง
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },

  // หัวข้อ (Header Title)
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 16,
    textAlign: 'center',
  },

  // การ์ดแสดงข้อมูล (Card UI)
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    // เงาสำหรับ Android
    elevation: 2,
    // เงาสำหรับ iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  // ข้อความภายใน Card
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  // ปุ่มกดใช้งานทั่วไป
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;