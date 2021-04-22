常见问题
===========


.. _header-n3:

1. RenderBus SDK支持那些Python版本呢？
--------------------------------------

RenderBus SDK 目前支持Python2.7.10+ 和Python 3.6, 3.7

.. _header-n5:

2. 使用pycharm应该怎么下载SDK包呢？
-----------------------------------

详细配置请参考 `安装指南 <installation_guide.html>`__

.. _header-n13:

3. 怎么设置只渲染首帧？
-----------------------

-  设置只渲染首帧

 ::

   from rayvision_api.utils import update_task_info
   update_task = {
        "pre_frames": "100",
    }
    update_task_info(update_task, task_path=r"C:\workspace\1586932339\task.json")


.. _header-n14:

4. 怎么设置渲染完优先帧,让任务自动全速渲染？
--------------------------------------------
 ::

   from rayvision_api.utils import update_task_info
   update_task = {
        "stop_after_test": "1"
    }
   update_task_info(update_task, task_path=r"C:\workspace\1586932339\task.json")


详细配置请参考 `详细参数配置 <json_file>`__



.. _header-n34:

5. 怎么设置当前渲染帧结束立即下载渲染结果呢？
---------------------------------------------

我们提供了2中下载方式：

-  所有帧渲染结束才开始下载

-  当前帧渲染技术就开始下载

具体使用方法请参考 `SDK使用 <SDK_tutorial.html#header-n209>`__

.. _header-n9:

6. 最简单的使用方式是怎么样的呢？
----------------------------------

如果不想直接使用而不进行太多的定制，可以直接下载相应的渲染包，

然后选择对应的 `常见全流程样例 <demo/demo.html>`__ 即可体验全流程渲染，详细过程请参考 `SDK入门教程 <SDK_tutorial.html>`__
