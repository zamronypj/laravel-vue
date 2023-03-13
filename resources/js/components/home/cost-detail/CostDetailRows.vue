<template>
    <tbody>
        <tr v-for="cost in costs" :key="cost.id">
            <td class="desc">
                <input type="text" v-model="cost.desc" placeholder="Description">
            </td>

            <td class="qty">
                <input type="number" v-model="cost.qty">
            </td>

            <td class="uom">
                <select v-model="cost.uom">
                    <option v-for="uom in uoms" :key="uom.id" :value="uom.id">{{ uom.name }}</option>
                </select>
            </td>

            <td class="price">
                <input type="number" v-model="cost.price" placeholder="Unit price">
            </td>

            <td class="discount">
                <input type="number" v-model="cost.discountPercent">
            </td>

            <td class="vat">
                <input type="number" v-model="cost.vatPercent">
            </td>

            <td class="separator"><i class="fas fa-arrow-right"></i></td>

            <td class="curr">
                <select v-model="cost.currency">
                    <option v-for="curr in currencies" :key="curr.id" :value="curr.id">{{ curr.name }}</option>
                </select>
            </td>

            <td class="vat-amount"><span>{{ vat(cost) }}</span></td>
            <td class="subtotal"><span>{{ subTotal(cost) }}</span></td>
            <td class="total"><span>{{ total(cost) }}</span></td>
            <td class="charge-to">
                <select v-model="cost.charge">
                    <option v-for="ch in chargeTo" :key="ch.id" :value="ch.id">{{ ch.name }}</option>
                </select>
            </td>
            <td class="action-btn">
                <button class="btn btn-grey" @click="removeCost(cost)">
                    <i class="fa fa-minus"></i>
                </button>
            </td>
        </tr>
    </tbody>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState('cost', [ 'costs', 'uoms', 'currencies', 'chargeTo' ]),
        ...mapGetters('cost', [ 'vat', 'subTotal', 'total' ])
    },

    methods: {
        ...mapActions('cost', [ 'fetchUoms', 'fetchCurrencies', 'fetchChargeToList' ]),
        ...mapMutations('cost', [ 'removeCost' ]),
    },

    mounted() {
        this.fetchUoms()
        this.fetchCurrencies()
        this.fetchChargeToList()
    }
}
</script>

<style lang="scss" scoped>
    .desc {
        input {
            width: 150px;
        }
    }
    .qty, .discount, .vat {
        input {
            width: 50px;
        }
    }

    .separator {
        i {
            width:30px;
        }
    }

    .uom, .curr {
        select {
            width: 80px;
            padding:5px 10px;
        }
    }
    .price {
        input {
            width: 100px;
        }
    }

    .vat-amount, .subtotal, .total {
        span {
            width:20%;
        }
    }

    .action-btn {
        text-align: right;
        button {
            background-color: #d0d0d0;
        }
    }
</style>