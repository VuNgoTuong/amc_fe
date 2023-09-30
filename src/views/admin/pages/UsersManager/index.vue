<template lang="">
    
    <section>
        <Modal_CreateUser></Modal_CreateUser>
        <Modal_DeleteUser 
            :item="this.item_selected" 
            @customEvent="getDataUser"
            @resetSelected="ResetSelected"
        ></Modal_DeleteUser>
        
        <div class="row">
            <div class="col-lg-12">
                <div class="card card-one">
                    <div class="card-header">
                        <div class="d-flex gap-2">
                            <div>
                                <div class="input-group ">
                                    <input type="text" class="form-control border-end-0" placeholder="Tên người dùng cần tìm..." aria-label="Username" aria-describedby="basic-addon1" style="max-width:250px">
                                    <span class="input-group-text bg-transparent py-0 px-2" id="basic-addon1">
                                        <IconSearch :size="24" class="d-flex text-muted p-1 rounded-2" stroke-width="2" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary d-flex align-items-center gap-2 p-2 rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <IconUserPlus color="white" :size="18" stroke-width="2" class="d-flex" />
                                </a>
                            </div>
                        </div>
                        <nav class="nav nav-icon nav-icon-sm ms-auto">
                            <!-- <a href="" class="nav-link"><i class="ri-refresh-line"></i></a>
                            <a href="" class="nav-link"><i class="ri-more-2-fill"></i></a> -->
                            <a href="#" class="btn btn-success d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <IconUserPlus color="white" :size="16" stroke-width="2" class="d-flex" />
                                Tạo người dùng
                            </a>
                        </nav>
                    </div><!-- card-header -->
                    <div class="card-body">
                        <table class="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th class="text-center" scope="col" width="4%">STT</th>
                                    <th scope="col" width="22%">Thông tin người dùng</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Người tạo</th>
                                    <th scope="col">Kích hoạt</th>
                                    <th scope="col" width="10%"><IconDots :size="20" stroke-width="2" class="text-muted" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th class="text-center" scope="row">{{index + 1}}</th>
                                    <td>
                                        <div class="d-flex gap-3 align-items-center">
                                            <div class="rounded-circle overflow-hidden border " style="width:40px; height:40px">
                                                <img :src="item.avatar" class="w-100 h-100 object-fit-cover" alt="" srcset="">
                                            </div>
                                            <div class="lh-1">
                                                <h6 class="fw-bold mb-0">{{item.fullname}}</h6>
                                                <small class="text-muted mb-0">Username : {{item.username}}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{item.email}}</td>
                                    <td>{{item.create_time}}</td>
                                    <td>{{item.create_by}}</td>
                                    <td>
                                        <div class="form-check form-check-danger form-switch ">
                                            <input class="form-check-input form-check-input-info form-control rounded-5" style="height:20px; width:40px" type="checkbox" role="switch" id="flexSwitchCheckChecked" :checked="item.is_active" 
                                            @click="ChangeUserStatus(item,index)">
                                        </div>
                                    </td>
                                    <td >
                                        <div class="d-flex gap-1">
                                            <button type="button" class="btn btn-info bg-gradient btn-sm p-1" 
                                            @click="OpenModal({
                                                modal : 'exampleModal',
                                                item : item.username
                                            })">
                                                <IconPencil color="white" :size="20" stroke-width="2" class="d-flex" />
                                            </button>
                                            <button type="button" class="btn btn-danger bg-gradient btn-sm p-1" data-bs-toggle="modal" data-bs-target="#Modal_DeleteUser" @click="this.item_selected = item.username">
                                                <IconX color="white" :size="20" stroke-width="2" class="d-flex" />
                                            </button>
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
import { IconPencil,IconX,IconDots,IconUserPlus,IconSearch} from '@tabler/icons-vue';
import Modal_CreateUser from './modal/Create_User.vue';
import Modal_DeleteUser from './modal/Delete_User.vue';
import axios from 'axios';
import {ShowToast} from '@Helpers/Notify.js'

const auth = JSON.parse(localStorage.getItem('authorize'))
const apiPath = import.meta.env.VITE_API_PATH;;

export default {
    data(){
        return {
            data : [],
            item_selected : null,
            item : null,
        }
    },
    methods : {
        async OpenModal(e){
            bootstrap.Modal.getOrCreateInstance(document.getElementById(e.modal)).show();
            document.getElementById(e.modal).setAttribute('data-core', e.item);
        },
        ResetSelected(){this.item_selected = null},
        ChangeUserStatus(e,index){
            const data = {
                email: e.email,
                fullname: e.fullname,
                is_active: !e.is_active,
                phone: e.phone,
                username: e.username
            };
            axios({
                method:'post',
                url: apiPath + '/user/update',
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                },
                data: data
            }).then(res => {
                this.data[index] = res.data.data
                const toast = {status_code : res.status}
                ShowToast(toast);
            })
        },
        getDataUser(){
            const data = {
                "page": 0,
                "limit": 0,
                "sorts": [
                    {
                    "name_field": "string",
                    "type_sort": "string"
                    }
                ],
                "search_list": [
                    {
                    "name_field": "string",
                    "conjunction": "string",
                    "value_search": "string",
                    "upper_bound": "string"
                    }
                ],
                "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "flag": true
            }
            axios({
                method:'post',
                url: apiPath + '/user/get-all',
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                },
                data: data
            }).then(res => {
                this.data = res.data.data.items
            })
        }
    },
    created(){
        this.getDataUser()
    },
    components: {
        IconPencil,IconX,IconDots,IconUserPlus,IconSearch,
        Modal_CreateUser,Modal_DeleteUser
    }
}
</script>
<style lang="">
    
</style>