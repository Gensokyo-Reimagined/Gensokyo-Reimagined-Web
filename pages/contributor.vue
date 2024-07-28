<script lang="ts" setup>

</script>

<template>
  <IndexHeader/>
  <!--对于头像来说，建议保存到本地或者使用dc api来获取，但问题是就算使用dc api也应该是在build时进行更新操作，来让一些无法访问dc的地区也能加载
  对于手动保存来说，最大的一点就是无法及时同步头像，虽然可以通过github api来获取到有github账户的贡献者，但是这样也需要走worker才能让无法访问dc的地区也能加载

  WIP Content
  -->
  <div class="flex flex-wrap">
    <div  v-for="index in 10" :key="index" class="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-10">
      <div class="text-center max-w-xs mx-auto">
        <img class="w-24 h-24 mx-auto mb-2 rounded-full" src="https://avatars.githubusercontent.com/misaka10843" alt="">
        <h3 class="mb-1 text-lg text-[var(--md-sys-color-on-background)] font-semibold">misaka10843</h3>
        <span class="inline-block text-lg font-medium text-[var(--md-sys-color-secondary)]">?</span>
        <div class="flex items-center justify-center text-[var(--md-sys-color-on-background)]">
          <a class="inline-block mr-4 hover:opacity-80" href="#">
            <i class="fa-brands fa-discord"></i>
          </a>
          <a class="inline-block mr-4 hover:opacity-80" href="#">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="inline-block hover:opacity-80" href="#">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
