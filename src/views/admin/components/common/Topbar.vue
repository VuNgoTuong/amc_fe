<template lang="">
    <div class="header-main px-3 px-lg-4">
        <a id="menuSidebar" href="#" class="menu-link me-3 me-lg-4"><i class="ri-menu-2-fill"></i></a>

        <div class="form-search me-auto">
            <input type="text" class="form-control" placeholder="Search" />
            <i class="ri-search-line"></i>
        </div>
        <!-- form-search -->

        <div class="dropdown dropdown-skin">
            <a href="" class="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i class="ri-settings-3-line"></i></a>
            <div class="dropdown-menu dropdown-menu-end mt-10-f">
                <label>Skin Mode</label>
                <nav id="skinMode" class="nav nav-skin">
                    <a href="" class="nav-link active">Light</a>
                    <a href="" class="nav-link">Dark</a>
                </nav>
                <hr />
                <label>Sidebar Skin</label>
                <nav id="sidebarSkin" class="nav nav-skin">
                    <a href="" class="nav-link active">Default</a>
                    <a href="" class="nav-link">Prime</a>
                    <a href="" class="nav-link">Dark</a>
                </nav>
                <hr />
                <label>Direction</label>
                <nav id="layoutDirection" class="nav nav-skin">
                    <a href="" class="nav-link active">LTR</a>
                    <a href="" class="nav-link">RTL</a>
                </nav>
            </div>
            <!-- dropdown-menu -->
        </div>
        <!-- dropdown -->

        <div class="dropdown dropdown-notification ms-3 ms-xl-4">
            <a href="" class="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><small>3</small><i class="ri-notification-3-line"></i></a>
            <div class="dropdown-menu dropdown-menu-end mt-10-f me--10-f">
                <div class="dropdown-menu-header">
                    <h6 class="dropdown-menu-title">Notifications</h6>
                </div>
                <!-- dropdown-menu-header -->
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="avatar online"><img src="/assets/img/img10.jpg" alt="" /></div>
                        <div class="list-group-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <span>Aug 20 08:55am</span>
                        </div>
                        <!-- list-group-body -->
                    </li>
                    <li class="list-group-item">
                        <div class="avatar online"><img src="/assets/img/img11.jpg" alt="" /></div>
                        <div class="list-group-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <span>Aug 18 10:30am</span>
                        </div>
                        <!-- list-group-body -->
                    </li>
                    <li class="list-group-item">
                        <div class="avatar"><span class="avatar-initial bg-primary">a</span></div>
                        <div class="list-group-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <span>Aug 15 08:10pm</span>
                        </div>
                        <!-- list-group-body -->
                    </li>
                    <li class="list-group-item">
                        <div class="avatar online"><img src="/assets/img/img14.jpg" alt="" /></div>
                        <div class="list-group-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <span>Aug 14 11:50pm</span>
                        </div>
                        <!-- list-group-body -->
                    </li>
                    <li class="list-group-item">
                        <div class="avatar online"><img src="/assets/img/img15.jpg" alt="" /></div>
                        <div class="list-group-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <span>Aug 10 05:30am</span>
                        </div>
                        <!-- list-group-body -->
                    </li>
                </ul>
                <div class="dropdown-menu-footer"><a href="">Show all Notifications</a></div>
            </div>
            <!-- dropdown-menu -->
        </div>
        <!-- dropdown -->
        <div class="dropdown dropdown-profile ms-3 ms-xl-4">
            <a href="" class="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <div class="avatar online"><img src="/assets/img/img1.jpg" alt="" /></div>
            </a>
            <div class="dropdown-menu dropdown-menu-end mt-10-f">
                <div class="dropdown-menu-body">
                    <div class="avatar avatar-xl online mb-3"><img src="/assets/img/img1.jpg" alt="" /></div>
                    <h5 class="mb-1 text-dark fw-semibold">Lorem ipsum</h5>
                    <p class="fs-sm text-secondary">Lorem ipsum</p>

                    <nav class="nav">
                        <a href=""><i class="ri-edit-2-line"></i> Tùy chỉnh tài Khoản</a>
                        <a href=""><i class="ri-profile-line"></i> Xem hồ sơ</a>
                    </nav>
                    <hr />
                    <nav class="nav">
                        <a href=""><i class="ri-question-line"></i> Trung tâm hỗ trợ</a>
                        <a href=""><i class="ri-lock-line"></i> Phần quyên</a>
                        <a href=""><i class="ri-user-settings-line"></i> Cài đặt</a>
                        <a href=""><i class="ri-logout-box-r-line"></i> Đăng xuất</a>
                    </nav>
                </div>
                <!-- dropdown-menu-body -->
            </div>
            <!-- dropdown-menu -->
        </div>
        <!-- dropdown -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>