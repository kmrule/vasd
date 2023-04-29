$task.fetch("https://policies.google.com/terms?hl=zh-CN").then(response => {
    console.log(response.body);
}, reason => {
    console.log(reason.error);
    $done();
});

    
