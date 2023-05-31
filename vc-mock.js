function postVC(datacenter) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', document.cookie);

  const urlencoded = new URLSearchParams();
  urlencoded.append('type', 'create-vps');
  urlencoded.append('datacenter', datacenter);
  urlencoded.append('os', '4');
  urlencoded.append('vpspassword', 'wsxgun122518');
  urlencoded.append('purpose', '5');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch('https://free.vps.vc/post', requestOptions)
    .then(response => console.log(response.text()))
    .then(result => console.log('--------' + result))
    .catch(error => console.log('error', error));
}

let data = ['EU1-LON-kvm', 'EU2-HEL-kvm', 'EU3-FSN-kvm', 'EU4-GRA-kvm', 'CA1-BHS-kvm', 'US1-CHI-kvm'];

setInterval(() => {
  data.map(item => postVC(item));
}, 2000);


// postVC('US3-CHI-kvm');
