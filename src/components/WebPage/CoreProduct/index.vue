<template>
  <div class="core-product-page">
    <TitleBar />
    <div class="core-product">
      <img src="@/assets/核心产品图.png" alt="加载失败" class="core" />
      <span class="span1">核心产品</span>
      <span class="span2">机载轻小型高光谱成像系统</span>
    </div>
    <div class="product-introduction">
      <span>产品介绍</span>
      <p v-for="(paragraph, index) in content1" :key="index">{{ paragraph }}</p>
      <img src="@/assets/系统组成图.png" alt="加载失败" />
      <p><br>注：地面数据控制单元需额外搭配一台控制电脑（笔记本等），不在系统提供范围内</p>
      <div class="picture2">
        <img src="@/assets/产品组成图.png" alt="加载失败" />
        <img src="@/assets/产品组成图-地面端.png" alt="加载失败" />
      </div>
    </div>
    <div class="partitioned"></div>
    <div class="system-composition">
      <span>系统组成</span>
      <div class="content">
        <div class="left">
        <img src="@/assets/产品图1.png" alt="加载失败" />
        <img src="@/assets/产品图2.png" alt="加载失败" />
        <img src="@/assets/产品图3.png" alt="加载失败" />
        <img src="@/assets/产品图4.png" alt="加载失败" />
      </div>
      <div class="right">
        <div class="top">
          <img src="@/assets/技术参数1.png" alt="加载失败" />
          <p>高光谱成像光谱仪</p>
        </div>
        <div class="middle">
          <img src="@/assets/技术参数2.png" alt="加载失败" />
          <p>数据采集存储单元</p>
        </div>
        <div class="bottom">
          <img src="@/assets/技术参数3.png" alt="加载失败" />
          <p>两轴自稳云台</p>
        </div>
      </div>
      
      </div>
    </div>
    <div class="partitioned"></div>
    <div class="advatages-characteristics">
      <span class="title">优势、特点</span>
      <div class="contents">
        <div class="tops">
          <div class="lefts">
            <span>成本低</span>
            <p>在满足小型无人机长航时的光谱探测需求的情况下，本系统从硬件结构到软件功能皆为自主研发，从硬件投入来看不需要购买昂贵的专业设备或构建庞大的数据中心；从软件研发来看自主研发还大大降低了使用成本，软件操作简单，数据自动化处理大幅减少了人工参与，非专业人员也可轻松掌握，系统模块化设计也大幅降低了维护成本。</p>
          </div>
          <div class="mids">
            <span>体积重量小</span>
            <p>传统的高光谱相机体积大重量高，为满足小型无人机长航时的光谱探测需求，本系统在探测指标保持高精度的基础上，降低了整套系统的体积与重量，整套系统空中搭载部分重量仅为1900g，精致小巧且轻盈便携，对无人机的要求较低，可以轻松地携带和移动，既不会占用过多的空间，也极大地减轻了无人机的负担。</p>
          </div>
          <div class="rights">
            <span>模块化设计</span>
            <p>本系统采用了模块化设计（高光谱成像光谱仪+35mm工业镜头+数据采集存储传输单元+空中探测区域视频预览单元+数传模块+两轴高精度云台），将系统拆分成多个独立的小模块，这些模块可以根据不同的需求和环境进行组合与调整，从而实现更丰富的设计效果和功能分配，提高了系统的适应性和可扩展性。由于每个模块都是独立的，当系统出现问题时，可以迅速定位到具体的模块进行修复或更换，且模块化的设计使得系统的升级和扩展变得更加容易，只需替换或添加相应的模块即可。</p>
          </div>
        </div>
        <div class="bottoms">
          <span>数据自动化处理</span>
          <p v-for="(paragraph, index) in content2" :key="index">{{ paragraph }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="partitioned"></div> -->
    <div class="product-inventory">
      <span>产品清单</span>
      <img src="@/assets/产品清单.png" alt="加载失败" />
    </div>
  </div>
</template>

<script>
// 导入模块
import { ref } from 'vue';
// 导入组件
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'


export default {
  name: 'CoreProduct',
  components: {
    TitleBar
  },
  props: {
  },
  setup() {
    const content1 = ref([
      '机载轻小型高光谱成像系统主要是从高光谱图像中提取出有用的信息进行处理，系统具有增强去噪、光谱校正和几何校正等预处理功能，以更准确地处理原始数据，提高后续分析的准确性，并通过优化算法和硬件加速技术，提高系统处理高光谱数据的速度，满足实时或近实时应用的需求。随着数据量的不断增加，系统需要能够处理更大规模的数据集，本系统的存储容量远远超过光谱数据正常的数据集。',
      '机载轻小型高光谱成像系统将高光谱数据处理模块与其他相关模块（如IMU惯导模块等）进行集成，实现数据的共享和协同处理，并制定统一的数据格式和接口标准，提高不同系统之间的互操作性，方便数据的交换和共享。',
      '机载轻小型高光谱成像系统包含多种产品型号，如SMSS-VIS-NIR-256等，系统的设备组成图如下图所示：'
    ]);
    const content2 = ref([
      '本系统软件方面在处理过程中快速并准确的将各种数据源自动汇聚，形成一个庞大的数据集。在飞行过程中，可通过地面控制软件观察飞机飞行轨迹，并且在处理数据过程中能够根据数据集中的IMU惯导信息复原飞行轨迹，可直接在轨迹中选择需要的轨迹段，软件将自动提取轨迹段的IMU惯导信息，并将惯导信息对应的光谱数据进行提取、存储、分析。这一过程能够准确地识别和分析数据，尽可能避免了人工处理中可能出现的误差和疏忽，提高了数据处理的准确性。',
      '在处理光谱数据过程中，本系统可以自动进行分幅、辐射校正、反射率计算、粗几何校正等。分幅会将原始数据按照特定的规则进行分割，形成多个独立的数据块或图像，这有助于更好地管理数据，提高后续处理和分析的效率。辐射校正会消除或纠正由于传感器、大气条件、太阳高度角等因素引起的辐射误差，使得高光谱数据更接近于真实的辐射信息。反射率计算利用先进的算法和技术，实现对物体表面反射率的自动测量和计算，在计算过程中，系统还会考虑各种因素，如光源的性质、测量角度、物体表面的材质等，以确保计算结果的准确性和可靠性。粗几何校正的目的是消除传感器内部畸变，有助于改善遥感数据的几何质量，为后续的应用和分析提供更为准确的数据基础。'
    ]);

    return {
      content1,
      content2
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

p {
  text-indent: 2em;
  white-space: pre-wrap;
}

span {
  font-weight: bold;
}

.core-product-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .core-product {
    height: 550px;
    max-width: 100%;
    background-color: #ffffff;

    position: relative;
    display: inline-block;

    img {
      width: 100%;
      height: 100%;
    }

    .span1, .span2 {
      font-size: 30px;

      position: absolute;
      left: 10px;
      color: #000000;
    }

    .span1 {
      top: 10px;
      left: 5%;
    }

    .span2 {
      top: 50px;
      font-size: 20px;
    }
  }

  .product-introduction {
    max-width: 100%;
    background-color: #ffffff;
    padding: 20px;

    img {
      width: auto;
      height: 500px;
    }

    span {
      font-size: 30px;

      white-space: pre-wrap;
    }
  }

  .partitioned {
    height: 20px;
    background-color: #F0F0F0;
    
  }

  .system-composition {
    max-width: 100%;
    background-color: #ffffff;
    padding: 20px;

    span {
      font-size: 30px;
    }

    .content {
      display: flex;
      justify-content: space-around;
      padding: 10px;

      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0 0 10px;

        img {
          width: 300px;
          height: auto;
          margin: 10px 0;
        }
      }

      .right {
        display: flex;
        flex-direction: column;

        .top, .middle, .bottom {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
      }
    }
  }

  .advatages-characteristics {
    max-width: 100%;
    background-color: #ffffff;
    padding: 20px;

    .title {
      font-size: 30px;
    }

    .contents {
      display: flex;
      flex-direction: column;

      .tops {
        display: flex;
        justify-content: space-around;

        .lefts {
          padding: 5px;
          background-color: #F3F3F3;
          margin: 5px;
        }

        .mids {
          padding: 5px;
          background-color: #F3F3F3;
          margin: 5px;
        }
        
        .rights {
          padding: 5px;
          background-color: #F3F3F3;
          margin: 5px;
        }
      }

      .bottoms {
        display: flex;
        flex-direction: column;
        background-color: #F3F3F3;
        margin: 5px;
        padding: 5px;
      }
    }
  }

  .product-inventory {
    max-width: 100%;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 30px;
    }

    img {
      width: 60%;
    }
  }
}
</style>
