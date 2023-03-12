<template>
    <div class="d-flex">
        <label>
            <span>Customer - Contract</span>
            <select v-model="assignedContract">
                <option v-for="ctr in customerContracts" :key="ctr.id" :value="ctr.id">{{ ctr.name }}</option>
            </select>
        </label>
        <label>
            <span>Customer - PO No.</span>
            <select v-model="assignedPo">
                <option v-for="po in customerPurchaseOrders" :key="po.id" :value="po.id">{{ po.name }}</option>
            </select>
        </label>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    name: 'ContractData',

    computed: {
        ...mapState('logistic', [
            'customerContracts',
            'selectedContract',
            'customerPurchaseOrders',
            'selectedPurchaseOrder'
        ]),
        assignedContract: {
            get() {
                return this.selectedContract
            },
            set(val) {
                this.setSelectedContract(val)
            }
        },
        assignedPo: {
            get() {
                return this.selectedPurchaseOrder
            },
            set(val) {
                this.setSelectedPurchaseOrder(val)
            }
        },

    },

    methods: {
        ...mapActions('logistic', ['fetchContracts', 'fetchPurchaseOrders']),
        ...mapMutations('logistic', ['setSelectedContract', 'setSelectedPurchaseOrder']),
    },

    mounted() {
        this.fetchContracts();
        this.fetchPurchaseOrders();
    }
}
</script>