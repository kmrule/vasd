// ==Quantumult X Script==
// @name            Google Policy Check
// @description     Check if the current node is detected by Google using policy page.
// @author          ChatGPT
// @version         1
// @homepage        https://github.com/chatgpt
// @icon            url-to-icon
// @compatibility   Quantumult X (v1.0.5-build186)
// ==/Quantumult X Script==

// Step 1: 准备工作
const policyUrl = "https://policies.google.com/terms?hl=zh-CN";
const reqHeaders = {"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1"};

// Step 2: 发送请求并解析响应
$httpClient.get(policyUrl, {"headers": reqHeaders}, (error, response, data) => {
    if (error) {
        console.error(`请求 ${policyUrl} 失败，错误信息：${error}`);
        $done();
    }
    if (response.status != 200) {
        console.error(`请求 ${policyUrl} 失败，响应状态码：${response.status}`);
        $done();
    }

    // Step 3: 分析响应内容
    const content = response.body;
    if (content.indexOf("中国") != -1) {
        console.log("当前节点被 Google 检测到了！");
    } else {
        console.log("当前节点未被 Google 检测到。");
    }

    // Step 4: 结束脚本
    $done();
});
