

  // get the json file
  $.get("https://www.reddit.com/r/aww/.json", function(data) {

    var redditPosts = data.data.children;//stores info
    var article = redditPosts[];
    for( var i = 1; i <= 10; i ++){ //loop to run thru posts, skipping the first one



      var blogTitle = post.data.title;
      var blogUrl = post.data.url;
      var blogScore = post.data.score;
      var blogAuthor = post.data.author;
      var blogThumbnail = post.data.thumbnail;
      var blogEl = $("<section>");
      var blogPage = $("<div id='blogPage'>");



      blogEl.append(article);
      blogEl.append(blogTitle);
      blogEl.append(blogUrl);
      blogEl.append(blogScore);
      blogEl.append(blogAuthor);
      blogEl.appand(blogThumbnail);









      $("#main").append(postEl);


}
});
