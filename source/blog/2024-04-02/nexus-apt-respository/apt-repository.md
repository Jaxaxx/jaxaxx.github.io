---
title: nexus搭建apt私有仓库
authors: [jax]
tags: [nexus, apt, ubuntu]
date: 2024-04-02T22:00
---


- [参考链接](https://blog.csdn.net/qq_44214446/article/details/128272077) 

## 生成密钥
```shell title='在nexus所在机器生成密钥'
# 生成密钥，最后会有个输入密码的地方，这个密钥是在nexus创建本地库需要用到的，要记住
[root@cb286ec8aef8 sonatype]# sudo gpg --full-generate-key --pinentry-mode=loopback

# 验证密钥生成好了
[root@cb286ec8aef8 sonatype]# gpg --list-keys
/root/.gnupg/pubring.kbx
------------------------
pub   rsa2048 2024-04-01 [SC]
      CC29D60F635358A2123658F148EE12A3EB661AB3
uid           [ultimate] fftai <soft@fftai.com>
sub   rsa2048 2024-04-01 [E]

# 导出公钥
gpg -a -o nexus_pub.asc --export fftai （最后这个fftai就是生成时候的name字段，要对应）

# 导出私钥
gpg -a -o nexus_pri.asc --export-secret-key fftai （同上）

# 到此 公钥私钥名称分别是 nexus_pub.asc nexus_pri.asc
# 在nexus服务器上生成密钥对(如果是docker一定要到容器里边区生成)
# - 注意选择如下：
# 1.密钥种类选择RSA：1
# 2.密钥长度：2048
# 3.密钥永不过期：0
# 4.用户标识：（姓名、电子邮件、注释）方便识别即可
# 5.密钥保护：该密码是私钥的保护密码，需牢记
# 6.密钥生成成功
```

## 创建apt-hosted仓库

1. 在浏览器访问nexus
2. 创建仓库apt-hosted，
   - Name：自定义一个名称，创建后无法重命名，注意命名。这里是aptHosted。
   - online：存储库是否接受传入的请求。默认勾选，允许向此仓库推入deb包。
   - Distribution：系统版本标识。这里系统为Ubuntu 20.04，版本代号为focal。
   - Signing Key：添加之前服务器端生成的pgp私钥。
   - Passphrase：填写pgp私钥的保护密码。
   - Blob store：我们下拉选择前面创建好的专用存储区apt。
   - Strict Content Type Validation：默认勾选，验证所有路径都是deb或apt元数据。
   - Deployment policy：部署策略，控制对是否允许工件进行部署和更新，下拉选择Allow redeploy（允许重新部署）。
   - 最后点击Create repository创建仓库

## 注册指纹

到 http://keyserver.ubuntu.com/ 注册指纹
```shell title='在nexus所在机器执行'
[root@cb286ec8aef8 sonatype]# gpg --list-keys --keyid-format LONG
/root/.gnupg/pubring.kbx
------------------------
pub   rsa2048/48EE12A3EB661AB3 2024-04-01 [SC]
      CC29D60F635358A2123658F148EE12A3EB661AB3
uid                 [ultimate] fftai <soft@fftai.com>
sub   rsa2048/454A4FF6FBA56D48 2024-04-01 [E]

# 把48EE12A3EB661AB3输入到上面的网站，然后点击Submit key 下一步把公钥拷贝进去确认提交就可以了
```

## 客户端使用
```shell title='客户端机器使用'
# 添加公钥
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 48EE12A3EB661AB3

# 添加私有服务器地址
sudo add-apt-repository "deb [arch=amd64] http://127.0.0.1:8081/repository/apt-hosted focal main"
# 更新库
sudo apt-get update -y
```