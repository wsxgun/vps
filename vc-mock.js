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


postVC('EU1-LON-kvm');
postVC('EU3-FSN-kvm');
postVC('CA1-BHS-kvm');
postVC('US3-CHI-kvm');

