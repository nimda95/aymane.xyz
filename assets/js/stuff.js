//UI Stuff
window.addEventListener('load', e=>{
    document.body.className = document.body.className.replace(/\bis-preload\b/, '');
});
document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');

//Utilities
let generateQrCode = (textData="https://aymane.xyz/images/wip.png") => {
  return new QRCode("push-setup-qrcode", {
    text: textData,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
};

//Some fancy animation stuff
let showNotificationsPanel = () => {
  let notificaionsPanelContainer = document.querySelector('.push-menu-container');
  notificaionsPanelContainer.style.top = 'auto';
  notificaionsPanelContainer.style.bottom = '15px';
  getStartToken();
}

//Push Notifications Stuff
let firebaseConfig = {
  apiKey: "AIzaSyAYuuyYRq6GD3VRD8ej68pjDGa4GJTv6Dc",
  authDomain: "main-project-b5456.firebaseapp.com",
  databaseURL: "https://main-project-b5456.firebaseio.com",
  projectId: "main-project-b5456",
  storageBucket: "main-project-b5456.appspot.com",
  messagingSenderId: "4105960715",
  appId: "1:4105960715:web:12fd3b737692f0defd360e",
  measurementId: "G-WFQT2Y2BQ9"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onMessage(payload => {
  console.log("Ding! new message..:",payload);
});


/*let isTokensendTokenToServer = () => {
  return window.localStorage.getItem('sendTokenToServer') === '1';
}

let setTokenSentToServer = sent => {
  window.localStorage.setItem('sendTokenToServer', sent ? '1' : '0');
}*/


let getStartToken = () => {
  messaging.getToken().then((currentToken) => {
  if (currentToken) {
    localStorage.setItem("firebasePushToken", currentToken);
    document.querySelector(".push-setup-container>h2").innerHTML = 'Scan this QrCode';
    generateQrCode(currentToken);
  } else {
    requestPermission();
  }
  }).catch((err) => {
    console.error(err);
  });
}
let requestPermission = () => {
  messaging.requestPermission()
  .then(permission => {
    console.log(permission);
    if (permission === 'granted') {
      getStartToken();
    } else {
      document.querySelector(".push-setup-container>h2").innerHTML = 'Permission denied <i class="far fa-frown"></i>';
    }
  }).catch(err => {
    console.error(err);
  })
}
/*document.querySelector('a.fa.fa-envelope').addEventListener('click', e=>{
    e.preventDefault();
    let form = document.querySelector('form.contact-form');
    let socialContainer = document.querySelector('footer.social-container');
    let main = document.querySelector('#main');

    let originalMainHeight = main.offsetHeight + "px";
    socialContainer.style['display'] = 'none';
    form.style['display'] = 'block';
    let targetMainHeight = main.offsetHeight + "px";
    socialContainer.style['display'] = 'block';
    form.style['display'] = 'none';

    setTimeout(()=>{
        main.style['height'] = originalMainHeight;
          socialContainer.style['opacity'] = '0';

        setTimeout(()=>{
            socialContainer.style['display'] = 'none';
            main.style['height'] = targetMainHeight;
            setTimeout(()=>{
                form.style['display'] = 'block';
                setTimeout(()=>{
                    form.style['opacity'] = '1';
                }, 1)
            }, 500)
        }, 500)
    }, 1)
});*/