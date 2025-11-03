function app_ref(data) {
    return Vue.createApp({data() {return data}})
}

function deploy_app(app, cls) {
    app.mount("."+cls)
}