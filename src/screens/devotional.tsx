import { Screen, Text } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import Markdown from 'react-native-markdown-display'

type Props = NativeStackScreenProps<RootStackParamList, 'Devotional'>

export function DevotionalScreen({ route }: Props) {
  const { devotional } = route.params

  return (
    <Screen canGoBack scrollable canShare>
      <Text preset="headingSmall" mb="s32">
        Esse é o devocional gerado para você:
      </Text>

      <Markdown>{devotional}</Markdown>
    </Screen>
  )
}
