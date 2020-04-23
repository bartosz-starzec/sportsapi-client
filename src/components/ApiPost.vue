<template>
    <div class="hello">
        <button class="api-post" type="button" @click="sendPost()">Send POST to API</button>
        <hr/>
        <div class="translation">
            {{ this.translation }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ApiPost',
        data() {
            return {
                translation: {}
            }
        },
        created() {
            this.getTranslation();
        },
        methods: {
            getTranslation() {
                this.$http.get('translations?resource_id=51450')
                    .then(response => {
                        this.translation = response.data.api.data.translations;
                    });
            },
            sendPost() {
                this.$http.post('translations', {
                    lang_code: "pl",
                    value: "Test",
                    resource_id: 51450,
                    resource_type: "participants",
                    resource_field: "name"
                }).then(() => {
                    this.getTranslation();
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .api-post {
        margin: 5px 0;
    }
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
