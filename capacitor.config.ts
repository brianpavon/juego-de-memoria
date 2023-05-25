import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'juego-de-memoria',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    SplashScreen:{
      launchShowDuration: 1500
    }
  }
};

export default config;
