<template lang="">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-4">
                <div class="modal-body p-5 pb-0">
                    <div class="mb-4 d-flex align-items-top">
                        <div class='flex-grow-1 lh-1 pe-5'>
                            <h5 class="fw-bold">Tạo quyền mới</h5>
                            <small class="text-muted">Tạo các quyền truy cập cho người dùng hoặc nhóm người dùng trong hệ thống.</small>
                        </div>
                        <div data-bs-dismiss="modal">
                            <IconX :size="20" class="d-flex text-muted text-opacity-10" stroke-width="2" />
                        </div>
                    </div>
                    <div class="mb-3" v-if="step == 1">
                        <label class="form-label ">Tên quyền mới (<span class="text-danger">*</span>)</label>
                        <input type="text" class="form-control form-control-lg fs-6" name="example-text-input" placeholder="Nhập tên quyền ...">
                    </div>

                    <div v-if="step == 2">
                        <div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control border-end-0" placeholder="Tên người dùng cần tìm..." aria-label="Username" aria-describedby="basic-addon1">
                                <span class="input-group-text bg-transparent" id="basic-addon1">
                                    <IconSearch :size="20" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
                                </span>
                            </div>
                            <div class="overflow-auto d-flex flex-column gap-2 custom-scrollbar" style="max-height:390px">
                                <div class="bg-light border rounded-3 p-3 d-flex gap-3 align-items-center" v-for="(item, index) in Array(10)" :key="index">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                    </div>
                                    <div class="bg-info rounded-circle" style="width:36px;height:36px"></div>
                                    <div class="lh-1 flex-grow-1">
                                        <h6 class="fw-bold mb-0">Lorem ipsum</h6>
                                        <small>loremipsum@thaco.com.vn</small>
                                    </div>
                                    <div>
                                        <IconUser :size="24" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 p-5 pt-3">
                    <a v-if="step == 1" class="btn btn-link link-secondary" data-bs-dismiss="modal">
                    Hủy bỏ
                    </a>
                    <a v-else @click="StepBackward" href="#" class="btn btn-link link-secondary">
                    Trở lại
                    </a>

                    <a v-if="step == 1" @click="StepForward" :disabled="checkRoleName" class="btn btn-success ms-auto">
                        Bước tiếp theo >
                    </a>
                    <a v-else data-bs-dismiss="modal" @click="CreateNewRole" :disabled="checkRoleName" class="btn btn-success ms-auto">
                        Tạo quyền mới
                    </a>
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
<style lang="">
    
</style>