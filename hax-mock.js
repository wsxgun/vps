function postHax(datacenter) {

  const iframe = document.getElementsByClassName('h-captcha mb-3')[0].children[0];

  const interval = setInterval(function() {
    console.log('获取验证。。。。。。');
    let cha = iframe.getAttribute('data-hcaptcha-response');
    if (cha) {
      clearInterval(interval);
      submit(datacenter, cha);
    }
  }, 500);
}

function submit(datacenter, cha) {

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', document.cookie);

  const urlencoded = new URLSearchParams();
  datacenter = document.getElementById('datacenter').options[1].value;
  urlencoded.append('location', datacenter);
  urlencoded.append('os', 'centos-7.9');
  urlencoded.append('password', 'wsxgun122518');
  urlencoded.append('purpose', 'others');
  urlencoded.append('agreement[]', 'yes');
  urlencoded.append('agreement[]', 'yes');
  urlencoded.append('agreement[]', 'yes');
  urlencoded.append('agreement[]', 'yes');
  urlencoded.append('agreement[]', 'yes');
  urlencoded.append('g-recaptcha-response', cha);
  urlencoded.append('h-captcha-response', cha);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch('https://hax.co.id/create-vps-process', requestOptions)
    .then(response => console.log(response.text()))
    .then(result => {
      console.log('--------' + result);
     // location.reload();
    })
    .catch(error => {
      console.log('error', error);
    });
}

// function tryAgain(datacenter) {
//   setTimeout(() => {
//     const form = document.getElementById('form-submit');
//     form.style.display = 'block';
//     postHax(datacenter);
//   }, 500);
// }

postHax('US-OpenVZ-3');

