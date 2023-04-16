# golang配置环境变量

## Windows 环境变量配置
1. 首先下载 Golang 的安装包（.msi）, 参考官方网站 <https://golang.org/dl/>。 

2. 安装 Golang, 将其安装在某个目录下。

3. 打开控制面板，点击“系统和安全” > “系统”。

4. 点击左侧的“高级系统设置”。

5. 在“系统属性”窗口中点击“环境变量”按钮。

6. 在“环境变量”窗口中，找到“用户变量”或“系统变量”的“Path”变量，双击打开。

7. 在“编辑环境变量”窗口中，点击“新建”按钮。

8. 输入Golang的安装目录路径，例如： `C:\Program Files\Go\bin`

9. 点击“确定”按钮保存修改。

10. 打开命令提示符窗口(cmd)，输入 `go version` 命令，如果能正常输出当前 Golang 版本号，则表示 Golang 环境变量配置成功。


## Mac 环境变量配置
1. 下载 Golang 的安装包(.pkg), 参考官方网站 <https://golang.org/dl/>

2. 在终端中运行以下命令（会将 .pkg 文件解压到 /usr/local/go/ 目录下）：
```
sudo tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```
其中 `$VERSION` 为版本号， `$OS` 为操作系统， `$ARCH` 为硬件架构。

3. 在终端中输入命令： `vim ~/.bash_profile`，打开当前用户的 bash 配置文件。如果文件不存在，则会自动创建一个新文件。

4. 在配置文件中添加以下内容：
```
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
export GOPROXY="https://goproxy.cn"
```
第一行设置了 Golang 的工作目录（$HOME/go），该目录是可以被用户自定义的，建议使用默认路径。第二行将 `/usr/local/go/bin` 和 `$GOPATH/bin` 目录添加到了系统的环境变量中。

1. 使用 `:wq` 快捷键保存修改并退出编辑器.

2. 在终端中运行以下命令，使得配置文件生效：
```
source ~/.bash_profile
```

1. 打开终端，输入 `go version` 命令，如果能正常输出当前 Golang 版本号，则表示 Golang 环境变量配置成功。


## Linux 环境变量配置

1. 下载 Golang 的安装包(.tar.gz), 参考官方网站 <https://golang.org/dl/>

2. 在终端运行以下命令（会将 .tar.gz 文件解压到 /usr/local/目录下）：
```
sudo tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```
其中 `$VERSION` 为版本号， `$OS` 为操作系统， `$ARCH` 为硬件架构。

3. 在终端中输入命令： `vim ~/.bashrc`，打开当前用户的 bash 配置文件。如果文件不存在，则会自动创建一个新文件。

4. 在配置文件中添加以下内容：
```
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/
bin:$GOPATH/bin
export GOPROXY="https://goproxy.cn"
```
第一行设置了 Golang 的工作目录（$HOME/go），该目录是可以被用户自定义的，建议使用默认路径。第二行将 `/usr/local/go/bin` 和 `$GOPATH/bin` 目录添加到了系统的环境变量中。

5. 使用 `:wq` 快捷键保存修改并退出编辑器.

6. 在终端中运行以下命令，使得配置文件生效：
```
source ~/.bashrc
```

7. 打开终端，输入 `go version` 命令，如果能正常输出当前 Golang 版本号，则表示 Golang 环境变量配置成功。