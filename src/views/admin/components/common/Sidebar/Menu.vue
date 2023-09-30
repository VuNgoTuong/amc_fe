<template lang="">
    <div id="sidebarMenu" class="sidebar-body">
        <div class="nav-group show mb-3">
            <a href="#" class="nav-label">Dashboard</a>
            <ul class="nav nav-sidebar">
                <li class="nav-item mb-2">
                    <router-link to="/admin" class="nav-link">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconLayoutDashboard :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item mb-2">
                    <a href="" class="nav-link has-sub">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconAdjustmentsAlt :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Hệ thống</span>
                    </a>
                    <nav class="nav nav-sub">
                        <a href="../apps/gallery-music.html" class="nav-sub-link">Cấu hình hệ thống</a>
                        <a href="../apps/gallery-video.html" class="nav-sub-link">Cấu hình menu</a>
                        <router-link to="/admin/users-manager" class="nav-sub-link">Quản lý người dùng</router-link>
                        <router-link to="/admin/permissions" class="nav-sub-link">Phân quyền quản trị</router-link>
                    </nav>
                </li>
                <li class="nav-item mb-2">
                    <a href="" class="nav-link has-sub">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconBusinessplan :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Q.lý chủ trương đầu tư</span>
                    </a>
                    <nav class="nav nav-sub">
                        <a href="../apps/gallery-music.html" class="nav-sub-link">Danh mục đơn vị</a>
                        <a href="../apps/gallery-video.html" class="nav-sub-link">Danh mục TĐTV</a>
                        <a href="../apps/gallery-video.html" class="nav-sub-link">Cập nhật chủ trương đầu tư</a>
                    </nav>
                </li>

                <li class="nav-item mb-2">
                    <router-link to="/admin/project-manager" class="nav-link">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconCoin :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Q.lý dự án đầu tư</span>
                    </router-link>
                </li>

                <li class="nav-item mb-2">
                    <router-link to="/#" class="nav-link">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconCoins :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Q.lý hiện trạng tài sản</span>
                    </router-link>
                </li>

                <li class="nav-item mb-2">
                    <router-link to="/#" class="nav-link">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconReportMoney :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Q.lý Tài chính,dự án,tài sản</span>
                    </router-link>
                </li>

                <li class="nav-item mb-2">
                    <router-link to="/#" class="nav-link">
                        <div class="p-1 rounded-2 bg-primary bg-gradient">
                            <IconChartBar :size="18" color="#FFFFFF" stroke-width="2" class="d-flex"/>
                        </div>
                        <span class="ms-2 text-primary">Báo cáo</span>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
import { IconSmartHome,IconBuildingStore,IconLayoutDashboard,IconAdjustmentsAlt,IconBusinessplan,IconCoin,IconCoins,IconReportMoney,IconChartBar } from '@tabler/icons-vue';
export default {
    components: { IconSmartHome,IconBuildingStore,IconLayoutDashboard,IconAdjustmentsAlt,IconBusinessplan,IconCoin,IconCoins,IconReportMoney,IconChartBar }
}
</script>
<style lang="scss">
    .nav-sidebar{
        .nav-item{
            .nav-link{
                transition: .2s ease-in-out;
                filter:grayscale(1);
                opacity: .8;
                &.router-link-exact-active{
                    transform:translateX(0px)!important;
                    transition: .2s ease-in-out;
                    filter:grayscale(0);
                    opacity: 1;
                }
                &:hover{
                    transform:translateX(3px);
                    transition: .2s ease-in-out;
                    filter:grayscale(0);
                    opacity: 1;
                }
            }
        }
    }
</style>