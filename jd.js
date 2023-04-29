let isFinished = false;

function testGoogle() {
    return new Promise((resolve, reject) => {
        const url = 'https://policies.google.com/terms?hl=zh-CN';
        const method = 'GET';
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        };

        $task.fetch({ url: url, method: method, headers: headers }).then(response => {
            const body = response.body;
            const isBlocked = body.includes('中国');
            console.log(`当前节点 ${$task.name} ${isBlocked ? '已被送中' : '未被送中'}`);

            if (isFinished) {
                return;
            }

            if ($task.running === false) {
                console.log('任务已被手动停止');
                isFinished = true;
                reject();
            } else {
                setTimeout(() => {
                    testGoogle().then(resolve, reject);
                }, 1000);
            }
        }, reason => {
            console.log(`节点 ${$task.name} 检测失败`);
            if (isFinished) {
                return;
            }

            if ($task.running === false) {
                console.log('任务已被手动停止');
                isFinished = true;
                reject();
            } else {
                setTimeout(() => {
                    testGoogle().then(resolve, reject);
                }, 1000);
            }
        });
    });
}

function main() {
    const nodeList = $node.filter(n => n.type === 'http' && n.policy === $task.policy);
    console.log(`共有 ${nodeList.length} 个节点需要测试`);
    if (nodeList.length === 0) {
        console.log('没有找到任何符合条件的节点');
        return;
    }

    let promiseList = [];
    for (let i = 0; i < nodeList.length; i++) {
        promiseList.push(testGoogle());
    }

    Promise.all(promiseList).then(() => {
        console.log('所有节点测试完成');
    }, () => {
        console.log('测试被手动停止');
    });
}

main();
