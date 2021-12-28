<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{item.name}}</text>
		</view>

		<button type="primary"  @tap="get()">跳转</button>
		
		<view class="unipadding" >
		    <span>{{item.name}}</span>
		    <span>{{item.nick}}</span>
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
            
            
		},
		methods: {
			get:function(){
				// uni.switchTab({
				// 	url: '/pages/home/home'
				// });
				uni.reLaunch({
				    url: '/pages/home/home'
				});
				// 获取城市定位
				// uni.request({
				// 	// url：是必须的，也就是我们的API接口。
				// 	// https://geoapi.qweather.com/v2/city/lookup?location=shenzhen&key=4f27ec65289e43bab0a934a74f49f681
				// 	url:"https://unidemo.dcloud.net.cn/api/news",
				// 	method:"GET",//method：请求方法，少量信息用get，大量数据、加密类用post
				// 	header:{ //header：请求头信息
				// 		"content-type":"application/json"
				// 	},
				// 	success:function(res){
				// 		// success:请求数据成功后的返回
				// 		console.log("++++++02+++++++++++++");
				// 		console.log(res.data);
				// 		this.itemList = res.data;
				// 	}
				// })
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
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
