function testGoogle(pname) {
    return new Promise((resolve, reject) => {
        const url = `https://policies.google.com/terms?hl=zh-CN`;
        const method = `GET`;
        const headers = {
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1`,
            'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
        };
        
        const myRequest = {
            url: url,
            method: method,
            headers: headers,
            //timeout: 3000
        };
        
        $task.fetch(myRequest).then(response => {
            const body = response.body;
            const isCN = /国家\/地区版本：\s*中国/.test(body);
            if (isCN) {
                console.log(`${pname}：该节点已被送中`);
                resolve("YES");
            } else {
                console.log(`${pname}：该节点未被送中`);
                resolve("NO");
            }
        }, reason => {
            console.log(`${pname}：该节点检测失败`);
            reject("Error");
        });
    })
}
