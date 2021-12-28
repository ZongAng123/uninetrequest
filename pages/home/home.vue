<template>
	<view>	
		<uni-list  v-for="(item,index) in itemList" :key="index">		
		<uni-list-item :title="item.author_name"  :note="item.title" :thumb="item.author_avatar" :link="reLaunch" link to="/pages/home/homedetail" @click="onClick($event,1)"></uni-list-item>	  		 
		<!-- <uni-load-more :status="more"></uni-load-more> -->
		</uni-list>
		
		</view>
</template>

<script>

export default {
	data(){
		return {
			title: 'Hello',
			itemList: [],//在data里面写一个空数组itemList: []，接收api里面返回的数据
		}
	},
	onLoad() {
		this.getList();
	},
	methods: {			
				getList() {			
					uni.request({
						url: "https://unidemo.dcloud.net.cn/api/news",					
						method: 'get',
						dataType: 'json',
						success: (res) => {
							console.log(res.data);
							this.itemList = res.data;
						},					
					});
				},
			}
}
</script>

<style>
</style>
