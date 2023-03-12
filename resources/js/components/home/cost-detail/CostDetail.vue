<template>
    <div>
        <h2 @click="toggleShow">
            Cost Detail <i class="fa" :class="toggleClass"></i>
        </h2>
        <div v-if="shouldShow">
            <CostDetailTable></CostDetailTable>
            <ButtonSection></ButtonSection>
        </div>
    </div>
</template>

<script>
import ButtonSection from '../../common/ButtonSection.vue';
import toggleMixin from '../../common/ToggleMixin';
import CostDetailTable from './CostDetailTable.vue';

export default {
    name: 'CostDetail',
    components: {
        CostDetailTable,
        ButtonSection
    },
    mixins: [ toggleMixin ]
}
</script>

<style scoped>
    h2 {
        font-size: medium;
        font-weight: bold;
        color:teal;
        cursor: pointer;
    }
</style>