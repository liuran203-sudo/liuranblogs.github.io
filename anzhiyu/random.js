var posts=["posts/20dcad40/","posts/6b218ca2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };