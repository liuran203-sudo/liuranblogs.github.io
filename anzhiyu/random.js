var posts=["2026/08/30/20260902/","2026/09/12/从零搭建Hexo博客并部署到GitHub/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };