<template>
  <div class="layout-wrapper">
    <div class="main">
      <!--顶部导航栏-->
      <TopNav />
      <div class="main-content-wrapper">
        <div class="main-content">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
    <!--侧边菜单栏-->
    <Sidebar />
  </div>
</template>

<script
  src="./layout.js"
  type="text/ecmascript-6"
/>

<style
  src="./layout.scss"
  rel="stylesheet/scss"
  lang="scss"
  scoped
/>
