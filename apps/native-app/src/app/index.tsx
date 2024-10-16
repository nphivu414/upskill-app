import React, { useRef } from 'react';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { Button, ScrollView, YStack } from 'tamagui';

export default function App() {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      backgroundColor="$background"
      contentInsetAdjustmentBehavior="automatic"
    >
      <YStack padding="$3" gap="$3">
        <Button alignSelf="center">Hello world</Button>
        <Link push href="/about">
          About
        </Link>
      </YStack>
    </ScrollView>
  );
}
