// ==圈X配置==
// [General]
// 标题=测试脚本
// 程序=js
// 版本=1.0
// 长期缓存=true

// [Script]
// http-request https://policies.google.com/terms?hl=zh-CN script-path=https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Scripting/gp.js,requires-body=true
// ==圈X配置==

// 前置准备
var url = $request.url;
var method = $request.method;
var headers = $request.headers;
var body = $request.body;

// 请求页面
$http.request({
    method: method,
    url: url,
    headers: headers,
    body: body
}, function(error, response, data){
    if (error) {
        console.log(error);
        $done();
    } else {
        console.log(data);
        $done();
    }
});
