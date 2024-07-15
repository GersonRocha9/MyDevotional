import { Button, Text, View } from 'react-native'

export function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Devotional</Text>

      <Button title="Go to Devotional" onPress={() => navigation.navigate('Devotional')} />
    </View>
  )
}
