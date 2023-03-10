<template>
    <tfoot>
        <tr>
            <th colspan="7">Exchange Rate 1 USD = 3.746 AED</th>
            <th colspan="4">
                <div v-for="curr in selectedCurrencies" :key="curr.id">
                    <span>{{ currName(curr) }} in Total</span>
                    <span>{{ vatByCurrency(curr) }}</span>
                    <span>{{ subTotalByCurrency(curr) }}</span>
                    <span>{{ totalByCurrency(curr) }}</span>
                </div>
            </th>
            <th>&nbsp;</th>
            <th>
                <button class="btn btn-primary" @click="newCost"><i class="fa fa-plus"></i></button>
            </th>
        </tr>
    </tfoot>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'selectedCurrencies',
            'vatByCurrency',
            'subTotalByCurrency',
            'totalByCurrency',
            'currName'
        ])
    },

    methods: {
        ...mapMutations([ 'addCost']),

        newCost() {
            const cost = {
                desc: '',
                qty: 0,
                price: 0,
                currency:0,
                uom:0,
                charge: 0,
                vatPercent: 0,
                discountPercent: 0
            }
            this.addCost(cost)
        }
    }
}
</script>