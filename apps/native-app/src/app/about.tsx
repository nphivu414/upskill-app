import { Link } from 'expo-router';
import { Text, YStack } from 'tamagui';

export default function About() {
  return (
    <YStack>
      <Text>about</Text>
      <Link push href="/">
        Home
      </Link>
    </YStack>
  );
}
