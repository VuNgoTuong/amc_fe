<template lang="">
    <section>

        <Modal_CreateProject></Modal_CreateProject>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Dự án khu mua sắm 4</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">Mã dự án : </div>
                                        <div>#1234546789</div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">Tên dự án : </div>
                                        <div>#1234546789</div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">Phân loại dự án : </div>
                                        <div>#1234546789</div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">Thông tin chủ trương : </div>
                                        <div>#1234546789</div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1">Thông tin chủ sỡ hữu : </div>
                                        <div>#1234546789</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Thông tin pháp lý quy hoạch
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pt-0">
                                            <table class="table table-xl table-borderless z-custom-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th width="15%">Mã Pháp Lý Đất</th>
                                                        <th class="px-0">Tên pháp lý đất</th>
                                                        <th class="px-0">Mã dự án</th>
                                                        <th class="px-0">Ghi chú</th>
                                                        <th class="px-0">Ngày tạo</th>
                                                        <th class="px-0">Người tạo</th>
                                                        <th class="px-0">Đơn vị</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-secondary bg-opacity-5 px-3" v-for="(item, index) in Array(4)" :key="index">
                                                        <td class="text-start text-back-50">
                                                            <div class="ps-3">#12301913</div>
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">Pháp lý nhà đất</td>
                                                        <td class="text-back-50 text-capitalize">
                                                            #12301913
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">
                                                            Lorem ipsum dolor
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">Thadico</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Thông tin pháp lý đất
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pt-0">
                                            <table class="table table-xl table-borderless z-custom-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th width="15%">Mã Pháp Lý Đất</th>
                                                        <th class="px-0">Tên pháp lý đất</th>
                                                        <th class="px-0">Mã dự án</th>
                                                        <th class="px-0">Ghi chú</th>
                                                        <th class="px-0">Ngày tạo</th>
                                                        <th class="px-0">Người tạo</th>
                                                        <th class="px-0">Đơn vị</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-secondary bg-opacity-5 px-3" v-for="(item, index) in Array(4)" :key="index">
                                                        <td class="text-start text-back-50">
                                                            <div class="ps-3">#12301913</div>
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">Pháp lý nhà đất</td>
                                                        <td class="text-back-50 text-capitalize">
                                                            #12301913
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">
                                                            Lorem ipsum dolor
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">Thadico</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Thông tin pháp lý xây dựng
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pt-0">
                                            <table class="table table-xl table-borderless z-custom-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th width="15%">Mã Pháp Lý Đất</th>
                                                        <th class="px-0">Tên pháp lý đất</th>
                                                        <th class="px-0">Mã dự án</th>
                                                        <th class="px-0">Ghi chú</th>
                                                        <th class="px-0">Ngày tạo</th>
                                                        <th class="px-0">Người tạo</th>
                                                        <th class="px-0">Đơn vị</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-secondary bg-opacity-5 px-3" v-for="(item, index) in Array(4)" :key="index">
                                                        <td class="text-start text-back-50">
                                                            <div class="ps-3">#12301913</div>
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">Pháp lý nhà đất</td>
                                                        <td class="text-back-50 text-capitalize">
                                                            #12301913
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">
                                                            Lorem ipsum dolor
                                                        </td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">10/10/2021</td>
                                                        <td class="text-back-50 text-capitalize">Thadico</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        <div class="bg-white border rounded-2 p-3 mb-3 d-flex align-items-center">
            <div class="flex-grow-1">
                <div class="input-group">
                    <input type="text" class="form-control border-end-0" placeholder="Tên người dùng cần tìm..." aria-label="Username" aria-describedby="basic-addon1" style="max-width:250px">
                    <span class="input-group-text bg-transparent" id="basic-addon1">
                        <IconSearch :size="24" class="d-flex text-muted p-1 rounded-2" stroke-width="2" />
                    </span>
                </div>
            </div>
            <div class="flex-grow-1 d-flex justify-content-end">
                <button type="button" class="btn btn-success d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <IconPlus :size="24" class="d-flex text-white p-1 rounded-2" stroke-width="3" />
                    <span>Tạo dự án</span>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-3 mb-3" v-for="(item, index) in Array(12)" :key="index">
                        <div class="card card-one border">
                            <div class="card-header">
                                <h6 class="mb-0 fw-bold">Dữ án khu mua sắm {{index + 1}}</h6>
                                <nav class="nav nav-icon nav-icon-sm ms-auto d-flex">
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn bg-secondary p-1 bg-transparent border-0 text-dark hover-jello" href="#">
                                        <IconEye :size="20" class="d-flex text-dark text-opacity-50" stroke-width="1.5" />
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
                            <div class="card-body d-flex flex-column gap-2">
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <IconBriefcase :size="24" class="d-flex text-muted bg-dark bg-opacity-10 p-1 rounded-2" stroke-width="2" />
                                        <span class="ms-2">Loại dự án :</span>
                                    </div>
                                    <div class="flex-grow-1 text-end">Bất động sản</div>
                                </div>
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <IconDimensions :size="24" class="d-flex text-muted bg-dark bg-opacity-10 p-1 rounded-2" stroke-width="2" />
                                        <span class="ms-2">Tổng diện tích dự án :</span>
                                    </div>
                                    <div class="flex-grow-1 text-end">200 Ha</div>
                                </div>
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <IconCalendar :size="24" class="d-flex text-muted bg-dark bg-opacity-10 p-1 rounded-2" stroke-width="2" />
                                        <span class="ms-2">Ngày tạo :</span>
                                    </div>
                                    <div class="flex-grow-1 text-end">20/10/2020</div>
                                </div>
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <IconUser :size="24" class="d-flex text-muted bg-dark bg-opacity-10 p-1 rounded-2" stroke-width="2" />
                                        <span class="ms-2">Người tạo :</span>
                                    </div>
                                    <div class="flex-grow-1 text-end">Lorem ipsum</div>
                                </div>
                                <div class="d-flex">
                                    <div class="d-flex">
                                        <IconBuildingCommunity :size="24" class="d-flex text-muted bg-dark bg-opacity-10 p-1 rounded-2" stroke-width="2" />
                                        <span class="ms-2">Đơn vị sử dụng :</span>
                                    </div>
                                    <div class="flex-grow-1 text-end">Thadico</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {IconSearch,IconUser,IconX, IconBriefcase, IconPlus, IconDimensions,IconCalendar,IconBuildingCommunity,IconRefresh,IconDotsVertical,IconEye} from '@tabler/icons-vue';
import Modal_CreateProject from './modal/Create_Project.vue';
export default {
    components: {
    // Icons
    IconSearch, IconBriefcase,IconDimensions,IconCalendar,IconUser,IconBuildingCommunity,IconRefresh,IconDotsVertical,IconEye,IconPlus,
    
    // Modal
    Modal_CreateProject
    }
}
</script>
<style lang="">
    
</style>