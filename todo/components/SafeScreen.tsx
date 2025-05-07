import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const SafeScreen = ({children}: {children: React.ReactNode}) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-[#1111]">
      {children}
    </View>
  )
}

export default SafeScreen