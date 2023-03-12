<template>
    <div class="logistic">
        <div class="d-flex align-items-center">
            <h2 @click="toggleShow">
                <i class="fa fa-truck text-logistic"></i> Logistic Instruction <i class="fa" :class="toggleClass"></i>
            </h2>
            <span class="status">{{ status }}</span>
        </div>
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
        ...mapState('logistic', [ 'status' ])
    }
}
</script>

<style lang="scss" scoped>
.logistic {

    h2 {
        font-size: medium;
        font-weight: bold;
        cursor: pointer;
        padding-top: 10px;
        padding-bottom: 10px;
        .text-logistic {
            color:teal;
        }
    }
    .status {
        display: flex;
        background-color: #e0e0e0;
        padding: 2px 30px;
        border-radius: 10px;
        margin-left:50px;
    }
}


</style>
