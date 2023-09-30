import Swal from 'sweetalert2'
export function ShowToast(data){

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    let toast_data
    const cases = {
        200: () => { 
            toast_data = {icon: 'success',title: 'Cập nhật thành công'}
        },
        401: () => { 

        }
    };
    
    (cases[data.status_code] || (() => {
        toast_data = {icon: 'error',title: 'Cập nhật thất bại'}
    }))();
    
    Toast.fire(toast_data)

}