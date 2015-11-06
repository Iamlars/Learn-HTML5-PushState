var tab = $('#J_tab'),
    allLinks = tab.find('a'),
    main = $('main'),
    pages = {
      index: '<article><h2>首页</h2><section class="content-wrap">万恶我为首</section></article>',
      about: '<article><h2>关于我们</h2><section class="content-wrap">我们是一群可爱的蓝精灵</section></article>',
      intro: '<article><h2>产品介绍</h2><section class="content-wrap">我们不生产代码，只做代码的搬用工</section></article>',
      empoly: '<article><h2>职位招聘</h2><section class="content-wrap">诚聘女友3名，年龄16-30岁，身高160-170，肤白貌美</section></article>'
    },
    timer = null;


callback();

// 点击侧栏
tab.on('click','a',function(){
  clearTimeout(timer);


  var href = $(this).attr('href');

  timer = setTimeout(function(){
    window.history.pushState({page:href},'test',href);
    callback();
  },200);

  return false;
});

// 监听浏览器pushState事件
 if('pushState' in history){
   window.addEventListener("popstate", function() {
    callback();
   });
 }

 function callback(){
   var pathname = location.pathname.match(/\/(.*)\.html/);
   var html = pathname ? pathname[1] : "index";
   var page = $(pages[html]);
  var activePage = main.find('.page-active');

   allLinks.removeClass('active');
   $('#J_'+html).addClass('active');

   main.append(page);

   activePage.addClass('page-out');
   setTimeout(function(){
     activePage.remove();
   },300);

   setTimeout(function(){
     page.addClass('page-active');
   },10);



 }
