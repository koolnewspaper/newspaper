function processSearchQueryWithSimilarity(query, items, threshold = 0.4) {
    if (!query || !items || !Array.isArray(items)) {
      return []; // Return an empty array if input is invalid
    }
  
    return items.filter(item => {
      const similarity = stringSimilarity.compareTwoStrings(query.toLowerCase(), item.toLowerCase());
      return similarity >= threshold; // Include items with similarity above the threshold
    });
  }

window.addEventListener('load', function() {
    const kool_promise = fetchJSONData("https://raw.githubusercontent.com/koolnewspaper/newspaper/refs/heads/main/data.json");
    kool_promise.then(data => {
        console.log(data)
        deploy_app(app_ref(data), "#top")
        deploy_app(app_ref(data), "#very_bottom")

        console.log(data.articles[0])
        deploy_app(app_ref(data.articles[0]), "#main")

        deploy_app(app_ref(data.articles[0]), "#bottom_bar")

        deploy_app(app_ref(data), "#bottom_areatitle")

        this.document.getElementById("cover_elem").style.display = "none";
    });
});