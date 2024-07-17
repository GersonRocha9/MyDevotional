import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes/AppRoutes'
import { ScrollView, Text } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Devotional'>

export function DevotionalScreen({ route }: Props) {
  const { devotional } = route.params

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
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
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        {devotional}
      </Text>
    </ScrollView>
  )
}
