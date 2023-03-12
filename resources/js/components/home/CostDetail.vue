<template>
    <div class="table-responsive">
        <table class="table table-sm">
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

