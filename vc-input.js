function submitVC() {
  let index = document.getElementById('datacenter').options.length -1;
  document.getElementById('datacenter').options[index].selected = true;
  document.getElementById('os').options[4].selected = true;
  document.getElementById('password').value = 'wsxgun122518';
  document.getElementById('purpose').options[5].selected = true;
  checks = document.getElementsByName('agreement[]');
  for (var node of checks) {
    node.checked = true;
  }

  //let btn = document.getElementsByName('submit_button')[0];
  //btn.disabled = false;
  //btn.click();

  console.log('------');

}

submitVC();


