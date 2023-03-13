<template>
    <div class="vendor">
        <div class="d-flex">
            <label>
                <span>Assigned Vendor</span>
                <select v-model="assignedVendor">
                    <option v-for="vendor in vendors" :key="vendor.id" :value="vendor">{{ vendor.name }}</option>
                </select>

            </label>
            <label>
                <span>Attention Of</span>
                <input v-model="pic" type="text">
            </label>

            <label>
                <span>Quotation No.</span>
                <input v-model="quote" type="text">
            </label>
            <label>
                <span>Invoice To</span>
                <select v-model="assignedInvoiceTo">
                    <option v-for="inv in invoiceTo" :key="inv.id" :value="inv.id">{{ inv.name }}</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                <div>Vendor Address</div>
                <div>{{ vendorAddress }}</div>
            </label>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';

export default {
    name: 'VendorData',

    computed: {
        ...mapState('logistic', [
            'vendors',
            'selectedVendor',
            'personInCharge',
            'quotation',
            'invoiceTo',
            'selectedInvoiceTo'
        ]),
        ...mapGetters('logistic', ['vendorAddress']),
        pic: {
            get() {
                return this.personInCharge
            },
            set(val) {
                this.setPersonInCharge(val)
            }
        },
        quote: {
            get() {
                return this.quotation
            },
            set(val) {
                this.setQuotation(val)
            }
        },
        assignedVendor: {
            get() {
                return this.selectedVendor
            },
            set(val) {
                this.setSelectedVendor(val)
            }
        },
        assignedInvoiceTo: {
            get() {
                return this.selectedInvoiceTo
            },
            set(val) {
                this.setSelectedInvoiceTo(val)
            }
        },
    },

    methods: {
        ...mapActions('logistic', ['fetchVendors', 'fetchInvoiceTo']),
        ...mapMutations('logistic', [
            'setPersonInCharge',
            'setQuotation',
            'setSelectedVendor',
            'setSelectedInvoiceTo'
        ]),
    },

    mounted() {
        this.fetchVendors();
        this.fetchInvoiceTo();
    }
}
</script>

<style lang="scss" scoped>
.vendor {
    padding: 20px;

    label {
        padding:20px;
        span {
            display: block;
        }
        input {
            background-color: #f0f0f0;
        }

        select, input {
            padding:5px 10px;
        }
    }
}
</style>