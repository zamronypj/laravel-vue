<template>
    <div>
        <h2>Cost Detail <i class="fa fa-chevron-down"></i></h2>
        <CostDetailTable></CostDetailTable>
        <ButtonSection></ButtonSection>

    </div>
</template>

<script>
import ButtonSection from '../../common/ButtonSection.vue';
import CostDetailTable from './CostDetailTable.vue';

export default {
    name: 'CostDetail',
    components: {
        CostDetailTable,
        ButtonSection
    }
}
</script>