<template>
    <div class="hello">
        <div class="link">
            <router-link
                    to="ApiPost"
            >
                API Post View
            </router-link>
        </div>
        <br>
        {{ this.sport }}
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        props: {
            msg: String
        },
        data() {
            return {
                sport: {}
            }
        },
        created() {
            this.$http.get('sports/5')
                .then(response => {
                    this.sport = response.data.api.data;
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
