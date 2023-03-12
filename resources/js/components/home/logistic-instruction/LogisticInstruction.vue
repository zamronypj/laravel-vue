<template>
    <div class="d-flex">
        <h2 @click="toggleShow">
            <i class="fa fa-truck text-logistic"></i> Logistic Instruction <i class="fa" :class="toggleClass"></i>
        </h2>
        <span class="status">{{ status }}</span>
        <LogisticData v-if="shouldShow"></LogisticData>
    </div>
</template>

<script>
import toggleMixin from '../../common/ToggleMixin';
import LogisticData from './LogisticData.vue';
import { mapState } from 'vuex';

export default {
    name: 'LogisticInstruction',
    components: { LogisticData },
    mixins: [ toggleMixin ],
    computed: {
        ...mapState('logistic', [ 'status', 'quotation' ])
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        font-size: medium;
        font-weight: bold;
        cursor: pointer;
        .text-logistic {
            color:teal;
        }
    }

</style>
