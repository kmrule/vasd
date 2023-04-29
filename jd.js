$task.fetch("https://policies.google.com/terms?hl=zh-CN").then(response => {
    if (response.statusCode == 200) {
        console.log(response.body);
    } else {
        console.log(`请求失败，状态码：${response.statusCode}`);
    }
}, reason => {
    console.log(`请求异常：${reason.error}`);
});
