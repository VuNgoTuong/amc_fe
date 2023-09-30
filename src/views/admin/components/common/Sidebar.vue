<template lang="">
    <div class="sidebar">
        <sidebarHeader></sidebarHeader>
        <sidebarMenu></sidebarMenu>
        <sidebarFooter></sidebarFooter>
    </div>
</template>
<script>
import sidebarHeader from './Sidebar/Header.vue';
import sidebarMenu from './Sidebar/Menu.vue';
import sidebarFooter from './Sidebar/Footer.vue';
export default {
    components : {sidebarHeader,sidebarMenu,sidebarFooter}
}
</script>
<style lang="">
    
</style>