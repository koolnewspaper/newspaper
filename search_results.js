window.addEventListener('load', function() {
    result_data = {
        "results": [
            {
                "name": "name",
                "src": "src",
                "summary": "summary",
                "author": "author"
            }
        ]
    }; // Null for right now, add communication later
    console.log(result_data)
    deploy_app(app_ref(result_data), "#main")

    
    const kool_promise = fetchJSONData("https://raw.githubusercontent.com/koolnewspaper/newspaper/refs/heads/main/data.json");
    kool_promise.then(data => {
        console.log(data)
        deploy_app(app_ref(data), "#top")
        deploy_app(app_ref(data), "#very_bottom")

        this.document.getElementById("cover_elem").style.display = "none";
    });
});