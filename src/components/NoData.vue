<template>
    <div id="no-data">
      <div v-if="item.length ===0 || JSON.stringify(item) === '{}' || JSON.stringify(item) === '[]'" :style="style">
        <div @click="loadFun" :style="refresh">
          <img :src="imgSrc" :style="imgStyle"/>
          <span>刷新</span>
        </div>
      </div>
    </div>
</template>

<script>
  import NoDataImg from '../assets/img/no-data.png'
  import RefreshImg from '../assets/img/refresh.png'

  export default {
    props: ['item', 'load'],
    data () {
      return {
        style: {
          background: `url(${NoDataImg}) 50% 28% no-repeat`,
          backgroundSize: '35%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px',
          fontFamily: 'Microsoft YaHei',
          lineHeight: '45px',
          width: '100%',
          height: screen.availHeight * 0.65 + 'px'
        },
        imgSrc: RefreshImg,
        imgStyle: {width: '28px', height: '28px'},
        refresh: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '0',
          boxSizing: 'border-box',
          color: '#218ff1'
        }
      }
    },
    created: function () {},
    methods: {
      loadFun: function () {
        if (typeof (this.load) === 'function') {
          this.load()
        }
      }
    }
  }
</script>

<style lang="less">
#no-data {

}
</style>
