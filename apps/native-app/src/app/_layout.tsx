import { Slot } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Slot />
      </SafeAreaView>
    </>
  );
}
