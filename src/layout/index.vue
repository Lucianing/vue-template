<template>
  <div class="layout-wrapper">
    <div class="main">
      <TopNav />
      <div class="main-content">
        <router-view />
      </div>
    </div>
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
