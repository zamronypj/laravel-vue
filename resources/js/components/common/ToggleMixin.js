export default {
    data() {
        return {
            shouldShow: true
        }
    },

    computed: {
        toggleClass() {
            return this.shouldShow ? 'fa-chevron-down': 'fa-chevron-up'
        }
    },

    methods: {
        toggleShow() {
            this.shouldShow = !this.shouldShow
        }
    }

}