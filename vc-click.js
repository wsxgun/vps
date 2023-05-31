function submitVC(datacenter) {

  let obj = document.getElementById('datacenter');
  obj.options.length = 0;
  obj.options.add(new Option(datacenter, datacenter));
  obj.options[0].selected = true;

  document.getElementById('os').options[4].selected = true;
  document.getElementById('password').value = 'wsxgun122518';
  document.getElementById('purpose').options[5].selected = true;
  checks = document.getElementsByName('agreement[]');
  for (var node of checks) {
    node.checked = true;
  }

  let btn = document.getElementsByName('submit_button')[0];
  btn.disabled = false;
  btn.click();

  console.log('------');

}

let data = ['EU1-LON-kvm', 'EU2-HEL-kvm', 'EU3-FSN-kvm', 'EU4-GRA-kvm', 'CA1-BHS-kvm', 'US1-CHI-kvm'];

setInterval(() => {
  data.map(item => submitVC(item));
}, 3000);
