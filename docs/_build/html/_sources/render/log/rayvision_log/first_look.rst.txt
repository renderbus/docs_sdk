.. warning::
   请确保本地python环境和PIP工具能够正常使用。

演示demo
-------------
学习的最好方法就是参考例子，`rayvision_log <https://pip.renderbus.com/simple/rayvision-log/>`_ 也不例外，我们也提供了下面的一个使用 **demo** 样例供您参考::

    import logging
    from rayvision_log import init_logger

    package_name = 'mylog'
    init_logger(package_name)
    logging.info('test')


默认路径
-------------

Centos:

  ~/.cache/<AppName>/log/Logs/<hostname>.log

Window:

  C:\\Users\\<username>\\AppData\\Local\\<AppAuthor>\\<AppName>\\Logs\\<hostname>.log


自定义路径分2中设置方式
-------------------------

   - 通过设置环境变量来自定义: `RAYVISION_LOG_ROOT`

    定义参数： ``RAYVISION_LOG_ROOT = "xxxx"``,
    将 *RAYVISION_LOG_ROOT* 设置为系统环境变量,
    日志路径将会保存在 *RAYVISION_LOG_ROOT* 文件夹下。

   - 通过参数设置日志路径:`log_folder`, 以maya为例：

    `analyze_obj = AnalyzeMaya(**analyze_info, log_folder=r"D:\test\vs")`


自定义日志文件名
--------------------

   - 通过参数设置日志文件名(包括文件后缀): `log_name`, 以maya为例:

    `analyze_obj = AnalyzeMaya(**analyze_info, log_name=r"api.log")`


自定义日志等级
------------------

   - 通过参数设置日志等级: `log_level`, 以maya为例:

   `analyze_obj = AnalyzeMaya(**analyze_info, log_level=r"api.log")`