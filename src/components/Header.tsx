import { View } from 'react-native';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 54,
      }}
    >
      {children}
    </View>
  );
}