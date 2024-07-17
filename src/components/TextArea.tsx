import { $fontFamily, $fontSizes, Box } from '@components'
import { useAppTheme } from '@hooks'
import { colors } from '@theme'
import React, { useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native'

interface TextAreaProps extends RNTextInputProps {}

export function TextArea({ value, ...rnTextInputProps }: TextAreaProps) {
  const inputRef = useRef<RNTextInput>(null)
  const { colors } = useAppTheme()

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12"
      >
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, { color: colors.gray1 }]}
          {...rnTextInputProps}
        />
      </Box>
    </Pressable>
  )
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  color: colors.palette.grayBlack,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}
