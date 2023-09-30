<template lang="">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header p-4">
                    <h5 class="modal-title">Tạo người dùng mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="mb-3">
                        <label class="form-label">Tên tài khoản (<span class="text-danger">*</span>)</label>
                        <input type="text" v-model="form.username" class="form-control"  placeholder="Nhập tên tài khoản ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tên đầy đủ (<span class="text-danger">*</span>)</label>
                        <input type="text" v-model="form.fullname" class="form-control"  placeholder="Nhập tên đầy đủ ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email (<span class="text-danger">*</span>)</label>
                        <input type="email" v-model="form.email" class="form-control"  placeholder="Nhập email ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Số điện thoại (<span class="text-danger">*</span>)</label>
                        <input type="email" v-model="form.phone" class="form-control"  placeholder="Nhập số điện thoại ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mật khẩu (<span class="text-danger">*</span>)</label>
                        <input type="password" v-model="form.password" class="form-control"  placeholder="Nhập mật khẩu ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nhập lại mật khẩu (<span class="text-danger">*</span>)</label>
                        <input type="password" class="form-control"  placeholder="Xác nhận mật khẩu ...">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mô tả</label>
                        <input type="text" v-model="form.description" class="form-control"  placeholder="Xác nhận mật khẩu ...">
                    </div>
                </div>
                <div class="modal-footer border-0 p-4">
                    <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">
                    Cancel
                    </a>
                    <a href="#" class="btn btn-success ms-auto" @click="CreateUser">
                        Tạo người dùng
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
const auth = JSON.parse(localStorage.getItem('authorize'))
export default {
    data(){
        return {
            type : null,
            form : {
                username        : null,
                fullname        : null,
                phone           : null,
                email           : null,
                password        : null,
                description     : null,
                is_active       : true,
                avatar          : null,
                tenant_id       : auth.tenant_id,
            }
        }
    },
    props : {
        item : String
    },
    mounted(){

        
        var myModalEl = document.getElementById('exampleModal')


        var main = this
        myModalEl.addEventListener('shown.bs.modal', function (event) {
            console.log(this.dataset.core)
        })
    },
    methods : {
        CreateUser(){
            const data = this.form
            axios({
                method:'post',
                url: 'https://localhost:44340/api/user/create',
                headers: {
                    'Authorization': 'Bearer ' + auth.token
                },
                data: data
            })
            .then(res => {
                this.data = res.data.data.items
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>