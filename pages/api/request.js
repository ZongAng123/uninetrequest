/**
 *  网络请求封装
 *  20221-12-27 zongang  
 */ 
const api = "https://vtown.pensee168.com/app/yun_shopv2_api.php?"//域名头部

// 请求封装
function sendRequest(url, method, data, header) {
	var promise = new promise(function(resolve, reject){
		uni.showLoading({
			title:'加载中'
		})
		uni.request({
			url: api + url,
			data:data,
			header:header,
			success:function(res){
				uni.hideLoading();
				console.log('接口返回:',res);
				if(res.statusCode == 200){
					resolve(res.data);
				}else{
					resolve(res.data);
				}
			},
			fail:function(res){
				uni.hideLoading();
				console.log('请求失败',res);
			
			}
		})
	})
	return promise;
}

module.exports.sendRequest = sendRequest