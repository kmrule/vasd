// ==[Script File]==
// @name            Google Policies Page Content
// @description     Request the Google policies page and output the content
// @icon            url-to-icon
// @category        Utility
// @version         1
// ==[End Script]==

// Request the Google policies page
$http.get({
  url: 'https://policies.google.com/terms?hl=zh-CN',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1'
  }
}, (error, response, data) => {
  if (error) {
    console.log('Error:', error);
    $done();
  } else {
    // Output the content of the page
    console.log(data);
    $done();
  }
});
