//	ALL THE IMPORTS
import { appId, appSecret, callbackUrl } from './config'
import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: appId,
  secret: appSecret,
  callbackUrl: callbackUrl
});


window.onload = evt => {
  document.querySelector('#hoi').innerHTML = 'HOI'
}
