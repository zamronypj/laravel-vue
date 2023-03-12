<template>
    <div class="container home">
        <div class="row justify-content-center">
            <div class="col">
                <CostDetail></CostDetail>
                <ButtonSection></ButtonSection>
            </div>
        </div>
    </div>
</template>

<script>

import ButtonSection from '../common/ButtonSection.vue';
import CostDetail from './CostDetail.vue';

export default {
    name: 'HomeComponent',
    components: {
        CostDetail,
        ButtonSection
    },

    mounted() {
    }
}
</script>

<style lang="scss">
.home {
  &.container {
    max-width: 100%;
    padding:10px;
  }
}
</style>