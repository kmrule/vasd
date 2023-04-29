$httpClient.get("https://policies.google.com/terms?hl=zh-CN", function(error, response, data){
  if (error){
    console.log(error);
    $done();
  } else {
    if (data.indexOf("中国") !== -1){
      console.log("该节点已被送中");
    } else {
      console.log("该节点未被送中");
    }
    $done();
  }
});
