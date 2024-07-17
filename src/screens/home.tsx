import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes/AppRoutes'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({ navigation }: Props) {
  const [value, setValue] = useState('')

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
    }
  }

  return (
    <View
      style={{
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
        Olá, digite um tema e gere seu devocional personalizado!
      </Text>

      <TextInput
        editable
        multiline
        numberOfLines={4}
        onChangeText={setValue}
        value={value}
        style={{
          width: '100%',
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
        }}
      />

      <TouchableOpacity
        onPress={generateDevotional}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightblue',
          padding: 16,
          borderRadius: 4,
          marginTop: 16,
        }}
      >
        <Text
          style={{
            color: 'blue',
          }}
        >
          Gerar devocional
        </Text>
      </TouchableOpacity>
    </View>
  )
}
