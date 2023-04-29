// 添加自定义请求头
var options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  },
  timeout: 5000 // 设置超时时间为 5 秒
};

// 发送 HTTPS 请求
$httpClient.get('https://policies.google.com/terms?hl=zh-CN', options, function(error, response, data) {
  if (error) {
    $notification.post('请求出错', error, '');
    return;
  }

  // 解析 HTML 文档
  var doc = $($.parseHTML(data));
  
  // 获取指定路径下的文本内容
  var text = doc.find('#yDmH0d c-wiz div:nth-child(2) div:nth-child(4) div:nth-child(4) c-wiz div:nth-child(1) div:nth-child(2) p:nth-child(2)').text();

  // 判断文本内容是否包含 "中国"
  if (text.includes('中国')) {
    $notification.post('结果', '是中国：' + text, '');
  } else {
    $notification.post('结果', '不是中国：' + text, '');
  }
});
