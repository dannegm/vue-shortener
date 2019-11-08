<template>
    <div class="url-item panel-block">
        <div class="url-item__content">
            <p>
                {{ title }}
            </p>
            <a :href="href" target="_blank">
                {{ href }}
            </a>
            <a :href="shortLink" target="_blank">
                {{ shortLink }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UrlItem',
    props: {
        title: {
            type: String,
            default: '',
        },
        href: {
            type: String,
            default: '',
        },
        short: {
            type: String,
            default: '',
        },
    },
    computed: {
        shortLink () {
            return `http://s.dnn.one/s/${this.short}`;
        }
    }
}
</script>
