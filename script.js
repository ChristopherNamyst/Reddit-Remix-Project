$(function() {

  // get the json file
  $.get("https://www.reddit.com/r/aww/.json", function(data) {
    var redditPosts = data.data.children;
    redditPosts.forEach(function(blogPost) {
      var postEl = $("<section class='post'>");
      var titleEl = $("<h3>");

    

      $("#main").append(postEl);

    });

  });
});
