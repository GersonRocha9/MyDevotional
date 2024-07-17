import { NavigationProp } from '@react-navigation/native'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { RootStackParamList } from '../routes/routes'

export function HomeScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const [value, setValue] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
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
        onChangeText={(text) => setValue(text)}
        value={value}
        style={{
          width: '100%',
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
        }}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Devotional', {
            devotional: value,
          })
        }
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
