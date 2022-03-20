<template>
  <div class="wrap">
    <div class="apps">
      <div class="app yellow">
        <div class="top">
          <div class="fa fa-heart"></div>
        </div>
      </div>
      <div class="app red">
        <div class="top">
          <div class="fa fa-headphones"></div>
        </div>
      </div>
      <div class="app blue">
        <div class="top">
          <div class="fa fa-cutlery"></div>
        </div>
      </div>
      <div class="app green">
        <div class="top">
          <div class="fa fa-check"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@keyframes slide {
  0% {
    transform: scale(0, 0) translateY(0);
  }

  15%,
  70% {
    transform: scale(1, 1) translateY(0);
  }

  90% {
    transform: scale(1, 1) translateY(600%);
  }

  100% {
    transform: scale(1, 1) translateY(600%);
  }
}

@keyframes size {
  0%,
  15% {
    transform: scale(1, 0);
  }

  25%,
  100% {
    transform: scale(1, 1);
  }
}

@keyframes zoom {
  0%,
  25% {
    transform: scale(0, 0);
  }

  35%,
  100% {
    transform: scale(1, 1);
  }
}
.wrap {
  width: 300px;
  height: 300px;
  display: table;
  overflow: hidden;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (max-width: $media-sm) {
    width: 100%;
  }
}

.apps {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.app {
  width: 44px;
  height: 45px;
  background: #fff;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.08);
  display: inline-block;
  margin: 0 10px;

  transform: scale(0, 0) translateY(0);

  animation-name: slide;
  animation-timing-function: ease;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  &:nth-child(2),
  &:nth-child(2) .top,
  &:nth-child(2) .fa {
    animation-delay: 0.2s;
  }
  &:nth-child(3),
  &:nth-child(3) .top,
  &:nth-child(3) .fa {
    animation-delay: 0.4s;
  }
  &:nth-child(4),
  &:nth-child(4) .top,
  &:nth-child(4) .fa {
    animation-delay: 0.6s;
  }
  &:nth-child(5),
  &:nth-child(5) .top,
  &:nth-child(5) .fa {
    animation-delay: 0.8s;
  }

  .top {
    height: 19px;
    position: relative;
    transform: scale(1, 0);
    transform-origin: 0 0;
    animation-name: size;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;

    .fa {
      height: 19px;
      width: 19px;
      line-height: 19px;
      text-align: center;
      font-size: 11px;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      right: 5px;
      top: -9px;
      box-shadow: 1px 1px 1px 0.5px rgba(0, 0, 0, 0.08);

      animation-name: zoom;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
  }

  &.yellow .top {
    background: #f28f00;
    .fa {
      background: #ffcc3b;
    }
  }

  &.red .top {
    background: #ea4301;
    .fa {
      background: #ff8963;
    }
  }

  &.blue .top {
    background: #1e3f9c;
    .fa {
      background: #74b0f8;
    }
  }

  &.green .top {
    background: #669930;
    .fa {
      background: #b0d583;
    }
  }
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: rgba(255, 255, 255, 0.64);
  padding: 8px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
