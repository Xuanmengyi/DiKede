<template>
  <div>
    <div class="navbar">
      <img src="@/assets/common/logoone.png" alt="" class="logo">
      <rightMenu></rightMenu>
    </div>
  </div>
</template>

<script>
import rightMenu from '@/Home/components/rightMenu'
export default {
  components: {
    rightMenu
  }
}
</script>

<style>
  .logo{
        line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    width: 88px;
    box-sizing: border-box;
    border-style: none;
    margin-top: 6px;
    margin-left: 15px;
    position: relative;
    top: 4px;
  }
.navbar{
      line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1999;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
    background-size: cover;
    background-repeat: no-repeat;
}
.el-table tbody tr {
    pointer-events: none;
  }

</style>
