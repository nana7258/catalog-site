// カタログ名 → PDF URL の対応表
const catalogUrls = {
  "アスファルト防水仕様書": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjMxNjksImNhdGVnb3J5TnVtIjo1MTgxM30=&pNo=1",
  "アスレイヤC": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5NTYsImNhdGVnb3J5TnVtIjo1MTgxM30=&pNo=1",
  "ガムクール": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjMxNjAsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "ポリマリット": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5OTksImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "オルタックエース": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjMyNDksImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "GO-JIN": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM4NzksImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "オルタックサンキュア": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5NjMsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "エクスパンド": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5NjIsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "オルタックスプレー": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5NjUsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "ビュートップ": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjMyNTEsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "シングル": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5ODMsImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1",
  "ビュージスタ": "https://tajima.actibookone.com/content/detail?param=eyJjb250ZW50TnVtIjo1MjM5ODksImNhdGVnb3J5TnVtIjoiNTE4MTMifQ==&pNo=1"
};

document.getElementById('catalog-select').addEventListener('change', function() {
  const selected = this.value;
  const iframe = document.getElementById('catalog-frame');

  if (catalogUrls[selected]) {
    iframe.src = catalogUrls[selected];
  } else {
    iframe.src = "";
  }
});
