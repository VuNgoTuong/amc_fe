<template lang="">
    <section class="page-sign">
        <div class="card card-sign">
            <div class="card-header">
                <a href="../" class="header-logo mb-4">Thaco</a>
                <h3 class="card-title">Đăng nhập</h3>
                <p class="card-text">Welcome back! Please signin to continue.</p>
            </div>
            <div class="card-body">
                <div class="mb-4">
                    <label class="form-label">Email address</label>
                    <input type="text" v-model="email" class="form-control" placeholder="Enter your email address" />
                </div>
                <div class="mb-4">
                    <label class="form-label d-flex justify-content-between">Password <a href="">Forgot password?</a></label>
                    <input type="password" v-model="password" class="form-control" placeholder="Enter your password" />
                </div>
                <button class="btn btn-primary btn-sign" @click="AuthLogin">Sign In</button>

                <div class="divider"><span>Login with account thaco</span></div>
            </div>
        </div>
    </section>
    
</template>
<script>
import axios from 'axios'
export default {

    data(){
        return {
            email : null,
            password : null,
            is_remember_me : false,
        }
    },
    methods : {
        AuthLogin(){
            const params = {
                email : this.email,
                password : this.password,
                is_remember_me : true,
            }
            axios.post('https://localhost:44340/api/auth/login',params)
            .then(async res => {
                const data = res.data.data;
                const obj = {
                    "token" : data.token,
                    "tenant_id" : data.tenant_id
                }
                localStorage.setItem('authorize',JSON.stringify(obj))
                if (localStorage.getItem('authorize') || localStorage.getItem('authorize') === 0) {
                    this.$router.push('/admin')
                }
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