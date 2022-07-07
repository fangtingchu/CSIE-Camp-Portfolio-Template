import{_ as n}from"./Typing.bac43082.js";import{o,c as d,a as s,e as c,r as h,w as x,b as m,d as p,F as f,g as _,h as b,_ as k}from"./index.59e55124.js";function r(e=32){const a="abcdefghijklmnopqrstuvwxyz ";let t="";for(let l=0;l<e;l++)t+=a[Math.floor(Math.random()*a.length)];return t}const v={class:"group flex flex-col justify-center lg:flex-row"},w={class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"},y=["src"],j={class:"h-full w-full p-4 pb-2"},$={class:"mt-4 flex flex-col justify-center"},B=["href"],P={__name:"Project",props:{name:{type:String,default:"Project"},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""},tags:{type:Array,default:()=>[]}},setup(e){return(a,t)=>(o(),d("div",v,[s("div",w,[s("img",{src:e.image,class:"w-full transition-all duration-200 ease-in group-hover:scale-105"},null,8,y)]),s("div",j,[c(n,{class:"mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl",text:e.name,speed:60},null,8,["text"]),c(n,{class:"mb-2 block text-sm text-gray-600 md:text-base",text:e.description,speed:40},null,8,["text"]),c(n,{class:"block text-sm text-gray-400 md:text-base",text:e.tags.join(", "),speed:40},null,8,["text"]),s("div",$,[s("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",class:"inline-block"},[c(n,{class:"w-full text-blue-400 transition-all duration-200 ease-in hover:text-blue-600",text:e.link,speed:40},null,8,["text"])],8,B)])])]))}},S={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},T={class:"py-2"},C={__name:"Projects",setup(e){const a=[{name:"\u65E9\u5B89",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5348\u5B89",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u665A\u5B89",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5403\u5BB5\u591C",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]}],t=h(0);let l=-1;return x(t,()=>{t.value>0&&l===-1&&(l=window.setInterval(()=>{t.value++,t.value>=a.length&&window.clearInterval(l)},200))}),(M,u)=>(o(),d("div",S,[t.value>=0?(o(),m(n,{key:0,onDone:u[0]||(u[0]=i=>t.value++),text:"My Projects",class:"block text-2xl sm:text-3xl lg:text-4xl"})):p("",!0),s("div",T,[(o(),d(f,null,_(a,(i,g)=>s("div",null,[c(k,null,{default:b(()=>[t.value>=g+1?(o(),m(P,{key:g,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200",name:i.name,description:i.description,image:i.image,link:i.link,tags:i.tags},null,8,["name","description","image","link","tags"])):p("",!0)]),_:2},1024)])),64))])]))}};export{C as default};