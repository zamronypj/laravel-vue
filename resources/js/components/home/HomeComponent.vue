<template>
    <div class="container home">
        <div class="row justify-content-center">
            <div class="col">
                <h1>3rd Party Instruction</h1>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col">
                <LogisticInstruction></LogisticInstruction>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col">
                <CostDetail></CostDetail>
            </div>
        </div>
    </div>
</template>

<script>

import CostDetail from './cost-detail/CostDetail.vue';
import LogisticInstruction from './logistic-instruction/LogisticInstruction.vue';

export default {
    name: 'HomeComponent',

    components: {
        CostDetail,
        LogisticInstruction
    }
}
</script>

<style lang="scss" scoped>
.home {
  &.container {
    max-width: 100%;
    padding:20px;

    h1 {
        font-size: large;
        font-weight: bold;
    }
  }
}
</style>