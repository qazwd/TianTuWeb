<template>
  <div class="artificial-intelligence-page">
    <div class="title-bar">
      <div class="title-bar-left">
        <router-link to="/homePage">
          <img src="@/assets/logo.png" alt="天图遥感" to="/homePage"/>
        </router-link>
      </div>
      <div class="title-bar-right">
        <div class="title-bar-right-item1">
          <router-link to="/remoteSensingData"
            >遥感数据服务
          </router-link>
        </div>
        <div id="current-page-button-highlight">
          <router-link to="/artificialIntelligence"
            >人工智能服务
          </router-link>
        </div>
        <div class="title-bar-right-item3">
          <router-link to="/lowAltitudeEconomic"
            >低空经济服务
          </router-link>
        </div>
        <div class="title-bar-right-item4">
          <router-link to="/coreProduct"
            >核心产品
          </router-link>
        </div>
        <div class="title-bar-right-item5">
          <router-link to="/aboutUs"
            >关于我们
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtificialIntelligence',
}
</script>

<style lang="scss" scoped>
#current-page-button-highlight {
  background: radial-gradient(circle at center, #B3EAFF 0%, #1B1C63 50%);
}

.artificial-intelligence-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #1B1C63;

    .title-bar-left {
      width: 20%;
      display: flex;

      img  {
        width: 50%;
      }
    }

    .title-bar-right {
      width: 80%;
      display: flex;
      justify-content: space-evenly;

      .title-bar-right-item1, #current-page-button-highlight, .title-bar-right-item3, 
      .title-bar-right-item4, .title-bar-right-item5 {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: white;
          text-decoration: none;
          outline: none;
          transition: all 0.2s ease-in-out;
          font-size: 1.2rem;

          &:hover {
            color: #B3EAFF;
          }

          &:focus {
            color: #00b7ff;
          }

          &:active {
            color: #ffffff;
            background-color: #1B1C63;
          }
        }
      }
    }
  }
}

</style>
