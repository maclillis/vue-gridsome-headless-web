export default {
    install(Vue, options) {
        if (options.isClient)
            window.dataLayer = [options.dataLayerInfo];
        
        Vue.prototype.$dataLayer = {
            push: function (obj) {
                window.dataLayer.push(obj);
            },
            push_event: function (eventName, obj) {
                var eventInObj = 'event' in obj;
                if ((eventName == null ||
                    typeof (eventName) == 'undefined' ||
                    eventName.trim() == '') &&
                    !eventInObj)
                    console.log('event name must be defined');

                if (!eventInObj)
                    obj['event'] = eventName;

                window.dataLayer.push(obj);
            }
        };
    }
}