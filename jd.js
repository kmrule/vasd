$task.fetch({ 
  url: "https://policies.google.com/terms?hl=zh-CN", 
  headers: {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
  } 
}).then(response => {
  if (response.statusCode == 200) {
    if (response.body.indexOf("中国") != -1) {
      console.log("当前节点已被送中");
    } else {
      console.log("当前节点未被送中");
    }
  } else {
    console.log("请求失败，状态码：" + response.statusCode);
  }
}, reason => {
  console.log("请求失败，原因：" + reason.error);
});
