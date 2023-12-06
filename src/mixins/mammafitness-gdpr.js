export default {
    mounted() {
        document.addEventListener('consentUpdate', this.handleConsent);
    },
    beforeDestroy() {
        document.removeEventListener('consentUpdate', this.handleConsent);
    },
    methods: {
        handleConsent: function (event) {
            // dispatches 1 event per "app" configured for klaro in gridsome.config.js, 1 should suffice
            document.removeEventListener('consentUpdate', this.handleConsent);

            var klaroManager = window.klaro.getManager();
            var consent = klaroManager.consents;
            consent['confirmed'] = klaroManager.confirmed;

            this.$dataLayer.push_event('mammafitnessConsentUpdated', { consent: consent });
        },
        after_mount: function (data, callback) {
            this.$dataLayer.push_event('virtualPageView', data);

            if (callback != null && typeof (callback) == 'function')
                callback();
        }
    }
}