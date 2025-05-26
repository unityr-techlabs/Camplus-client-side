import "../global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect } from "react";

export default function Layout() {

  const [loaded, error] = useFonts({
    Bold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    BoldItalic: require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
    ExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    ExtraBoldItalic: require('../assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf'),
    ExtraLight: require('../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    ExtraLightItalic: require('../assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf'),
    Italic: require('../assets/fonts/PlusJakartaSans-Italic.ttf'),
    Light: require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    LightItalic: require('../assets/fonts/PlusJakartaSans-LightItalic.ttf'),
    Regular: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    Medium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    MediumItalic: require('../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),
    SemiBold: require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    SemiBoldItalic: require('../assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}
