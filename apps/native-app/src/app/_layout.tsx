import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import { tamaguiConfig } from '../../tamagui.config';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor:
              colorScheme === 'dark'
                ? DarkTheme.colors.background
                : DefaultTheme.colors.background,
          }}
        >
          <Tabs />
        </SafeAreaView>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
