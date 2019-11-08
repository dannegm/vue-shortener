<template>
    <div class="url-list">
        <div class="panel">
            <p class="panel-heading">
                Enlaces acortados
            </p>
            <template v-for="item in items">
                <UrlItem
                    :key="item.id"
                    v-bind="item"
                />
            </template>
        </div>
    </div>
</template>

<script>
import UrlItem from './UrlItem.vue'
export default {
    name: 'UrlList',
    components: {
        UrlItem
    },
    props: {
        items: {
            type: Array,
            default () {
                return []
            }
        }
    },
}
</script>
