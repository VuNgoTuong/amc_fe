<template lang="">
    <div class="modal fade" id="Modal_RemoveRole" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content rounded-4">
                <div class="modal-body p-5 pb-0">
      
                    <div class="d-flex align-items-top">
                        <div>
                            <div class="bg-danger bg-opacity-10 d-flex p-3 rounded-circle">
                                <IconX :size="34" class="d-flex text-danger" stroke-width="1.5" />
                            </div>
                        </div>
                        <div class="ps-5">
                            <h5 class="fw-bold">Xóa quyền người dùng</h5>
                            <p class="lh-2">Cảnh báo: Hành động này sẽ xóa dữ liệu và không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục ?</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 p-5 pt-3">
                    <a class="btn btn-link link-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                    </a>
                    <div>
                        <a @click="StepForward" :disabled="checkRoleName" class="btn btn-danger ms-auto">Xóa dữ liệu</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { IconSearch,IconUser,IconX } from '@tabler/icons-vue';
export default {
    data(){
        return {
            role_name : null,
            step : 1,
        }
    },
    methods : {
        StepForward(){
            this.step = this.step + 1
        },
        StepBackward(){
            this.step = this.step - 1
        },
        CreateNewRole(){
            this.step = 1
        }
    },
    computed: {
        checkRoleName(){
            return false;
        }
    },
    components: {
        IconSearch,IconUser,IconX
    }
}
</script>
<style lang="scss">
    .modal-md{
        --bs-modal-width: 600px;
    }
</style>