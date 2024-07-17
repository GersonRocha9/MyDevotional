import { useAppTheme } from '@hooks'
import { ThemeColors } from '@theme'
import React from 'react'
import { Pressable } from 'react-native'

import { ArrowLeftIcon } from '../assets/icons/ArrowLeftIcon'
import { FlashOnIcon } from '../assets/icons/FlashOnIcon'

export interface IconBase {
  size?: number
  color?: string
  fillColor?: string
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  flashOn: FlashOnIcon,
}

type IconType = typeof iconRegistry

type IconName = keyof IconType

export interface IconProps {
  name: IconName
  color?: ThemeColors
  fillColor?: ThemeColors
  size?: number
  onPress?: () => void
}
export function Icon({
  name,
  color = 'backgroundContrast',
  fillColor = 'background',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme()
  const SVGIcon = iconRegistry[name]

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  }

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    )
  }

  return <SVGIcon {...iconProps} />
}
