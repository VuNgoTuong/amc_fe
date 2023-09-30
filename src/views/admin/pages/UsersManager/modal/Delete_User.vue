<template lang="">
    <div class="modal fade scale-in-center" id="Modal_DeleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <div class="d-flex gap-3 mb-4">
                        <div>
                            <div class="bg-danger bg-opacity-10 p-3 rounded-circle">
                                <IconAlertTriangleFilled :size="40" stroke-width="1" class="d-flex text-danger" />
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5>Delete your account</h5>
                            <p class="mb-0 text-muted">You will lose all of your data by deleting your account. This action cannot be undone</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end gap-2">
                        <a class="btn border-0 bg-secondary bg-opacity-10" data-bs-dismiss="modal">Cancel</a>
                        <button class="btn btn-danger" @click="DeleteData">Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { IconPencil,IconX,IconDots,IconUserPlus,IconSearch,IconAlertTriangleFilled} from '@tabler/icons-vue';
import axios from 'axios';
import {ShowToast} from '@Helpers/Notify.js'
const auth = JSON.parse(localStorage.getItem('authorize'))
const apiPath = import.meta.env.VITE_API_PATH;

export default {
    mounted(){this.ResetData()},  
    components: {
        IconPencil,IconX,IconDots,IconUserPlus,IconSearch,IconAlertTriangleFilled
    },
    props:{
        item : String,
    },
    methods : {
        ResetData(){
            var myModalEl = document.getElementById('Modal_DeleteUser')
            var vm = this
            myModalEl.addEventListener('hidden.bs.modal', function (event) {
                console.log('đã đóng')
                vm.$emit('resetSelected');
            })
        },
        DeleteData(){
            try {
                var Modal_DeleteUser = bootstrap.Modal.getOrCreateInstance(document.getElementById('Modal_DeleteUser'));
                const data = {
                    item: this.item,
                    tenant_id: auth.tenant_id,
                };
                axios({
                    method:'post',
                    url: apiPath + '/user/delete',
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    },
                    data: data
                }).then(res => {
                    console.log(res)
                    this.$emit('customEvent');
                    Modal_DeleteUser.hide();
                    const toast = {status_code : res.status}
                    ShowToast(toast);
                })
            } catch (error) {
                
            }
        },
    }
}
</script>
<style lang="scss">
    .scale-in-center{-webkit-animation:scale-in-center .5s cubic-bezier(.68,-.55,.265,1.55) both;animation:scale-in-center .5s cubic-bezier(.68,-.55,.265,1.55) both}
    @-webkit-keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}
</style>