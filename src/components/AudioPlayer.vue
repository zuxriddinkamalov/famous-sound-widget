<template>
  <el-row :gutter="15" type="flex" justify="flex-start" align="middle" class="player">
    <div class="play">
      <el-button type="primary" @click="playMusic" circle>
        <i v-if="playing" class="fas fa-pause"></i>
        <i v-else class="fas fa-play"></i>
      </el-button>
    </div>
    <div @click="playMusic" class="name">
      <span>{{ name }}</span>
    </div>
  </el-row>
</template>

<script>
import play from 'audio-play';
import load from 'audio-loader';

export default {
  name: 'AudioPlayer',
  data: () => ({
    playing: false,
    load: null,
    play: null,
  }),
  props: {
    audio: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    playMusic() {
      if (this.load) {
        this.playing = !this.playing;
        return null;
      }
      this.load = load(this.audio);
      return this.load.then((buffer) => {
        this.play = play(buffer, {
          start: 0,
          volume: 1,
        });
        this.playing = !this.playing;
      });
    },
  },
  watch: {
    playing(isPlay) {
      if (isPlay) {
        return this.play.play();
      }
      return this.play.pause();
    },
  },
};
</script>

<style lang="sass" scoped>
  .player
    padding: 15px
    margin: 10px
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12)
    .play
      margin-right: 10px
    .name
      color: $--color-primary
      font-size: 20px
      font-weight: bold
      &:hover
        color: lighten($--color-primary,0.5)
        text-decoration: underline
        cursor: pointer
</style>
