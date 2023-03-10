<template>
    <tbody>
        <tr v-for="cost in costs" :key="cost.id">
            <td>
                <input type="text" v-model="cost.desc" placeholder="Description">
            </td>

            <td>
                <input type="number" v-model="cost.qty">
            </td>

            <td>
                <select v-model="cost.uom">
                    <option v-for="uom in uoms" :key="uom.id" :value="uom.id">{{ uom.name }}</option>
                </select>
            </td>

            <td>
                <input type="number" v-model="cost.price">
            </td>

            <td>
                <input type="number" v-model="cost.discountPercent">
            </td>

            <td>
                <input type="number" v-model="cost.vatPercent">
            </td>

            <td><i class="fas fa-chevron-right"></i></td>

            <td>
                <select v-model="cost.currency">
                    <option v-for="curr in currencies" :key="curr.id" :value="curr.id">{{ curr.name }}</option>
                </select>
            </td>

            <td>{{ vat(cost) }}</td>
            <td>{{ subTotal(cost) }}</td>
            <td>{{ total(cost) }}</td>
            <td>
                <select v-model="cost.charge">
                    <option v-for="ch in chargeTo" :key="ch.id" :value="ch.id">{{ ch.name }}</option>
                </select>
            </td>
            <td><button class="btn btn-default" @click="removeCost(cost)"><i class="fa fa-minus"></i></button></td>
        </tr>
    </tbody>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState([ 'costs', 'uoms', 'currencies', 'chargeTo' ]),
        ...mapGetters([ 'vat', 'subTotal', 'total' ])
    },

    methods: {
        ...mapActions([ 'fetchUoms', 'fetchCurrencies', 'fetchChargeToList' ]),
        ...mapMutations([ 'removeCost' ]),
    },

    mounted() {
        this.fetchUoms()
        this.fetchCurrencies()
        this.fetchChargeToList()
    }
}
</script>