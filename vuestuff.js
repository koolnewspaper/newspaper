function fetchJSONData(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => console.error('Failed to fetch data:', error)); 
}

function app_ref(data) {
    return Vue.createApp({data() {return data}})
}

function deploy_app(app, ref) {
    app.mount(ref)
}

window.addEventListener('load', function() {
    const kool_promise = fetchJSONData("https://raw.githubusercontent.com/koolnewspaper/newspaper/refs/heads/main/data.json");
    kool_promise.then(data => {
        console.log(data)
        deploy_app(app_ref(data), "#body")
        this.document.getElementById("cover_elem").style.display = "none";
    });
});