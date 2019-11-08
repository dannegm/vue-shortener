<template>
    <div class="url-item panel-block">
        <div class="url-item__content">
            <p><b>{{ title }}</b></p>
            <p>{{ description }}</p>
            <a :href="shortLink" class="has-text-success" target="_blank">
                {{ shortLink }}
            </a>
            <br />
            <a :href="href" class="is-small" target="_blank">
                <small>{{ href | truncate }}</small>
            </a>
            <br />
            <span>
                <small>
                    {{ createdAt | format('MMM Do, YYYY @ h:mm a') }}
                </small>
            </span>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'UrlItem',
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
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
        createdAt: {
            type: String,
            default: '',
        },
    },
    filters: {
        truncate (value, length = 60) {
            if (value.length > length) {
                const truncate = value.substring(0, length)
                return `${truncate}...`;
             }
             return value
        }
    },
    computed: {
        shortLink () {
            return `http://s.dnn.one/s/${this.short}`;
        },
    }
}
</script>
