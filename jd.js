// 获取当前节点信息
var nodeInfo = $surge.getNodeInfo();
var nodeName = nodeInfo.nodeName;
var nodeIP = nodeInfo.ip;

// 构造请求头
var headers = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1',
  'Host': 'policies.google.com',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'zh-cn',
  'Connection': 'close'
};

// 构造请求
var url = 'https://policies.google.com/terms?hl=zh-CN';
var method = 'GET';
var body = '';
var request = {
  url: url,
  method: method,
  headers: headers,
  body: body
};

// 发送请求
$task.fetch(request).then(response => {
  // 解析文本内容
  var text = $response.body.text();
  var regex = /中国/;
  var isBlocked = regex.test(text);

  // 输出结果
  if (isBlocked) {
    console.log(nodeName + '(' + nodeIP + ')' + ' 已被送中');
  } else {
    console.log(nodeName + '(' + nodeIP + ')' + ' 未被送中');
  }
}, reason => {
  console.log(nodeName + '(' + nodeIP + ')' + ' 请求失败');
});
