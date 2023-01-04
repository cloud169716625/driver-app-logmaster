import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.driver.app',
  appName: 'driver_app',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
}

export default config
