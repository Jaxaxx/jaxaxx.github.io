"use strict";(self.webpackChunkjaxaxx=self.webpackChunkjaxaxx||[]).push([[8341],{415:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/04/02/nexus-apt-respository/apt-repository","metadata":{"permalink":"/zh-Hans/blog/2024/04/02/nexus-apt-respository/apt-repository","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2024-04-02/nexus-apt-respository/apt-repository.md","title":"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93","description":"- \u53c2\u8003\u94fe\u63a5","date":"2024-04-02T22:00:00.000Z","tags":[{"label":"nexus","permalink":"/zh-Hans/blog/tags/nexus"},{"label":"apt","permalink":"/zh-Hans/blog/tags/apt"},{"label":"ubuntu","permalink":"/zh-Hans/blog/tags/ubuntu"}],"readingTime":2.935,"hasTruncateMarker":false,"authors":[{"name":"Jaxaxx","title":"Software Engineer","url":"https://github.com/jaxaxx","imageURL":"https://avatars.githubusercontent.com/u/43429810?v=4","key":"jax"}],"frontMatter":{"title":"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93","authors":["jax"],"tags":["nexus","apt","ubuntu"],"date":"2024-04-02T22:00"},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/zh-Hans/blog/welcome"}},"content":"- [\u53c2\u8003\u94fe\u63a5](https://blog.csdn.net/qq_44214446/article/details/128272077) \\n\\n# \u751f\u6210\u5bc6\u94a5\\n\\n```shell title=\'\u5728nexus\u6240\u5728\u673a\u5668\u751f\u6210\u5bc6\u94a5\'\\n# \u751f\u6210\u5bc6\u94a5\uff0c\u6700\u540e\u4f1a\u6709\u4e2a\u8f93\u5165\u5bc6\u7801\u7684\u5730\u65b9\uff0c\u8fd9\u4e2a\u5bc6\u94a5\u662f\u5728nexus\u521b\u5efa\u672c\u5730\u5e93\u9700\u8981\u7528\u5230\u7684\uff0c\u8981\u8bb0\u4f4f\\n[root@cb286ec8aef8 sonatype]# sudo gpg --full-generate-key --pinentry-mode=loopback\\n\\n# \u9a8c\u8bc1\u5bc6\u94a5\u751f\u6210\u597d\u4e86\\n[root@cb286ec8aef8 sonatype]# gpg --list-keys\\n/root/.gnupg/pubring.kbx\\n------------------------\\npub   rsa2048 2024-04-01 [SC]\\n      CC29D60F635358A2123658F148EE12A3EB661AB3\\nuid           [ultimate] fftai <soft@fftai.com>\\nsub   rsa2048 2024-04-01 [E]\\n\\n# \u5bfc\u51fa\u516c\u94a5\\ngpg -a -o nexus_pub.asc --export fftai \uff08\u6700\u540e\u8fd9\u4e2afftai\u5c31\u662f\u751f\u6210\u65f6\u5019\u7684name\u5b57\u6bb5\uff0c\u8981\u5bf9\u5e94\uff09\\n\\n# \u5bfc\u51fa\u79c1\u94a5\\ngpg -a -o nexus_pri.asc --export-secret-key fftai \uff08\u540c\u4e0a\uff09\\n\\n# \u5230\u6b64 \u516c\u94a5\u79c1\u94a5\u540d\u79f0\u5206\u522b\u662f nexus_pub.asc nexus_pri.asc\\n# \u5728nexus\u670d\u52a1\u5668\u4e0a\u751f\u6210\u5bc6\u94a5\u5bf9(\u5982\u679c\u662fdocker\u4e00\u5b9a\u8981\u5230\u5bb9\u5668\u91cc\u8fb9\u533a\u751f\u6210)\\n# - \u6ce8\u610f\u9009\u62e9\u5982\u4e0b\uff1a\\n# 1.\u5bc6\u94a5\u79cd\u7c7b\u9009\u62e9RSA\uff1a1\\n# 2.\u5bc6\u94a5\u957f\u5ea6\uff1a2048\\n# 3.\u5bc6\u94a5\u6c38\u4e0d\u8fc7\u671f\uff1a0\\n# 4.\u7528\u6237\u6807\u8bc6\uff1a\uff08\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u6ce8\u91ca\uff09\u65b9\u4fbf\u8bc6\u522b\u5373\u53ef\\n# 5.\u5bc6\u94a5\u4fdd\u62a4\uff1a\u8be5\u5bc6\u7801\u662f\u79c1\u94a5\u7684\u4fdd\u62a4\u5bc6\u7801\uff0c\u9700\u7262\u8bb0\\n# 6.\u5bc6\u94a5\u751f\u6210\u6210\u529f\\n```\\n\\n# \u521b\u5efaapt-hosted\u4ed3\u5e93\\n\\n1. \u5728\u6d4f\u89c8\u5668\u8bbf\u95eenexus\\n2. \u521b\u5efa\u4ed3\u5e93apt-hosted\uff0c\\n   - Name\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\uff0c\u521b\u5efa\u540e\u65e0\u6cd5\u91cd\u547d\u540d\uff0c\u6ce8\u610f\u547d\u540d\u3002\u8fd9\u91cc\u662faptHosted\u3002\\n   - online\uff1a\u5b58\u50a8\u5e93\u662f\u5426\u63a5\u53d7\u4f20\u5165\u7684\u8bf7\u6c42\u3002\u9ed8\u8ba4\u52fe\u9009\uff0c\u5141\u8bb8\u5411\u6b64\u4ed3\u5e93\u63a8\u5165deb\u5305\u3002\\n   - Distribution\uff1a\u7cfb\u7edf\u7248\u672c\u6807\u8bc6\u3002\u8fd9\u91cc\u7cfb\u7edf\u4e3aUbuntu 20.04\uff0c\u7248\u672c\u4ee3\u53f7\u4e3afocal\u3002\\n   - Signing Key\uff1a\u6dfb\u52a0\u4e4b\u524d\u670d\u52a1\u5668\u7aef\u751f\u6210\u7684pgp\u79c1\u94a5\u3002\\n   - Passphrase\uff1a\u586b\u5199pgp\u79c1\u94a5\u7684\u4fdd\u62a4\u5bc6\u7801\u3002\\n   - Blob store\uff1a\u6211\u4eec\u4e0b\u62c9\u9009\u62e9\u524d\u9762\u521b\u5efa\u597d\u7684\u4e13\u7528\u5b58\u50a8\u533aapt\u3002\\n   - Strict Content Type Validation\uff1a\u9ed8\u8ba4\u52fe\u9009\uff0c\u9a8c\u8bc1\u6240\u6709\u8def\u5f84\u90fd\u662fdeb\u6216apt\u5143\u6570\u636e\u3002\\n   - Deployment policy\uff1a\u90e8\u7f72\u7b56\u7565\uff0c\u63a7\u5236\u5bf9\u662f\u5426\u5141\u8bb8\u5de5\u4ef6\u8fdb\u884c\u90e8\u7f72\u548c\u66f4\u65b0\uff0c\u4e0b\u62c9\u9009\u62e9Allow redeploy\uff08\u5141\u8bb8\u91cd\u65b0\u90e8\u7f72\uff09\u3002\\n   - \u6700\u540e\u70b9\u51fbCreate repository\u521b\u5efa\u4ed3\u5e93\\n\\n# \u6ce8\u518c\u6307\u7eb9\\n\\n\u5230 http://keyserver.ubuntu.com/ \u6ce8\u518c\u6307\u7eb9\\n```shell title=\'\u5728nexus\u6240\u5728\u673a\u5668\u6267\u884c\'\\n[root@cb286ec8aef8 sonatype]# gpg --list-keys --keyid-format LONG\\n/root/.gnupg/pubring.kbx\\n------------------------\\npub   rsa2048/48EE12A3EB661AB3 2024-04-01 [SC]\\n      CC29D60F635358A2123658F148EE12A3EB661AB3\\nuid                 [ultimate] fftai <soft@fftai.com>\\nsub   rsa2048/454A4FF6FBA56D48 2024-04-01 [E]\\n\\n# \u628a48EE12A3EB661AB3\u8f93\u5165\u5230\u4e0a\u9762\u7684\u7f51\u7ad9\uff0c\u7136\u540e\u70b9\u51fbSubmit key \u4e0b\u4e00\u6b65\u628a\u516c\u94a5\u62f7\u8d1d\u8fdb\u53bb\u786e\u8ba4\u63d0\u4ea4\u5c31\u53ef\u4ee5\u4e86\\n```\\n\\n# \u5ba2\u6237\u7aef\u4f7f\u7528\\n```shell title=\'\u5ba2\u6237\u7aef\u673a\u5668\u4f7f\u7528\'\\n# \u6dfb\u52a0\u516c\u94a5\\nsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 48EE12A3EB661AB3\\n\\n# \u6dfb\u52a0\u79c1\u6709\u670d\u52a1\u5668\u5730\u5740\\nsudo add-apt-repository \\"deb [arch=amd64] http://127.0.0.1:8081/repository/apt-hosted focal main\\"\\n# \u66f4\u65b0\u5e93\\nsudo apt-get update -y\\n```"},{"id":"welcome","metadata":{"permalink":"/zh-Hans/blog/welcome","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"label":"facebook","permalink":"/zh-Hans/blog/tags/facebook"},{"label":"hello","permalink":"/zh-Hans/blog/tags/hello"},{"label":"docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"nexus\u642d\u5efaapt\u79c1\u6709\u4ed3\u5e93","permalink":"/zh-Hans/blog/2024/04/02/nexus-apt-respository/apt-repository"},"nextItem":{"title":"MDX Blog Post","permalink":"/zh-Hans/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/zh-Hans/blog/mdx-blog-post","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"label":"docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/zh-Hans/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/zh-Hans/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/zh-Hans/blog/long-blog-post","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"label":"hello","permalink":"/zh-Hans/blog/tags/hello"},{"label":"docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/zh-Hans/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/zh-Hans/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/zh-Hans/blog/first-blog-post","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","tags":[{"label":"hola","permalink":"/zh-Hans/blog/tags/hola"},{"label":"docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/zh-Hans/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);