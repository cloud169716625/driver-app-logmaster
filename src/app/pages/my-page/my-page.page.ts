import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx'

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.page.html',
  styleUrls: ['./my-page.page.scss'],
})
export class MyPagePage implements OnInit {
  name: string
  time: string
  networkIp: string

  constructor(
    private httpClient: HttpClient,
    private networkInterface: NetworkInterface,
  ) {
    console.log('this is my IP address!!!')
    this.networkInterface
      .getWiFiIPAddress()
      .then((address) =>
        console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`),
      )
      .catch((error) => console.error(`Unable to get IP: ${error}`))

    this.networkInterface
      .getCarrierIPAddress()
      .then((address) => {
        this.networkIp = address.ip
        console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`)
      })
      .catch((error) => console.error(`Unable to get IP: ${error}`))
  }
  ngOnInit() {}

  async handleSubmit() {
    if (this.name) {
      this.httpClient
        .get(`http://${this.networkIp}:1337`, { responseType: 'text' })
        .subscribe(
          (data) => {
            console.log('Response data----->', data)
            this.time = data
          },
          (error) => {
            console.log('Response error----->', error['message'])
          },
        )
    }

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'key=AAAAQemjIuA:APA91bEQ9L7n-qJAjPWFAqeA8FA2qwB8u6M05AHkJjcqEWDToGPAQD7vvniiy6yMHfa6JMRfVRtxfQbiHI26ocyAX0AlbuIXkMySbgrXSUGsUR6NJ-xeTnh7DMqcQaw35FFrD3xxc4br',
      )

    let postData = {
      notification: {
        title: 'Notification',
        body: 'You received a request from Driver app.',
        sound: 'default',
        click_action: 'FCM_PLUGIN_ACTIVITY',
        icon: 'fcm_push_icon',
      },
      collapse_key: 'com.manager.app',
      data: {
        landing_page: 'second',
        price: '$3,000.00',
      },
      to:
        'epPhAT72QYyl2t5Geijxi_:APA91bFLfMT9uHT3IKMS7pPApEUManPzNJ2n3gdacsksxR2NnzasEeaQJfYtE9YBl9KUgaoVTYt5la9etgiR8lT8yLMRnh95fqjk0G83wZV1hAuq5d3us1B6qkc_29FmsTJ7X8Edu7jS',
      android: {
        direct_boot_ok: true,
      },
    }

    if (this.name) {
      this.httpClient
        .post('https://fcm.googleapis.com/fcm/send', postData, {
          headers: headers,
        })
        .subscribe(
          (data) => {
            console.log('Response data----->', data)
          },
          (error) => {
            console.log('Response error----->', error['message'])
          },
        )
    }
  }
}
