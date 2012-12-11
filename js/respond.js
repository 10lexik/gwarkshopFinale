


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>respond.min.js at master from scottjehl/Respond - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="qrZ+86QaRHO6W5gaOpOPAlkGTqdnW/dJj9WRtlZR7oA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-ce4abc8fb736cacb557664dcd8194a5486c74f6b.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-6c2aad85e5c2becfaac6d62ce0f290d10fa1725e.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-724a1478428e953614c0459ba27f5d900fc109be.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/scottjehl/Respond/blob/52e8efdc0ed72f4a3d622e1a5dfca75773651771/respond.min.js'>
    

    <meta name="description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" />
  <link href="https://github.com/scottjehl/Respond/commits/master.atom" rel="alternate" title="Recent Commits to Respond:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">
    


    

      <div id="header" class="true clearfix">
        <div class="container" class="clearfix">
          <a class="site-logo" href="https://github.com">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882716" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882716" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325358" />
          </a>

                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fscottjehl%2FRespond%2Fblob%2Fmaster%2Frespond.min.js">Login</a></li>
    </ul>



          
        </div>
      </div>

      

            <div class="site">
      <div class="container">
        <div class="pagehead repohead instapaper_ignore readability-menu">


        <div class="title-actions-bar">
          <h1>
            <a href="/scottjehl">scottjehl</a> /
            <strong><a href="/scottjehl/Respond" class="js-current-repository">Respond</a></strong>
          </h1>
          



              <ul class="pagehead-actions">


          <li><a href="/login?return_to=%2Fscottjehl%2FRespond" class="minibutton btn-watch watch-button entice tooltipped leftwards" rel="nofollow" title="You must be logged in to use this feature"><span><span class="icon"></span>Watch</span></a></li>
          <li><a href="/login?return_to=%2Fscottjehl%2FRespond" class="minibutton btn-fork fork-button entice tooltipped leftwards" rel="nofollow" title="You must be logged in to use this feature"><span><span class="icon"></span>Fork</span></a></li>


      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/scottjehl/Respond/watchers" title="Watchers" class="tooltipped downwards">
              1,606
            </a>
          </li>
          <li class="forks">
            <a href="/scottjehl/Respond/network" title="Forks" class="tooltipped downwards">
              107
            </a>
          </li>
        </ul>
      </li>
    </ul>

        </div>

          

  <ul class="tabs">
    <li><a href="/scottjehl/Respond" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/scottjehl/Respond/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/scottjehl/Respond/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>9</span></a></li>

      <li><a href="/scottjehl/Respond/issues" highlight="repo_issues">Issues <span class='counter'>41</span></a></li>


    <li><a href="/scottjehl/Respond/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/scottjehl/Respond/tree-list/52e8efdc0ed72f4a3d622e1a5dfca75773651771"
      data-blob-url-prefix="/scottjehl/Respond/blob/52e8efdc0ed72f4a3d622e1a5dfca75773651771"
    >

  <div class="breadcrumb">
    <b><a href="/scottjehl/Respond">Respond</a></b> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/scottjehl/Respond/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container" data-navigation-enable-mouse>
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/cross-domain/respond.min.js" data-name="cross-domain">cross-domain</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/em-experimental/respond.min.js" data-name="em-experimental">em-experimental</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/em-support/respond.min.js" data-name="em-support">em-support</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/gh-pages/respond.min.js" data-name="gh-pages">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/master/respond.min.js" data-name="master">master</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/shorthand-syntax/respond.min.js" data-name="shorthand-syntax">shorthand-syntax</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/stevelove-logical-not/respond.min.js" data-name="stevelove-logical-not">stevelove-logical-not</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/scottjehl/Respond/blob/1.0.0/respond.min.js" data-name="1.0.0">1.0.0</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/scottjehl/Respond" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/scottjehl/Respond/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/scottjehl/Respond/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">7</span></a></li>
    <li><a href="/scottjehl/Respond/tags" class="" highlight="repo_tags">Tags <span class="counter">1</span></a></li>
    <li><a href="/scottjehl/Respond/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/scottjehl/Respond/commit/52e8efdc0ed72f4a3d622e1a5dfca75773651771" class="message">Merge pull request </a><a href="https://github.com/scottjehl/Respond/issues/87" title="This space is not always present." class="issue-link">#87</a><a href="/scottjehl/Respond/commit/52e8efdc0ed72f4a3d622e1a5dfca75773651771" class="message"> from fabiomcosta/patch-1</a>
      <a href="javascript:;" class="minibutton expander-minibutton js-details-target"><span>…</span></a>
  </p>
    <div class="commit-desc"><pre>This space is not always present.</pre></div>
  <div class="commit-meta">
    <a href="/scottjehl/Respond/commit/52e8efdc0ed72f4a3d622e1a5dfca75773651771" class="sha-block">commit <span class="sha">52e8efdc0e</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/mathiasbynens">mathiasbynens</a></span>
      authored <time class="js-relative-date" datetime="2011-12-09T23:38:05-08:00" title="2011-12-09 23:38:05">December 09, 2011</time>

    </div>
  </div>
