import { Box, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'
import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { ScrollViewContainer, ViewContainer } from './ScreenContainer'
import { ScreenHeader } from './ScreenHeader'

export interface ScreenProps extends BoxProps {
  children: React.ReactNode
  HeaderComponent?: React.ReactNode
  canShare?: string
  canGoBack?: boolean
  scrollable?: boolean
  title?: string
  noPaddingHorizontal?: boolean
}

export function Screen({
  children,
  canShare = '',
  canGoBack = false,
  scrollable = false,
  noPaddingHorizontal = false,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea()
  const { colors } = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          <ScreenHeader
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            canShare={canShare}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
