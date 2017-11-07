// get the json file
$.get("https://www.reddit.com/r/aww/.json", function(data) {

      var blogPost = data.data.children; //stores info

      for (var i = 1; i <= 10; i++) { //loop to run thru posts, skipping the first one

        var article = blogPost[i];
        var blogEl = $("<section>");

        var blogContainer = $("<ol id='blogContainer'>");
        blogEl.append(blogContainer);

        var textContent = $("<div id='textContent'>");
        blogContainer.append(textContent);

        var thumbnail = article.data.thumbnail;
        var photo = $("<div id='photo'>");
        photo.append("<img src=" + thumbnail + ">");
        blogContainer.append(photo);

        var title = article.data.title;
        var blogTitle = $("<h3 id='title'>");
        blogTitle.append(title);
        textContent.append(blogTitle);

        var link = article.data.domain;
        var blogLink = $("<a href='" + link + "'>Link to Article</a>");
        textContent.append(blogLink);







      $("#mainPage").append(blogEl);


    }
});
