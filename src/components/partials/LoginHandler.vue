<template>
    <figure class="login-handler-wrap">
        <div class="login-buttons flex flex-row justify-center">
            <a href="/se/logga-in/" class="login-url" v-if="!loggedIn">
                <button class="btn btn--primary login-button">{{ cont.loginHandler.login }}</button>
            </a>

            <a href="/se/min-profil/" v-if="loggedIn">
                <button class="btn btn--primary login-button profile-button mr-2"><i class="fas fa-user"></i></button>
            </a>

            <a href="https://ptonline.mammafitness.se/" v-if="loggedIn">
                <button class="btn btn--primary login-button profile-button mr-2">{{ cont.loginHandler.pto }}</button>
            </a>

            <a href="/se/konto/logga-ut/" v-if="loggedIn">
                <button class="btn btn--primary login-button">{{ cont.loginHandler.logout }}</button>
            </a>
        </div>
    </figure>
</template>
<script>
export default {
    data: function(){
        return {
            loggedIn: false,
            cont: this.$localeJSON,
        }
    },
    methods: {
        userLogin: function(){
            // Check if login cookie is set
            if( document.cookie.indexOf('auth=') !== -1) {
                this.loggedIn = !this.loggedIn;
            } else {
                this.loggedIn === false;
            }
        }
    },
    beforeMount(){
    },
    mounted(){
        this.userLogin();
    }
}
</script>

<style lang="scss">
@import '~/components/partials/LoginHandler.scss';
</style>
