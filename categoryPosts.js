/* Category Post */function ctgryPst(f,y,e,T,x,Z){var a=blogUrl.replace(/.*?:\/\//g,"//"),t=0<f.length?"/-/"+f:"",e=a+"feeds/posts/default"+encodeURI(t)+"?alt=json&orderby=published&max-results="+e;Pu.gAj({url:e,async:!0,success:function(e,a){e=JSON.parse(e);var t,l,s,r,i,c,n="";if(qSel(y)!=null){a=e.feed;if(a.entry&&0!==a.entry.length){n+='<div class="blogPts cPst">';for(var d=a.entry,o=0;o<d.length;++o){for(var g=d[o],p=!1,a=0,m=g.media$thumbnail?g.media$thumbnail.url:"",b=g.title.$t,j=g.id.$t.split('post-')[1],w=g.link[1].title.split(' Comments')[0],h=("content"in g&&0<x?g.content.$t.split("<a name='more'>")[0].replace(/<\!--.*?-->/g,"").replace(/(<([^>]+)>)/gi,"").substring(0,x):""),v=g.link.length;a<v;++a)"alternate"==(t=g.link[a]).rel&&(p=t.href);s=m.includes("-rw")?"":"-rw-e30",m=(m=g.content&&""==m?(u=/<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(g.content.$t))&&u[3]?u[3]:"":m).replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/s"+T+s).replace(/\=s[0-9]+(\-c)?/,"=s"+T+s).replace(/\=.*w[0-9].*h[0-9].*-c+(\-c)?/,"=s"+T+s),j="<div class='iFxd'>"+("0"!=w?"<a aria-label='Comments' class='cmnt' data-text='"+w+"' href='"+p+"#comment' role='button'><svg class='line' viewBox='0 0 24 24'><g transform='translate(2.000000, 2.000000)'><path d='M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z'/></g></svg></a>":"")+"<span class='pV pu-views' data-id='"+j+"'><svg class='rltV-loading' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z' fill='rgba(221,221,221,1)' opacity='.5'/><path class='amR' d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'><animateTransform attributeName='transform' dur='.9s' from='0 12 12' repeatCount='indefinite' to='360 12 12' type='rotate'/></path></svg><svg class='rltV-loaded line' viewBox='0 0 24 24'><g transform='translate(2.000000, 4.000000)'><path class='svgC' d='M13.1643,8.0521 C13.1643,9.7981 11.7483,11.2141 10.0023,11.2141 C8.2563,11.2141 6.8403,9.7981 6.8403,8.0521 C6.8403,6.3051 8.2563,4.8901 10.0023,4.8901 C11.7483,4.8901 13.1643,6.3051 13.1643,8.0521 Z'/><path d='M0.7503,8.0521 C0.7503,11.3321 4.8923,15.3541 10.0023,15.3541 C15.1113,15.3541 19.2543,11.3351 19.2543,8.0521 C19.2543,4.7691 15.1113,0.7501 10.0023,0.7501 C4.8923,0.7501 0.7503,4.7721 0.7503,8.0521 Z'/></g></svg></span><span class='bM bmPs' aria-label='Add to favorites' bm-id='"+j+"' bm-img='"+(m.replace("/s"+T,"/s240").replace("=s"+T,"=s240"))+"' onclick='vibRate(50)' bm-ttl='"+b+"' bm-url='"+p+"' role='button'><svg class='line' viewBox='0 0 24 24'><g transform='translate(4.500000, 2.500000)'><path d='M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z'/><line class='svgC v' transform='translate(-4.500000, -2.500000)' x1='12' x2='12' y1='6' y2='12'/><line class='svgC v' transform='translate(-4.500000, -2.500000)' x1='15' x2='9' y1='9' y2='9'/><polyline class='svgC h' points='5.8859 9.8748 7.7779 11.7698 11.6759 7.8698' transform='translate(-1.000000, -2.30000)'/></g></svg></span></div>",l=g.category[0]?"<a aria-label='"+g.category[0].term+"' data-text='"+g.category[0].term+"' href='"+blogUrl+"search/label/"+encodeURI(g.category[0].term)+"' rel='tag'></a>":"",s=g.category[1]?"<a aria-label='"+g.category[0].term+"' data-text='"+g.category[1].term+"' href='"+blogUrl+"search/label/"+encodeURI(g.category[1].term)+"' rel='tag'></a>":"",0,i=(r=(r=g.published.$t).substring(0,10)).substring(0,4),c=r.substring(5,7),r=r.substring(8,10),n+=""!=m?'<article class="ntry">':"<article class='ntry noThmb'>",n+=(""!=m?"<div class='pThmb'><a class='thmb' href='"+p+"'><img alt='"+b+"' class='imgThm lazy' data-src='"+m+"' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='/></a>"+j+"</div>":"<div class='pThmb nul'><div class='thmb'><span class='imgThm' data-text='No image'</span></div>"+j+"</div>")+"<div class='pCntn'>"+(l?"<div class='pHdr pSml'><div class='pLbls' data-text='in'>"+l+s+"</div></div>":"")+"<h2 class='pTtl aTtl sml'><a data-text='"+b+"' href='"+p+"' rel='bookmark'>"+b+"</a></h2>"+(h?"<div class='pSnpt'>"+h+"</div>":"")+"<div class='pInf pSml'><time class='aTtmp pTtmp pbl' data-text='"+(h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(c-1)]+" "+r+", "+i)+"' data-type='Published' title='Published: "+h+"'></time><a aria-label='Read more' class='pJmp' data-text='Keep reading' href='"+p+"'></a></div></div>",n+="</article>",(o+1)%3===0&&o!==d.length-1&&(n+="")}n+="</div>",n+=true==Z?"<div class='blogPg'><a aria-label='View More' data-text='"+(""!=f?f+" - View More":"View More")+"' href='"+(""!=f?blogUrl+"search/label/"+encodeURI(f):blogUrl+"search")+"'></a></div>":"",addCt(qSel(y),'loaded'),qSel(y).innerHTML=n;Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'});if(typeof puViews=='function'){puViews()};if(typeof scrlRvl=='function'){scrlRvl()};if(typeof bkMrk=='function'){bkMrk()};pushAds()}else qSel(y).innerHTML="<div class='note'>No Post was found with label '"+f+"'.</div>";}else{console.log("Sorry, Container was not found!")}},error:function(e){qSel(y).innerHTML="<div class='note wr'>Failed to load Posts :(</div>"}})};
