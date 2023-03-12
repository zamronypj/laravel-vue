<template>
    <div class="d-flex justify-content-end">
        <VendorData></VendorData>
        <ContractData></ContractData>
    </div>
</template>

<script>
import VendorData from './VendorData.vue'
import ContractData from './ContractData.vue'

export default {
    name: 'LogisticData',

    components: {
        VendorData,
        ContractData,
    }
}
</script>