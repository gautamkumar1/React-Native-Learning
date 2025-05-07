import { Button, Text, TouchableOpacity, View } from "react-native";
import { Image } from 'expo-image';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>Hello Ji</Text> */}
      <Image 
      source="https://images.unsplash.com/photo-1746307415334-8914cae06a28?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      style={{width: 200, height: 200}}
       contentFit="cover"
      />
{/* It is normal button with minimal functionality */}
      <Button title="Click me" onPress={()=>{
        alert("Button clicked")
      }}></Button>

      {/* TouchableOpacity - TouchableOpacity is a component that allows you to create a button that can be pressed. */}
      <TouchableOpacity style={{backgroundColor: "red", padding: 10, borderRadius: 5}} onPress={()=>{
        alert("Button clicked2")
      }}>
        <Text>Touch me</Text>
      </TouchableOpacity>

      
    </View>
  );
}
