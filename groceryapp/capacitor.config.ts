import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.groceryapp',
  appName: 'groceryapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
