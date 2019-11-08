<template>
    <div class="item-editor">
        <div class="field">
            <label class="label">ACORTADOR</label>
            <div class="control">
                <input
                    v-model="value"
                    class="input"
                    placeholder="http://"
                    @keydown.enter.prevent="onSubmit"
                />
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button
                    class="button is-link"
                    @click="onSubmit">
                    Short
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UrlEditor',
    methods: {
        onSubmit () {
            this.$emit('submit', this.value)
            this.value = ''
        }
    },
    data () {
        return {
            value: '',
        }
    }
}
</script>
