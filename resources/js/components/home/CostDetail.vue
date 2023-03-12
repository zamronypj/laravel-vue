<template>
    <div class="table-responsive">
        <table class="table table-sm cost-detail">
            <CostDetailHeading></CostDetailHeading>
            <CostDetailFooter></CostDetailFooter>
            <CostDetailRows></CostDetailRows>
        </table>
    </div>
</template>

<script>
import CostDetailRows from './CostDetailRows.vue'
import CostDetailHeading from './CostDetailHeading.vue'
import CostDetailFooter from './CostDetailFooter.vue'

export default {
    name: 'CostDetail',
    components: {
        CostDetailRows,
        CostDetailFooter,
        CostDetailHeading
    }
}
</script>

<style lang="scss">
.cost-detail {
    table-layout: fixed;

    .desc {
        width:150px;
    }
    .qty {
        width:50px;
    }
}
</style>