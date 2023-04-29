const policyName = "策略组名称"; // 将策略组名称修改为实际的名称

function getNodeList(policyName) {
  const url = "http://localhost:6152/policy_groups/select";
  const method = "POST";
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    key: "policy_groups",
    method: "get_policy_nodes",
    params: [policyName],
  });
  const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body,
  };

  return new Promise((resolve, reject) => {
    $task.fetch(myRequest).then(
      (response) => {
        const nodeList = JSON.parse(response.body).ret;
        resolve(nodeList);
      },
      (reason) => {
        reject(reason.error);
      }
    );
  });
}

function testGoogle(nodeName) {
  const url = "https://policies.google.com/terms?hl=zh-CN";
  const method = "GET";
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
  };
  const body = "";
  const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body,
  };

  return new Promise((resolve, reject) => {
    $task.fetch(myRequest).then(
      (response) => {
        const content = response.body;
        if (content.includes("中国")) {
          console.log(`${nodeName} 已被送中`);
          resolve(true);
        } else {
          console.log(`${nodeName} 未被送中`);
          resolve(false);
        }
      },
      (reason) => {
        console.log(`${nodeName} 检测失败`);
        reject(reason.error);
      }
    );
  });
}

(async () => {
  const nodeList = await getNodeList(policyName);
  for (const node of nodeList) {
    const result = await testGoogle(node.nodeName);
  }
})();
