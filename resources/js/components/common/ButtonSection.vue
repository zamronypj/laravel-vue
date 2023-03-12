<template>
    <div class="d-flex justify-content-end btn-container">
        <button type="button" class="btn btn-default btn-outline-default btn-lg">Cancel</button>
        <button type="button" class="btn btn-default btn-outline-default btn-lg">Save as Draft</button>
        <button type="button" class="btn btn-primary btn-outline-primary btn-lg">Submit</button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$padding-size : 50px;
.btn-container {
    button {
        padding-left: $padding-size;
        padding-right: $padding-size;
        border-radius: 0%;
    }
}
</style>
