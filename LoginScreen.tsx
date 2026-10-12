import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Описываем, какие данные этот экран принимает от главного файла App.tsx
interface LoginProps {
  login: string;
  setLogin: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  handleAuthSubmit: () => void;
  isSignUpMode: boolean;
  setIsSignUpMode: (val: boolean) => void;
}

export default function LoginScreen({
  login,
  setLogin,
  password,
  setPassword,
  handleAuthSubmit,
  isSignUpMode,
  setIsSignUpMode
}: LoginProps) {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <StatusBar style="light" />
      
      {/* Логотип приложения */}
      <View style={styles.loginHeader}>
        <Text style={styles.loginLogo}>Campus Hub</Text>
        <Text style={styles.loginSubtitle}>Смарт-Авторизация</Text>
      </View>

      {/* Белая карточка формы */}
      <View style={styles.formContainer}>
        
        {/* Индикатор текущего режима (Кіру или Тіркелу) */}
        <View style={styles.modeTabs}>
          <TouchableOpacity 
            style={[styles.tab, !isSignUpMode ? styles.activeTab : null]} 
            onPress={() => setIsSignUpMode(false)}
          >
            <Text style={[styles.tabText, !isSignUpMode ? styles.activeTabText : null]}>Кіру</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, isSignUpMode ? styles.activeRegisterTab : null]} 
            onPress={() => setIsSignUpMode(true)}
          >
            <Text style={[styles.tabText, isSignUpMode ? styles.activeTabText : null]}>Тіркелу</Text>
          </TouchableOpacity>
        </View>

        {/* Поле ввода Логина */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Студенттік логин немесе Email" 
            placeholderTextColor="#94a3b8"
            value={login}
            onChangeText={setLogin}
            autoCapitalize="none"
          />
        </View>

        {/* Поле ввода Пароля */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Пароль" 
            placeholderTextColor="#94a3b8"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Главная кнопка действия */}
        <TouchableOpacity 
          style={[styles.loginButton, isSignUpMode && { backgroundColor: '#10b981' }]} 
          onPress={handleAuthSubmit}
        >
          <Text style={styles.loginButtonText}>
            {isSignUpMode ? 'Аккаунт тіркеу' : 'Порталға кіру'}
          </Text>
        </TouchableOpacity>

        {/* Ссылка-переключатель снизу */}
        <TouchableOpacity 
          style={styles.switchButton} 
          onPress={() => setIsSignUpMode(!isSignUpMode)}
        >
          <Text style={styles.switchButtonText}>
            {isSignUpMode ? 'Аккаунтыңыз бар ма? Кіру' : 'Аккаунтыңыз жоқ па? Тіркелу'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: { flex: 1, backgroundColor: '#1e3a8a', justifyContent: 'center', paddingHorizontal: 28 },
  loginHeader: { alignItems: 'center', marginBottom: 32 },
  loginLogo: { color: '#ffffff', fontSize: 34, fontWeight: '900', letterSpacing: 0.5 },
  loginSubtitle: { color: '#93c5fd', fontSize: 15, marginTop: 6, fontWeight: '500' },
  formContainer: { backgroundColor: '#ffffff', borderRadius: 24, padding: 24, gap: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 8 },
  
  modeTabs: { flexDirection: 'row', backgroundColor: '#f1f5f9', borderRadius: 12, padding: 4, marginBottom: 8 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  activeTab: { backgroundColor: '#2563eb' },
  activeRegisterTab: { backgroundColor: '#10b981' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#64748b' },
  activeTabText: { color: '#ffffff' },

  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 14, paddingHorizontal: 16, height: 54 },
  inputIcon: { fontSize: 18, marginRight: 12 },
  input: { flex: 1, color: '#0f172a', fontSize: 15, fontWeight: '500' },
  loginButton: { backgroundColor: '#2563eb', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 6 },
  loginButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  switchButton: { alignItems: 'center', marginTop: 8, paddingVertical: 4 },
  switchButtonText: { color: '#2563eb', fontSize: 14, fontWeight: '600' },
});
