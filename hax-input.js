function inputInfo() {
  document.getElementById('datacenter').options[1].selected = true;
  document.getElementById('os').options[2].selected = true;
  document.getElementById('password').value = 'wsxgun122518';
  document.getElementById('purpose').options[5].selected = true;
  checks = document.getElementsByName('agreement[]');
  for (var node of checks) {
    node.checked = true;
  }

  console.log('---------------------------');
 
}

inputInfo();
