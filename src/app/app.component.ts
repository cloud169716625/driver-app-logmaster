import { Component } from '@angular/core'
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx'
import { Injectable } from '@angular/core'
import { FCM } from '@awesome-cordova-plugins/fcm/ngx'
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  constructor(
    private backgroundMode: BackgroundMode,
    private fcm: FCM,
    public platform: Platform,
  ) {
    // running on background mode
    document.addEventListener(
      'deviceready',
      function () {
        this.backgroundMode.setEnabled(true)
        // cordova.plugins.backgroundMode is now available
      },
      false,
    )

    this.backgroundMode.on('activate')
    this.backgroundMode.disableWebViewOptimizations()

    // firebase push notifiction
    this.fcm.subscribeToTopic('marketing')

    this.fcm.getToken().then((token) => {
      // backend.registerToken(token);
    })

    this.fcm.onNotification().subscribe((data) => {
      console.log('received', data)
      if (data.wasTapped) {
        console.log('Received in background')
      } else {
        console.log('Received in foreground')
      }
    })

    this.fcm.onTokenRefresh().subscribe((token) => {
      // backend.registerToken(token);
    })

    this.fcm.hasPermission().then((hasPermission) => {
      if (hasPermission) {
        console.log('Has permission!', hasPermission)
      }
    })

    this.fcm.clearAllNotifications()

    this.fcm.unsubscribeFromTopic('marketing')
  }
}
