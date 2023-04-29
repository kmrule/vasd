$task.fetch("https://policies.google.com/terms?hl=zh-CN").then(response => {
    if (response.body.indexOf("中国") !== -1) {
        console.log("当前网络被送中");
    } else {
        console.log("当前网络未被送中");
    }
}, reason => {
    console.log("请求失败");
});
