# micro:bit IDE

让你在VS Code中也能开发micro:bit程序, 而不是看着<del>丑不拉叽还没有语法提示的</del>dxkStick IDE.

实际上是提取了dxkStick IDE的插件部分, 然后用VS Code Extension包装了一下. 所以也可以在python导入microbitide然后手动刷入各种东西.

## 安装说明

这是VS Code插件, pycharm等是没法用的(都怪我太菜不会写pycharm插件qwq).

首先安装`micronit_dxk/dist/microbitide-1.0.tar.gz`这个pip包

方法是在cmd中执行`python -m pip install micronit_dxk/dist/microbitide-1.0.tar.gz --user`

然后打开VS Code的插件页面. 点一下页面右上角的三个点, 选择`Install from VSIX`, 然后选择`vs-code`下的`.vsix`文件安装

(是的, 这些文件是要下载到自己电脑的)

用法在安装好后出现的帮助页面中.
