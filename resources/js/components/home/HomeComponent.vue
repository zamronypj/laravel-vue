<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
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
