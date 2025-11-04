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
    return Vue.createApp({data() {return data}, methods: {
        redirect(src) { window.location.href = src } ,
        topbar_search() {
            return processSearchQueryWithSimilarity(document.getElementById("topbar_search_input").value, data.search_articles.keys())
        }
    }})
}

function deploy_app(app, ref) {
    app.mount(ref)
}