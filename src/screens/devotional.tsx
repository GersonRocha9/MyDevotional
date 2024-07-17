import { Screen, Text } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import Markdown from 'react-native-markdown-display'

type Props = NativeStackScreenProps<RootStackParamList, 'Devotional'>

export function DevotionalScreen({ route }: Props) {
  const { devotional } = route.params

  return (
    <Screen canGoBack scrollable canShare={devotional}>
      <Text preset="headingMedium" mb="s24">
        Esse é o devocional gerado para você:
      </Text>

      <Markdown
        style={{
          body: {
            fontFamily: 'Satoshi-Regular',
            fontSize: 16,
            lineHeight: 24,
          },
        }}
      >
        {devotional}
      </Markdown>
    </Screen>
  )
}
