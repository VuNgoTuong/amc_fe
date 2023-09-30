<template lang="">
    <section>
        <Modal_AddNewRole></Modal_AddNewRole>
        <Modal_RemoveRole></Modal_RemoveRole>
        <div class="row">
            <div class="col-lg-3">
                <div class="card card-one" style="max-height:73vh;min-height:73vh;">
                    <div class="card-header p-4">
                        <div>
                            <h6 class="card-title">Quản lý role</h6>
                            <small>Quản lý danh sách role người dùng</small>
                        </div>
                        <nav class="nav nav-icon nav-icon-sm ms-auto d-flex gap-3">
                            <button class="btn bg-secondary p-1 bg-transparent border-0 text-dark hover-rotate-reverse" href="#">
                                <IconRefresh :size="20" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
                            </button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn bg-success rounded-circle p-2 border-0 text-dark hover-jello" href="#">
                                <IconPlus :size="20" class="d-flex text-white" stroke-width="2" />
                            </button>
                        </nav>
                    </div>
                    <div class="card-body overflow-auto custom-scrollbar p-4">
                       <div class="d-flex flex-column gap-3">
                            <div class="bg-primary bg-gradient p-3 rounded-2 text-white border d-flex align-items-center" :key="index">
                                <div class="flex-grow-1">
                                    Admin
                                </div>
                                <div class="dropdown">
                                    <a class="btn bg-white p-1 bg-transparent border-0 text-white hover-jello" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <IconDotsVertical :size="20" class="d-flex text-opacity-50" stroke-width="1.5" />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item p-2" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Chỉnh sửa Roles</a></li>
                                        <li><a class="dropdown-item p-2" data-bs-toggle="modal" data-bs-target="#Modal_RemoveRole">Xóa Roles</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="bg-gradient p-3 rounded-2 text-dark border d-flex align-items-center" v-for="(item, index) in roles" :key="index">
                                <div class="flex-grow-1">
                                    Admin
                                </div>
                                <div class="dropdown">
                                    <a class="btn bg-white p-1 bg-transparent border-0 hover-jello" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <IconDotsVertical :size="20" class="d-flex text-dark text-opacity-10" stroke-width="1.5" />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li data-bs-toggle="modal" data-bs-target="#exampleModal"><a class="dropdown-item p-2" href="#">Chỉnh sửa Roles</a></li>
                                        <li><a class="dropdown-item p-2" href="#">Xóa Roles</a></li>
                                    </ul>
                                </div>
                            </div>

                       </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="card card-one" style="max-height:73vh;min-height:73vh;">
                    <div class="card-header p-4">
                        <div>
                            <h6 class="card-title">Phân quyền của role</h6>
                            <small>Danh sách phân quyền của role</small>
                        </div>
                        <nav class="nav nav-icon nav-icon-sm ms-auto d-flex gap-1">
                            <button class="btn bg-secondary p-1 bg-transparent border-0 text-dark hover-rotate-reverse" href="#">
                                <IconRefresh :size="20" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
                            </button>
                            <div class="dropdown">
                                <a class="btn bg-secondary p-1 bg-transparent border-0 text-dark hover-jello" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IconDotsVertical :size="20" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="card-body overflow-auto py-0 custom-scrollbar p-4">
                        <table class="table table-xl table-borderless z-custom-table">
                            <thead>
                                <tr>
                                    <th width="5%" class="text-center">#</th>
                                    <th width="20%">Module</th>
                                    <th width="10%" class="text-center text-capitalize" v-for="(item, index) in permission" :key="index">{{item}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-secondary bg-opacity-5" v-for="(item, index) in modules" :key="index">
                                    <td class="text-center text-back-50">{{index + 1}}</td>
                                    <td class="fw-bold text-back-50 text-capitalize">{{item}}</td>
                                    <td class="text-center" v-for="(item, index) in permission" :key="index">
                                        <div class="form-check form-switch m-auto p-0 d-flex">
                                            <input type="checkbox" class="form-check-input input-primary m-auto px-3 py-2 rounded-5" id="customswitchv2-2" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { IconRefresh,IconDotsVertical,IconPlus,IconX} from '@tabler/icons-vue';

import Modal_AddNewRole from './modal/AddNewRole.vue'
import Modal_RemoveRole from './modal/RemoveRole.vue'
export default {
    data(){
        return{
            roles: ['admin','manager','agent',],
            modules : ['Bảng tin','Quản lý hệ thống','Quản lý chủ trương','Quản lý dự án'],
            permission: ['view','add','edit','delete','export','approve'],
            modal : {
                add_new_role : {
                    step: 1,
                }
            }
        }
    },
    
    components: {
        // Icons
        IconRefresh,IconDotsVertical,IconPlus,IconX,

        // Modals
        Modal_AddNewRole,Modal_RemoveRole,
    }
}
</script>

<style lang="scss">


</style>