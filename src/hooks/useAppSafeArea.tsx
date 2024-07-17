import { useAppTheme } from '@hooks'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets()
  const { spacing } = useAppTheme()

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  }
}
