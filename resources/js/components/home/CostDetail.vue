<template>
    <table class="cost-detail">
        <CostDetailHeading></CostDetailHeading>
        <CostDetailFooter></CostDetailFooter>
        <CostDetailRows></CostDetailRows>
    </table>
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

<style lang="scss" scoped>
.cost-detail {
    width:100%;
}
</style>