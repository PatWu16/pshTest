<template>
  <div id="feedback">
    <common-header title="一键反馈"></common-header>
    <group>
      <cell title="客服电话">
        <div slot="value">
          <a href="tel:13764567708">13764567708</a>
        </div>
      </cell>
      <cell title="客服邮箱">
        <div slot="value">CASE@ashcroft.com</div>
      </cell>
    </group>
    <group title="上传图片">
      <div class="photo">
        <div class="imgItem" v-for="(item,index) in defaultRiskHiddenAdd.RiskHiddenBeforePhotosPath">
          <img :src="(item.url.indexOf('http://') > -1 ? item.url : `${baseUrl}${item.url}`)" alt="">
          <div class="delete" @click="deletePhoto(index)"><Icon slot="icon" :name="'delete-icon'" /></div>
        </div>

        <div class="imgItem" v-if="defaultRiskHiddenAdd.RiskHiddenBeforePhotosPath.length < 6 && defaultRiskHiddenAdd.RiskChangedAfterPhotosPath.length < 6">
          <div class="fileBox">
            <div class="fileBoxs">
              <input class="fileBtn" @change="changeFile" type="file" accept="image/*" ref="fileBtn" >
            </div>
          </div>
        </div>
      </div>
    </group>
    <group>
      <x-textarea :max="200" :rows="5" autosize placeholder="问题描述"></x-textarea>
    </group>
    <box gap="30px 10px 10px">
      <x-button type="primary">提交</x-button>
    </box>
  </div>
</template>

<script>
  import { Cell, Group, XTextarea, XButton, Box } from 'vux'
  import CommonHeader from '../../components/Header.vue'
  import { baseUrl } from '../../utils/subei_config'
  import { mapMutations } from 'vuex'

  export default {
    components: {
      CommonHeader,
      Cell,
      Group,
      XTextarea,
      XButton,
      Box
    },
    data () {
      return {
        baseUrl: baseUrl,
        defaultRiskHiddenAdd: {
          RiskHiddenBeforePhotosPath: [],
          RiskChangedAfterPhotosPath: []
        }
      }
    },
    methods: {
      ...mapMutations([
        'updateLoadingStatus'
      ]),
      deletePhoto (index) {

         /* this.openConfirm({state:true,msg:'确定要删除吗',control:()=>{
          this.defaultRiskHiddenAdd.RiskHiddenBeforePhotosPath.splice(index,1);
           console.log(this.RiskHiddenBeforePhotos);
         }}); */

      },
      changeFile () {
        /* this.files = this.$refs.fileBtn.files[0];

        if(this.files){
          let formData = new FormData();
          formData.append("file", this.files);

          this.updateLoadingStatus({isLoading: true})

          this.postUploadPhoto({type:'RiskHidden',formData: formData}).then((res)=>{

            res.info.path = (res.info.path.indexOf('https://') > 0 ? res.info.path:`${param_baseUrls}${res.info.path}`);
            this.defaultRiskHiddenAdd.RiskHiddenBeforePhotosPath.push({
              name:res.info.name,
              url:res.info.path,
            });

            this.updateLoadingStatus({isLoading: false})

          });
        } */
      }
    }
  }
</script>

<style lang="less">
#feedback {
  .weui-cell__ft {
    color: #333;
  }

  .photo{
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    .imgItem{
      width: 6rem;
      height: 6rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin:5px;
      box-sizing: border-box;
      position: relative;
      .delete{
        position: absolute;
        top: 5px;
        right: 5px;
      }
      img{
        height:100%;
      }
    }
  }
  .next{
    border-top: 1px solid #f1f1f1;
    box-sizing: border-box;
    padding:15px;
  }
  .edit{
    background: #fff;
    height:100%;
  }
  .addImg{
    width: 100%;
    height:100%;
    border:1px solid #218ff1;
    padding: 10px;
    box-sizing: border-box;
    background: url('../../assets/img/add-icon.png') 50% 50% no-repeat #fff;
  }
  .footer{
    box-sizing: border-box;
    padding: 50px 15px 15px;
  }

  .fileBox{
    watch:100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    .fileBoxs{
      watch:100%;
      height: 100%;
      display: flex;
      input{
        box-sizing: border-box;
      }
    }
  }
  .fileBtn{
    background: url('../../assets/img/add-icon.png') 50% 50% no-repeat #fff;
    background-size:60%;
    width:100%;
    height:100%;
    border: 1px solid #218ff1;
    color: #218ff1;
  }
  ::-webkit-file-upload-button {
    display:none;
    padding: .4em;
    line-height: 30px;
    border: 1px solid #218ff1;
    background: #f0f3f9;
    color: #218ff1;
  }
}
</style>
