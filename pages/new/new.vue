<template>
	<view class="content">
		<view class="text-area">
			<text class="title" v-for="(item,index) in itemList">{{item.name}}</text>
		</view>
     <view>
        <!-- <web-view :webview-styles="webviewStyles" src="https://h5.leoao.com/render/prod/d/h/5mxsjf/YoILsyDMgc.html?lk-tenantid=1"></web-view> -->
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				itemList: [],//在data里面写一个空数组itemList: []，接收api里面返回的数据
			}
		},
		onLoad() {
	        // this.get();
	        this.getHome();
		},
		methods: {
			get:function(){
				// 获取城市定位
				uni.request({
					// url：是必须的，也就是我们的API接口。
					// https://geoapi.qweather.com/v2/city/lookup?location=shenzhen&key=4f27ec65289e43bab0a934a74f49f681
					url:"https://geoapi.qweather.com/v2/city/lookup?location=shenzhen&key=4f27ec65289e43bab0a934a74f49f681",
					method:"GET",//method：请求方法，少量信息用get，大量数据、加密类用post
					header:{ //header：请求头信息
						"content-type":"application/json"
					},
					success:function(res){
						// success:请求数据成功后的返回
						console.log("++++++02+++++++++++++");
						console.log(res.data);
						this.itemList = res.data;
					}
				})
			},
			
			getHome:function(){
				const obj = {
								method: 'POST',
								url: 'machine/index',
								data: {
									token: true,
									keyword:''
								}
							}
							this.Http.HttpRequest(obj).then(res => {
								console.log(JSON.stringify(res))
								uni.showToast({
									title: "success",
									icon:'none'
								});
							})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
