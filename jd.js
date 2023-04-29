// 定义请求头
const headers = {
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Host': 'www.google.com',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
};

// 发送 HTTP 请求
$task.fetch({
  url: 'https://policies.google.com/terms?hl=zh-CN',
  headers: headers
}).then(response => {
  // 解析 HTML 文档
  var doc = $($.parseHTML(response.body));

  // 获取指定路径下的文本内容
  var text = doc.find('#yDmH0d c-wiz div:nth-child(2) div:nth-child(4) div:nth-child(4) c-wiz div:nth-child(1) div:nth-child(2) p:nth-child(2)').text();

  // 判断文本内容是否包含 "中国"
  if (text.includes('中国')) {
    $notification.post('结果', '是中国：' + text, '');
  } else {
    $notification.post('结果', '不是中国：' + text, '');
  }
}, reason => {
  // 处理请求错误
  $notification.post('请求出错', reason.error, '');
});
