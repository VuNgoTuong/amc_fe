<template lang="">
    <div class="modal fade" id="Modal_CreateProject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>