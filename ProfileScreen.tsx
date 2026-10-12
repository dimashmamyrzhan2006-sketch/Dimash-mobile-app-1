import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');
const cardWidth = (width - 56) / 2; // Оптимальная ширина для плиток

interface ProfileProps {
  login: string;
  handleLogout: () => void;
}

export default function ProfileScreen({ login, handleLogout }: ProfileProps) {
  // Заменяем нижнее подчеркивание на красивый пробел
  const displayName = login.includes('_') ? login.replace('_', ' ') : login;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="dark" />
      
      {/* ПРЕМИАЛЬНЫЙ МИНИМАЛИСТИЧНЫЙ ХЕДЕР */}
      <View style={styles.mainHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.welcomeText}>STUDENT ID</Text>
          <Text style={styles.userNameText} numberOfLines={1}>
            {displayName.toUpperCase()}
          </Text>
          <Text style={styles.userSubText}>ALT • Ақпараттық жүйе</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* ИДЕАЛЬНО СБАЛАНСИРОВАННАЯ ТЕМНАЯ ID-КАРТА */}
        <View style={styles.gpaWidget}>
          <View style={styles.cardTopRow}>
            <Text style={styles.universityText}>ЭИЦТ (ALT)</Text>
            <View style={styles.chipDesign} />
          </View>
          
          <View style={styles.cardMiddleRow}>
            <Text style={styles.universityFullName}>Академия Логистики и Транспорта</Text>
          </View>

          <View style={styles.cardBottomRow}>
            <View>
              <Text style={styles.gpaLabel}>СТАТУС СТУДЕНТА</Text>
              <Text style={styles.gpaStatusValue}>АКТИВЕН</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.gpaLabel}>GPA SCORE</Text>
              <Text style={styles.gpaScore}>3.49</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>ЦИФРОВЫЕ МОДУЛИ</Text>
        
        {/* СЕТКА СВЕРХСТИЛЬНЫХ МОДУЛЕЙ БЕЗ СМАЙЛИКОВ */}
        <View style={styles.gridContainer}>
          
          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#3b82f6' }]}>LIB</Text>
            <Text style={styles.cardTitle}>Кітапхана</Text>
            <Text style={styles.cardDesc}>Оқулықтар қоры</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#10b981' }]}>SCH</Text>
            <Text style={styles.cardTitle}>Сабақ кестесі</Text>
            <Text style={styles.cardDesc}>Күнделікті уақыт</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#f59e0b' }]}>MDL</Text>
            <Text style={styles.cardTitle}>Moodle порталы</Text>
            <Text style={styles.cardDesc}>Үй тапсырмасы</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#6366f1' }]}>JRN</Text>
            <Text style={styles.cardTitle}>Журнал</Text>
            <Text style={styles.cardDesc}>Бағалау парағы</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#ec4899' }]}>FTG</Text>
            <Text style={styles.cardTitle}>Smart Асхана</Text>
            <Text style={styles.cardDesc}>Теңгерім және мәзір</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <Text style={[styles.techTag, { color: '#14b8a6' }]}>INF</Text>
            <Text style={styles.cardTitle}>Анықтамалық</Text>
            <Text style={styles.cardDesc}>Студенттік бөлім</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- ВЫВЕРЕННЫЕ СТИЛИ В СТИЛЕ FINTECH MINIMALISM ---
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fcfcfd' }, 
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#f1f5f9',
  },
  welcomeText: { color: '#94a3b8', fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  userNameText: { color: '#0f172a', fontSize: 20, fontWeight: '800', marginTop: 4, letterSpacing: -0.5 },
  userSubText: { color: '#64748b', fontSize: 11, fontWeight: '500', marginTop: 4 },
  logoutButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: { color: '#64748b', fontSize: 12, fontWeight: '600' },
  scrollContainer: { paddingHorizontal: 20, paddingBottom: 40 },
  
  // Новая свободная и стильная ID-карта
  gpaWidget: {
    backgroundColor: '#0b0f19', // Глубокий премиальный ночной цвет
    borderRadius: 24,
    padding: 24,
    marginTop: 20,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  universityText: { color: '#3b82f6', fontSize: 14, fontWeight: '900', letterSpacing: 1 },
  chipDesign: { width: 36, height: 26, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  
  cardMiddleRow: { marginVertical: 20 },
  universityFullName: { color: '#ffffff', fontSize: 15, fontWeight: '600', letterSpacing: 0.2 },
  
  cardBottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  gpaLabel: { color: '#475569', fontSize: 9, fontWeight: '700', letterSpacing: 1 },
  gpaStatusValue: { color: '#94a3b8', fontSize: 13, fontWeight: '600', marginTop: 4, letterSpacing: 0.5 },
  gpaScore: { color: '#10b981', fontSize: 32, fontWeight: '800', letterSpacing: -1, lineHeight: 34 },
  
  sectionTitle: { color: '#0f172a', fontSize: 12, fontWeight: '800', marginTop: 32, marginBottom: 16, letterSpacing: 0.5 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' },
  
  // Элегантные минималистичные плитки без стикеров
  menuCard: {
    width: cardWidth,
    height: 115,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 4,
    elevation: 1,
  },
  techTag: { fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 4 },
  cardTitle: { color: '#1e293b', fontSize: 14, fontWeight: '700', marginTop: 2 },
  cardDesc: { color: '#94a3b8', fontSize: 11, fontWeight: '500', marginTop: 4 },
});
