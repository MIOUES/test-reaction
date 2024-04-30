<template>
    <div
        class="container" @click="Game" :class="[bgc]">
        <!-- 开始状态 -->
        <div v-if="station === 1"> 
            <h1>测试你的反应力</h1>
            <p>点击开始，当本框变为绿色后单击</p>
        </div>
        <!-- 等待状态 -->
        <div v-if="station === 2">
            <h1>等待绿色</h1>
        </div>
        <!-- 点击状态 -->
        <div v-if="station === 3">
            <h1>点击</h1>
        </div>
        <!-- 结算状态 -->
        <div v-if="station === 4">
            <h1>{{ TimeDifference }}ms</h1>
            <el-button type="primary" size="small">记录分数</el-button>
            <p>点击重新开始，当本框变为绿色后单击</p>
        </div>
        <!-- 失败状态 -->
        <div v-if="station === 5">
            <h1>点击太早了</h1>
            <p>点击重新开始，当本框变为绿色后单击</p>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                station: 1,
                bgc: 'bgc-blue',
                timer: null,
                // 开始时间
                start: 0,
                // 结束时间
                end: 0,
            }
        },
        methods: {
            Game () {
                if ( this.station === 1 ) { // 初始进入等待
                    this.bgc = 'bgc-red';
                    this.station = 2;
                    this.Wait();
                } else if ( this.station === 2 ) { // 等待进入失败
                    this.bgc = 'bgc-red';
                    this.station = 5;
                    // 销毁定时器
                    clearTimeout(this.timer);
                } else if ( this.station === 3 ) { // 点击进入结算
                    // 记录结束时间
                    this.end = new Date().getTime();

                    this.bgc = 'bgc-blue'
                    this.station = 4;
                } else if ( this.station === 4 ) { // 结算进入等待
                    this.bgc = 'bgc-red'
                    this.station = 2;
                    this.Wait();
                } else if ( this.station === 5 ) { // 失败进入等待
                    this.bgc = 'bgc-red'
                    this.station = 2;
                    this.Wait();
                }
            },
            Wait () {
                
                // 随机延时触发函数
                this.timer = setTimeout(() => {
                    this.BeGreen();
                }, Math.random() * 1000 + 1000);
            },
            BeGreen () {
                if ( this.station === 2 ) {
                    this.bgc = 'bgc-green';
                    this.station = 3;
                    // 记录开始时间
                    this.start = new Date().getTime();
                }
            },
        },
        computed: {
            // 计算时间差
            TimeDifference () {
                console.log(this.end, this.start);
                return this.end - this.start;
            }
        },
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: white;
    font-size: 30px;
    p {
        font-size: 20px;
        margin-top: 20px;
    }
    @media (max-width: 768px) {
        font-size: 30px;
        p {
            font-size: 15px;
        }
    }
}
.bgc-blue {
    background-color: skyblue;
}
.bgc-red {
    background-color: red;
}
.bgc-green {
    background-color: green;
}

</style>