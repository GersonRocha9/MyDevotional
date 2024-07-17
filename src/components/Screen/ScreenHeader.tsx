import {
  Box,
  BoxProps,
  Text,
  TouchableOpacityBox,
  ScreenProps,
  Icon,
} from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const ICON_SIZE = 20
type Props = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'canShare' | 'HeaderComponent'
> &
  BoxProps
export function ScreenHeader({
  canGoBack,
  canShare,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation()

  if (!title && !canGoBack && !HeaderComponent) {
    return null
  }

  const showBackLabel = !title && !HeaderComponent

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}
    >
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          mr={showBackLabel ? 's10' : undefined}
          onPress={navigation.goBack}
        >
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}

      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}

      {canShare && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={() => {}}
        >
          <Text preset="paragraphMedium" semiBold mr="s8">
            Compartilhar
          </Text>
          <Icon size={ICON_SIZE} name="flashOn" color="primary" />
        </TouchableOpacityBox>
      )}
    </Box>
  )
}
