"use strict";(self.webpackChunkjaxaxx=self.webpackChunkjaxaxx||[]).push([[8152],{3503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(4848),a=t(8453);const r={title:"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93",authors:["jax"],tags:["nexus","apt","ubuntu"],date:"2024-04-02T22:00"},o="\u751f\u6210\u5bc6\u94a5",i={permalink:"/blog/2024/04/02/nexus-apt-respository/apt-repository",source:"@site/blog/2024-04-02/nexus-apt-respository/apt-repository.md",title:"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93",description:"- \u53c2\u8003\u94fe\u63a5",date:"2024-04-02T22:00:00.000Z",tags:[{label:"nexus",permalink:"/blog/tags/nexus"},{label:"apt",permalink:"/blog/tags/apt"},{label:"ubuntu",permalink:"/blog/tags/ubuntu"}],readingTime:2.935,hasTruncateMarker:!1,authors:[{name:"Jaxaxx",title:"Software Engineer",url:"https://github.com/jaxaxx",imageURL:"https://avatars.githubusercontent.com/u/43429810?v=4",key:"jax"}],frontMatter:{title:"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93",authors:["jax"],tags:["nexus","apt","ubuntu"],date:"2024-04-02T22:00"},unlisted:!1,nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},u=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/qq_44214446/article/details/128272077",children:"\u53c2\u8003\u94fe\u63a5"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"title='\u5728nexus\u6240\u5728\u673a\u5668\u751f\u6210\u5bc6\u94a5'",children:"# \u751f\u6210\u5bc6\u94a5\uff0c\u6700\u540e\u4f1a\u6709\u4e2a\u8f93\u5165\u5bc6\u7801\u7684\u5730\u65b9\uff0c\u8fd9\u4e2a\u5bc6\u94a5\u662f\u5728nexus\u521b\u5efa\u672c\u5730\u5e93\u9700\u8981\u7528\u5230\u7684\uff0c\u8981\u8bb0\u4f4f\n[root@cb286ec8aef8 sonatype]# sudo gpg --full-generate-key --pinentry-mode=loopback\n\n# \u9a8c\u8bc1\u5bc6\u94a5\u751f\u6210\u597d\u4e86\n[root@cb286ec8aef8 sonatype]# gpg --list-keys\n/root/.gnupg/pubring.kbx\n------------------------\npub   rsa2048 2024-04-01 [SC]\n      CC29D60F635358A2123658F148EE12A3EB661AB3\nuid           [ultimate] fftai <soft@fftai.com>\nsub   rsa2048 2024-04-01 [E]\n\n# \u5bfc\u51fa\u516c\u94a5\ngpg -a -o nexus_pub.asc --export fftai \uff08\u6700\u540e\u8fd9\u4e2afftai\u5c31\u662f\u751f\u6210\u65f6\u5019\u7684name\u5b57\u6bb5\uff0c\u8981\u5bf9\u5e94\uff09\n\n# \u5bfc\u51fa\u79c1\u94a5\ngpg -a -o nexus_pri.asc --export-secret-key fftai \uff08\u540c\u4e0a\uff09\n\n# \u5230\u6b64 \u516c\u94a5\u79c1\u94a5\u540d\u79f0\u5206\u522b\u662f nexus_pub.asc nexus_pri.asc\n# \u5728nexus\u670d\u52a1\u5668\u4e0a\u751f\u6210\u5bc6\u94a5\u5bf9(\u5982\u679c\u662fdocker\u4e00\u5b9a\u8981\u5230\u5bb9\u5668\u91cc\u8fb9\u533a\u751f\u6210)\n# - \u6ce8\u610f\u9009\u62e9\u5982\u4e0b\uff1a\n# 1.\u5bc6\u94a5\u79cd\u7c7b\u9009\u62e9RSA\uff1a1\n# 2.\u5bc6\u94a5\u957f\u5ea6\uff1a2048\n# 3.\u5bc6\u94a5\u6c38\u4e0d\u8fc7\u671f\uff1a0\n# 4.\u7528\u6237\u6807\u8bc6\uff1a\uff08\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u6ce8\u91ca\uff09\u65b9\u4fbf\u8bc6\u522b\u5373\u53ef\n# 5.\u5bc6\u94a5\u4fdd\u62a4\uff1a\u8be5\u5bc6\u7801\u662f\u79c1\u94a5\u7684\u4fdd\u62a4\u5bc6\u7801\uff0c\u9700\u7262\u8bb0\n# 6.\u5bc6\u94a5\u751f\u6210\u6210\u529f\n"})}),"\n",(0,s.jsx)(n.h1,{id:"\u521b\u5efaapt-hosted\u4ed3\u5e93",children:"\u521b\u5efaapt-hosted\u4ed3\u5e93"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u6d4f\u89c8\u5668\u8bbf\u95eenexus"}),"\n",(0,s.jsxs)(n.li,{children:["\u521b\u5efa\u4ed3\u5e93apt-hosted\uff0c","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Name\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\uff0c\u521b\u5efa\u540e\u65e0\u6cd5\u91cd\u547d\u540d\uff0c\u6ce8\u610f\u547d\u540d\u3002\u8fd9\u91cc\u662faptHosted\u3002"}),"\n",(0,s.jsx)(n.li,{children:"online\uff1a\u5b58\u50a8\u5e93\u662f\u5426\u63a5\u53d7\u4f20\u5165\u7684\u8bf7\u6c42\u3002\u9ed8\u8ba4\u52fe\u9009\uff0c\u5141\u8bb8\u5411\u6b64\u4ed3\u5e93\u63a8\u5165deb\u5305\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Distribution\uff1a\u7cfb\u7edf\u7248\u672c\u6807\u8bc6\u3002\u8fd9\u91cc\u7cfb\u7edf\u4e3aUbuntu 20.04\uff0c\u7248\u672c\u4ee3\u53f7\u4e3afocal\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Signing Key\uff1a\u6dfb\u52a0\u4e4b\u524d\u670d\u52a1\u5668\u7aef\u751f\u6210\u7684pgp\u79c1\u94a5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Passphrase\uff1a\u586b\u5199pgp\u79c1\u94a5\u7684\u4fdd\u62a4\u5bc6\u7801\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Blob store\uff1a\u6211\u4eec\u4e0b\u62c9\u9009\u62e9\u524d\u9762\u521b\u5efa\u597d\u7684\u4e13\u7528\u5b58\u50a8\u533aapt\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Strict Content Type Validation\uff1a\u9ed8\u8ba4\u52fe\u9009\uff0c\u9a8c\u8bc1\u6240\u6709\u8def\u5f84\u90fd\u662fdeb\u6216apt\u5143\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Deployment policy\uff1a\u90e8\u7f72\u7b56\u7565\uff0c\u63a7\u5236\u5bf9\u662f\u5426\u5141\u8bb8\u5de5\u4ef6\u8fdb\u884c\u90e8\u7f72\u548c\u66f4\u65b0\uff0c\u4e0b\u62c9\u9009\u62e9Allow redeploy\uff08\u5141\u8bb8\u91cd\u65b0\u90e8\u7f72\uff09\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u540e\u70b9\u51fbCreate repository\u521b\u5efa\u4ed3\u5e93"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u6ce8\u518c\u6307\u7eb9",children:"\u6ce8\u518c\u6307\u7eb9"}),"\n",(0,s.jsxs)(n.p,{children:["\u5230 ",(0,s.jsx)(n.a,{href:"http://keyserver.ubuntu.com/",children:"http://keyserver.ubuntu.com/"})," \u6ce8\u518c\u6307\u7eb9"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"title='\u5728nexus\u6240\u5728\u673a\u5668\u6267\u884c'",children:"[root@cb286ec8aef8 sonatype]# gpg --list-keys --keyid-format LONG\n/root/.gnupg/pubring.kbx\n------------------------\npub   rsa2048/48EE12A3EB661AB3 2024-04-01 [SC]\n      CC29D60F635358A2123658F148EE12A3EB661AB3\nuid                 [ultimate] fftai <soft@fftai.com>\nsub   rsa2048/454A4FF6FBA56D48 2024-04-01 [E]\n\n# \u628a48EE12A3EB661AB3\u8f93\u5165\u5230\u4e0a\u9762\u7684\u7f51\u7ad9\uff0c\u7136\u540e\u70b9\u51fbSubmit key \u4e0b\u4e00\u6b65\u628a\u516c\u94a5\u62f7\u8d1d\u8fdb\u53bb\u786e\u8ba4\u63d0\u4ea4\u5c31\u53ef\u4ee5\u4e86\n"})}),"\n",(0,s.jsx)(n.h1,{id:"\u5ba2\u6237\u7aef\u4f7f\u7528",children:"\u5ba2\u6237\u7aef\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"title='\u5ba2\u6237\u7aef\u673a\u5668\u4f7f\u7528'",children:'# \u6dfb\u52a0\u516c\u94a5\nsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 48EE12A3EB661AB3\n\n# \u6dfb\u52a0\u79c1\u6709\u670d\u52a1\u5668\u5730\u5740\nsudo add-apt-repository "deb [arch=amd64] http://127.0.0.1:8081/repository/apt-hosted focal main"\n# \u66f4\u65b0\u5e93\nsudo apt-get update -y\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);