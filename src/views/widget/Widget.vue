<template>
  <div full-wrap>
    <div class="header">
      <div class="tab-header">
        <el-row type="flex" align="middle" justify="space-between">
          <div>
            <el-button
              size="small"
              class="header-button"
              type="primary"
              circle>
              <i class="fas fa-arrow-left"></i>
            </el-button>
            <span class="title">Поздравления Димитрию с Днем рождения</span>
          </div>
          <el-button
            class="header-button help"
            size="small"
            type="primary"
            circle>
            <i class="fas fa-question-circle"></i>
          </el-button>
        </el-row>
      </div>
      <el-tabs class="custom-tab">
        <el-tab-pane>
          <div slot="label" class="tab-title">По именам</div>
          <el-row :gutter="40" type="flex">
            <el-col class="player" v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Популярные <emoji emoji=":fire::skin-tone-3:" :size="16" /></div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Прикольные <emoji emoji=":joy::skin-tone-3:" :size="16" /></div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Мужчине</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Женщине</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Девушке</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Детям</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Учителям</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="tab-title">Учителям</div>
          <el-row type="flex" :gutter="40">
            <el-col v-for="(item, index) in data" :key="index" :xs="24" :sm="12">
              <AudioPlayer
                :name="item.name"
                :audio="item.audio" />
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Emoji } from 'emoji-mart-vue';
import AudioPlayer from '../../components/AudioPlayer';

const FAKE_DATA = {
  name: 'Flo Rida Ft Kesha – Right Round',
  audio: 'static/Flo Rida Ft Kesha – Right Round.mp3',
};

export default {
  name: 'Widget',
  data() {
    return {
      data: Array(8).fill(FAKE_DATA),
    };
  },
  components: {
    AudioPlayer,
    Emoji,
  },
};
</script>

<style lang="sass">
  .tab-header
    background: $--color-primary
    color: #fff
    padding: 15px 20px
  .title
    font-size: 23px
  .header-button
    font-size: 22px
  .tab-title
    text-transform: uppercase
    font-size: 16px
    padding: 10px 15px
    color: #fff
    margin-bottom: -3px
  .custom-tab
    .el-row
      padding: 0 25px
    .el-tabs__header
      background: $--color-primary
    .el-tabs__item
      height: auto
      &:not(.is-active)
        .tab-title
          color: #96C0EA
    .el-tabs__nav-wrap
      &::after
        display: none
    .el-tabs__active-bar
      background-color: #FFFF8D
      height: 3px
    .el-tabs__nav-wrap.is-scrollable
      padding: 0 30px
    .el-tabs__nav-prev, .el-tabs__nav-next
      vertical-align: middle
      color: #fff
      font-size: 20px
      line-height: normal
      top: 32%
      & i
        font-weight: 900
      & .is-disabled
        color: #FEFEFE
    .el-tabs__nav
      & .el-tabs__item:nth-child(2).is-active
        .tab-title
          border-right: 1px solid #FFFF8D
      & .el-tabs__item:last-child.is-active
        .tab-title
          border-left: 1px solid #FFFF8D
      & .el-tabs__item:not(:nth-child(2)):not(:last-child).is-active
          .tab-title
            border-left: 1px solid #FFFF8D
            border-right: 1px solid #FFFF8D

  .el-row--flex
    flex-wrap: wrap

</style>
