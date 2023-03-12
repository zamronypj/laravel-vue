<template>
    <tfoot>
        <tr v-for="(curr, idx) in availCurrencies" :key="curr.id">
            <th v-if="!idx ? true : false" :rowspan="totalRowSpan" colspan="7">
                Exchange Rate 1 USD = 3.6725 AED
            </th>
            <th class="curr">
                <span>{{ currName(curr) }} in Total</span>
            </th>
            <th class="vat">
                <span>{{ vatByCurrency(curr) }}</span>
            </th>
            <th class="subtotal">
                <span>{{ subTotalByCurrency(curr) }}</span>
            </th>
            <th class="total">
                <span>{{ totalByCurrency(curr) }}</span>
            </th>
            <th v-if="!idx ? true : false" :rowspan="totalRowSpan" colspan="2" class="action-btn">
                <button class="btn btn-primary" @click="newCost">
                    <i class="fa fa-plus"></i>
                </button>
            </th>
        </tr>
    </tfoot>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters('cost', [
            'selectedCurrencies',
            'vatByCurrency',
            'subTotalByCurrency',
            'totalByCurrency',
            'currName'
        ]),

        hasSelectedCurrencies() {
            return this.selectedCurrencies && this.selectedCurrencies.length
        },

        availCurrencies() {
            return this.hasSelectedCurrencies ? this.selectedCurrencies : ['']
        },

        totalRowSpan() {
            return this.hasSelectedCurrencies ? this.selectedCurrencies.length : 1
        }
    },

    methods: {
        ...mapMutations('cost', [ 'addCost']),

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

<style lang="scss" scoped>

    .action-btn {
        text-align: right;
    }
</style>