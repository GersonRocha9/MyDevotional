import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

import { RootStackParamList } from '../routes/routes'

type Props = NativeStackScreenProps<RootStackParamList, 'Devotional'>

export function DevotionalScreen({ route }: Props) {
  const { devotional } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        Seu devocional personalizado está aqui!
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 16,
        }}
      >
        {devotional}
      </Text>
    </View>
  )
}
