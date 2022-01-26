import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAIigBCYzwUEh3HeS_cN7HbJJiiEaEGUeM",
  authDomain: "mealstogo-33b8f.firebaseapp.com",
  projectId: "mealstogo-33b8f",
  storageBucket: "mealstogo-33b8f.appspot.com",
  messagingSenderId: "415272132647",
  appId: "1:415272132647:web:bd3bb5a9402238e8df6e02",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
