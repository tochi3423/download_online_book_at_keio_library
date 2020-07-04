function downloadFromUrlAutomatically(url, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function (e) {
    if (this.status == 200) {
      var urlUtil = window.URL || window.webkitURL;
      var imgUrl = urlUtil.createObjectURL(this.response);
      var link = document.createElement('a');
      link.href = imgUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    }
  };
  xhr.send();
}

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
for (var i = 0; i < 375; i++) {
  gotoNextPageAction();
  await _sleep(5000);
  downloadFromUrlAutomatically(document.querySelector("#pagepict").getAttribute("src"), `image${i}.png`)
  await _sleep(5000);
}
