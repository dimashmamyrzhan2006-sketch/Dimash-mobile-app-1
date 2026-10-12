import React, { useState } from 'react';
import { Alert } from 'react-native';

// Импортируем разделенные экраны из вашей папки components
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  // Навигация: 'auth' (экран входа/регистрации) или 'profile' (экран личного кабинета)
  const [currentScreen, setCurrentScreen] = useState<'auth' | 'profile'>('auth');
  
  // Режим внутри авторизации: false — Вход (Кіру), true — Регистрация (Тіркелу)
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Данные полей ввода
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Локальная база данных (сохраняет аккаунты в оперативной памяти приложения)
  const [usersDb, setUsersDb] = useState<{ [key: string]: string }>({
    'dimash': '12345' // Аккаунт по умолчанию для проверки входа
  });

  // Логика строгой проверки при нажатии на главную кнопку формы
  const handleAuthSubmit = () => {
    const user = login.trim().toLowerCase();
    const pass = password.trim();

    // 1. Проверка на пустые поля
    if (user === '' || pass === '') {
      Alert.alert('Қате', 'Логин мен пароль өрістерін толтырыңыз!');
      return;
    }

    // 2. Проверка длины пароля
    if (pass.length < 4) {
      Alert.alert('Қате', 'Пароль кем дегенде 4 таңбадан тұруы керек!');
      return;
    }

    const accountExists = usersDb[user] !== undefined;

    if (isSignUpMode) {
      // СЦЕНАРИЙ: РЕГИСТРАЦИЯ
      if (accountExists) {
        Alert.alert('Қате', 'Бұл логин бұрыннан тіркелген! Кіру режиміне өтіңіз.');
        return;
      }
      setUsersDb(prevDb => ({ ...prevDb, [user]: pass }));
      Alert.alert('Сәтті', `Жаңа аккаунт "${login}" сәтті тіркелді!`);
      setCurrentScreen('profile');
    } else {
      // СЦЕНАРИЙ: ВХОД (Доработанная и безопасная логика)
      if (accountExists && usersDb[user] === pass) {
        // Пропускаем в систему только если аккаунт есть и пароль строго совпал
        Alert.alert('Сәтті', 'Жүйеге кіру сәтті орындалды!');
        setCurrentScreen('profile');
      } else {
        // Универсальная ошибка: если логин не найден ИЛИ пароль не подошел
        Alert.alert('Қате', 'Енгізілген логин немесе пароль қате!');
      }
    }
  };

  // Логика кнопки Выхода из аккаунта
  const handleLogout = () => {
    setCurrentScreen('auth');
    setLogin('');
    setPassword('');
    setIsSignUpMode(false);
  };

  // Переключение отображения файлов-экранов
  if (currentScreen === 'auth') {
    return (
      <LoginScreen 
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        handleAuthSubmit={handleAuthSubmit}
        isSignUpMode={isSignUpMode}
        setIsSignUpMode={setIsSignUpMode}
      />
    );
  }

  return (
    <ProfileScreen 
      login={login}
      handleLogout={handleLogout}
    />
  );
}
