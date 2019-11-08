<template>
    <div class="home">
        <div class="columns is-centered">
            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
                <section class="section">
                    <div class="container">
                        <UrlEditor @submit="createShort" />
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <UrlList
                            v-if="mappedItems.length"
                            :items="mappedItems" />

                        <div v-else class="notification is-info">
                            Aún no hay enlaces
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import UrlEditor from '@/components/UrlEditor'
import UrlList from '@/components/UrlList'

let currentID = 0;

export default {
    name: 'home',
    components: {
        UrlEditor,
        UrlList,
    },
    methods: {
        ...mapActions([ 'getUrls' ]),
        createShort (content) {
            // TODO: Create a short url feature
        },
    },
    async mounted () {
        await this.getUrls()
    },
    computed: {
        ...mapGetters([ 'mappedItems' ])
    }
}
</script>
