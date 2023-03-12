<template>
    <div class="container home">
        <div class="row justify-content-center">
            <div class="col">
                <h2>Cost Detail <i class="fa fa-chevron-down"></i></h2>
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

    h2 {
        font-size: medium;
        font-weight: bold;
        color:teal;
    }
  }
}
</style>