</div>


<!-- block_view_fragment_key: views4/v8/blob:v14:1337658:scottjehl/Respond:b7fe2f47b8ba17a4e0e524014c9491eefea5018f:42e52894ed1916e4b278f3408c0bda86 -->
  <div id="slider">

    <div class="breadcrumb" data-path="respond.min.js/">
      <b><a href="/scottjehl/Respond/tree/52e8efdc0ed72f4a3d622e1a5dfca75773651771" class="js-rewrite-sha">Respond</a></b> / respond.min.js       <span style="display:none" id="clippy_1754" class="clippy-text">respond.min.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1310104853?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_1754&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1310104853?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_1754&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="respond.min.js/" data-permalink-url="/scottjehl/Respond/blob/52e8efdc0ed72f4a3d622e1a5dfca75773651771/respond.min.js" data-title="respond.min.js at master from scottjehl/Respond - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/scottjehl/Respond/edit/52e8efdc0ed72f4a3d622e1a5dfca75773651771/respond.min.js" data-method="post" rel="nofollow"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1310104853" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>2 lines (2 sloc)</span>
                <span>3.215 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/scottjehl/Respond/raw/master/respond.min.js" id="raw-url">raw</a></li>
                  <li><a href="/scottjehl/Respond/blame/master/respond.min.js">blame</a></li>
                <li><a href="/scottjehl/Respond/commits/master/respond.min.js" rel="nofollow">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*! Respond.js v1.0.1pre: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */</div><div class='line' id='LC2'>(function(e,h){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=h;if(h){return}var u=e.document,r=u.documentElement,i=[],k=[],p=[],o={},g=30,f=u.getElementsByTagName(&quot;head&quot;)[0]||r,b=f.getElementsByTagName(&quot;link&quot;),d=[],a=function(){var B=b,w=B.length,z=0,y,x,A,v;for(;z&lt;w;z++){y=B[z],x=y.href,A=y.media,v=y.rel&amp;&amp;y.rel.toLowerCase()===&quot;stylesheet&quot;;if(!!x&amp;&amp;v&amp;&amp;!o[x]){if(y.styleSheet&amp;&amp;y.styleSheet.rawCssText){m(y.styleSheet.rawCssText,x,A);o[x]=true}else{if(!/^([a-zA-Z]+?:(\/\/)?)/.test(x)||x.replace(RegExp.$1,&quot;&quot;).split(&quot;/&quot;)[0]===e.location.host){d.push({href:x,media:A})}}}}t()},t=function(){if(d.length){var v=d.shift();n(v.href,function(w){m(w,v.href,v.media);o[v.href]=true;t()})}},m=function(G,v,x){var E=G.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),H=E&amp;&amp;E.length||0,v=v.substring(0,v.lastIndexOf(&quot;/&quot;)),w=function(I){return I.replace(/(url\()['&quot;]?([^\/\)'&quot;][^:\)'&quot;]+)['&quot;]?(\))/g,&quot;$1&quot;+v+&quot;$2$3&quot;)},y=!H&amp;&amp;x,B=0,A,C,D,z,F;if(v.length){v+=&quot;/&quot;}if(y){H=1}for(;B&lt;H;B++){A=0;if(y){C=x;k.push(w(G))}else{C=E[B].match(/@media ([^\{]+)\{([\S\s]+?)$/)&amp;&amp;RegExp.$1;k.push(RegExp.$2&amp;&amp;w(RegExp.$2))}z=C.split(&quot;,&quot;);F=z.length;for(;A&lt;F;A++){D=z[A];i.push({media:D.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&amp;&amp;RegExp.$2,rules:k.length-1,minw:D.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&amp;&amp;parseFloat(RegExp.$1),maxw:D.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&amp;&amp;parseFloat(RegExp.$1)})}}j()},l,q,j=function(E){var v=&quot;clientWidth&quot;,x=r[v],D=u.compatMode===&quot;CSS1Compat&quot;&amp;&amp;x||u.body[v]||x,z={},C=u.createDocumentFragment(),B=b[b.length-1],w=(new Date()).getTime();if(E&amp;&amp;l&amp;&amp;w-l&lt;g){clearTimeout(q);q=setTimeout(j,g);return}else{l=w}for(var y in i){var F=i[y];if(!F.minw&amp;&amp;!F.maxw||(!F.minw||F.minw&amp;&amp;D&gt;=F.minw)&amp;&amp;(!F.maxw||F.maxw&amp;&amp;D&lt;=F.maxw)){if(!z[F.media]){z[F.media]=[]}z[F.media].push(k[F.rules])}}for(var y in p){if(p[y]&amp;&amp;p[y].parentNode===f){f.removeChild(p[y])}}for(var y in z){var G=u.createElement(&quot;style&quot;),A=z[y].join(&quot;\n&quot;);G.type=&quot;text/css&quot;;G.media=y;if(G.styleSheet){G.styleSheet.cssText=A}else{G.appendChild(u.createTextNode(A))}C.appendChild(G);p.push(G)}f.insertBefore(C,B.nextSibling)},n=function(v,x){var w=c();if(!w){return}w.open(&quot;GET&quot;,v,true);w.onreadystatechange=function(){if(w.readyState!=4||w.status!=200&amp;&amp;w.status!=304){return}x(w.responseText)};if(w.readyState==4){return}w.send(null)},c=(function(){var v=false;try{v=new XMLHttpRequest()}catch(w){v=new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}return function(){return v}})();a();respond.update=a;function s(){j(true)}if(e.addEventListener){e.addEventListener(&quot;resize&quot;,s,false)}else{if(e.attachEvent){e.attachEvent(&quot;onresize&quot;,s)}}})(this,(function(f){if(f.matchMedia){return true}var e,i=document,c=i.documentElement,g=c.firstElementChild||c.firstChild,h=!i.body,d=i.body||i.createElement(&quot;body&quot;),b=i.createElement(&quot;div&quot;),a=&quot;only all&quot;;b.id=&quot;mq-test-1&quot;;b.style.cssText=&quot;position:absolute;top:-99em&quot;;d.appendChild(b);b.innerHTML='_&lt;style media=&quot;'+a+'&quot;&gt; #mq-test-1 { width: 9px; }&lt;/style&gt;';if(h){c.insertBefore(d,g)}b.removeChild(b.firstChild);e=b.offsetWidth==9;if(h){c.removeChild(d)}else{d.removeChild(b)}return e})(this));</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/scottjehl/Respond/tree-list/52e8efdc0ed72f4a3d622e1a5dfca75773651771" data-blob-url-prefix="/scottjehl/Respond/blob/52e8efdc0ed72f4a3d622e1a5dfca75773651771">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif?1315867479" height="32" width="32">
</div>

      </div>
    </div>


      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speakerdeck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span id="_rrt" title="0.08365s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="context-overlay"></div>

    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    
    
    
  </body>
</html>

