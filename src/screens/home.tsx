import { Button, Screen, Text, TextArea } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import LottieView from 'lottie-react-native'
import { useRef, useState } from 'react'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({ navigation }: Props) {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const animation = useRef<LottieView>(null)

  const generateDevotional = async () => {
    const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY
    const prompt = `Gere um devocional sobre o tema: ${value}. Inclua um título, um versículo base, 3 tópicos de reflexão com 3 parágrafos cada e uma conclusão.`
    const apiUrl = 'https://api.openai.com/v1/chat/completions'

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: prompt,
        },
      ],
      temperature: 1,
    }

    try {
      setIsLoading(true)
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`)
      }

      const responseData = await response.json()

      navigation.navigate('Devotional', {
        devotional: responseData?.choices[0]?.message?.content,
      })
    } catch (error) {
      console.error('Error fetching AI response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Screen scrollable>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          alignSelf: 'center',
        }}
        source={require('../assets/animations/bible.json')}
      />

      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Bem-vindo ao MyDevotional.
      </Text>

      <Text preset="paragraphMedium" mb="s8">
        Qual o tema do devocional de hoje?
      </Text>

      <TextArea
        placeholder="Escreva o tema do devocional"
        value={value}
        onChangeText={setValue}
      />

      <Button
        loading={isLoading}
        disabled={!value || isLoading}
        onPress={generateDevotional}
        marginTop="s48"
        title="Gerar devocional"
      />
    </Screen>
  )
}
