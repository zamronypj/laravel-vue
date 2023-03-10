import axios from "axios"

const getAmount = (cost) => cost.price * cost.qty
const getDiscount = (cost) => cost.discountPercent / 100
const getVat = (cost) => cost.vatPercent / 100

const getDiscountAmount = (cost) => getDiscount(cost) * getAmount(cost)
const getVatAmount = (cost) => getVat(cost) * getAmount(cost)

const getSubTotal = (cost) => (1 - getDiscount(cost)) * getAmount(cost)
const getTotal = (cost) => (1 + getVat(cost)) * getSubTotal(cost)

/**
 * Vuex store to maintain costs data
 */
const costStore = {
    state: {
      costs: [],
      uoms: [],
      currencies: [],
      chargeTo: []
    },

    getters: {
        /**
         * get all non duplicates currencies in costs array
         * @param {*} state
         * @returns
         */
        selectedCurrencies(aState) {
            const seen = {};
            return aState.costs.filter((cost) => {
                return seen.hasOwnProperty(cost.currency) ? false : (seen[cost.currency] = true);
            }).map(cost => cost.currency)
        },

        discount: (aState) => (cost) => {
            return getDiscountAmount(cost)
        },

        vat: (state) => (cost) => {
            return getVatAmount(cost)
        },

        subTotal: (aState) => (cost) => {
            return getSubTotal(cost)
        },

        total: (aState) => (cost) => {
            return getTotal(cost)
        },

        /**
         * get total VAT by currency
         * @param {*} aState
         * @returns Number
         */
        vatByCurrency: (aState) => (curr) => {
            return aState.costs
                .filter(cost => cost.currency === curr)
                .reduce((total, cost) => total + getVatAmount(cost), 0)
        },

        /**
         * get sub total by currency
         * @param {*} aState
         * @returns Number
         */
        subTotalByCurrency: (aState) => (curr) => {
            return aState.costs
                .filter(cost => cost.currency === curr)
                .reduce((total, cost) => total + getSubTotal(cost), 0)
        },

        /**
         * get total amount by currency
         * @param {*} aState
         * @returns Number
         */
        totalByCurrency: (aState) => (curr) => {
            return aState.costs
                .filter(cost => cost.currency === curr)
                .reduce((total, cost) => total + getTotal(cost), 0)
        }
    },

    mutations: {
        setUoms(aState, uomsList) {
            aState.uoms = uomsList
        },
        setCurrencies(aState, currList) {
            aState.currencies = currList
        },
        setChargeTo(aState, chargeList) {
            aState.chargeTo = chargeList
        },

        addCost(aState, costData) {
            aState.costs.push(costData)
        },

        removeCost(aState, costData) {
            const indx = aState.costs.indexOf(costData)
            aState.costs.splice(indx)
        }
    },

    actions: {
        async fetchUoms({ commit }) {
            const result = await axios.get('/api/uoms')
            commit('setUoms', result.data)
        },

        async fetchCurrencies({ commit }) {
            const result = await axios.get('/api/currencies')
            commit('setCurrencies', result.data)
        },

        async fetchChargeToList({ commit }) {
            const result = await axios.get('/api/charge-to')
            commit('setChargeTo', result.data)
        },
    }
}

export default costStore