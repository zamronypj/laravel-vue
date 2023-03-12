import axios from 'axios'

/**
 * Vuex store to maintain logistic data
 */

const logisticStore = {
    namespaced: true,

    state: {
        status: 'draft',

        vendors: [],
        selectedVendor: null,

        quotation: '',
        personInCharge: '',

        customerContracts: [],
        selectedContract: null,

        customerPurchaseOrders: [],
        selectedPurchaseOrder: null,

        invoiceTo: [],
        selectedInvoiceTo: null,
    },

    getters: {
        vendorAddress(aState) {
            return aState.selectedVendor ? aState.selectedVendor.address : ''
        }
    },

    mutations: {
        setQuotation(aState, quote) {
            aState.quotation = quote
        },

        setPersonInCharge(aState, pic) {
            aState.personInCharge = pic
        },

        setSelectedVendor(aState, assignedVendor) {
            aState.selectedVendor = assignedVendor
        },

        setSelectedInvoiceTo(aState, inv) {
            aState.selectedInvoiceTo = inv
        },

        setSelectedPurchaseOrder(aState, po) {
            aState.selectedPurchaseOrder = po
        },

        setVendors(aState, vendorList) {
            aState.vendors = vendorList
        },
        setContracts(aState, contractList) {
            aState.customerContracts = contractList
        },

        setPurchaseOrders(aState, orderList) {
            aState.customerPurchaseOrders = orderList
        },

        setInvoiceTo(aState, toList) {
            aState.invoiceTo = toList
        }
    },

    actions: {
        async fetchVendors({ commit }) {
            const result = await axios.get('/api/vendors')
            commit('setVendors', result.data)
        },

        async fetchContracts({ commit }) {
            const result = await axios.get('/api/contracts')
            commit('setContracts', result.data)
        },

        async fetchPurchaseOrders({ commit }) {
            const result = await axios.get('/api/purchase-orders')
            commit('setPurchaseOrders', result.data)
        },

        async fetchInvoiceTo({ commit }) {
          const result = await axios.get('/api/invoice-to')
          commit('setInvoiceTo', result.data)
      },
  }

}

export default logisticStore