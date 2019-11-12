.. _header-n0:

异常码参照
==========

======= =================================== ================================
异常码  异常码描述                          说明
======= =================================== ================================
100     FAIL                                失败
200     SUCCESS                             接口正常返回
400     APIError                            错误请求
403     FORBIDDEN                           没有权限
404     RESOURCE\ *NOT*\ FOUND              资源不存在
500     INTERNAL_ERROR                      服务器处理失败
600     PARAMETER_INVALID                   非法参数
601     PARAMETER\ *CANT*\ BE_EMPTY         缺少必要参数
602     NEED\ *USER*\ LOGIN                 需要用户登录
603     ILLEGAL_PROTOCOL                    非法请求
604     VALIDATE\ *CODE*\ ERROR             手机验证码错误
605     VINSUFFICIENT_PERMISSIONS           权限不足
606     VALIDATE\ *COMMOM*\ CODE_ERROR      验证码错误
607     VALIDATE\ *SEND*\ CODE_ERROR        验证码发送失败
700     DO\ *NOT*\ HAVE\ *ANY*\ MORE_RECORD 没有更多记录
800     ACCOUNT\ *BINDING*\ USER_NULL       账号不存在
801     ACCOUNT\ *NOT*\ BINDING             未绑定设备
802     ACCOUNT\ *BINDING*\ FAIL            设备绑定失败
804     ACCOUNT_LOCKED                      账号已被禁用
805     ACCOUNT\ *USERNAME*\ PASSWORD_FAIL  用户名或密码错误
806     ACCOUNT\ *UNIONID*\ FAIL            账号未绑定第三方用户
807     ACCOUNT\ *PHONE*\ FAIL              手机未绑定第三方用户
808     ACCOUNT\ *UNIONID*\ PHONE           手机已绑定其他第三方用戶
809     ACCOUNT\ *WEIXIN*\ FAIL             微信登录失败
810     ACCOUNT\ *WEIBO*\ FAIL              微博登录失败
811     ACCOUNT\ *LOGOUT*\ FAIL             登出失败
812     ACCOUNT\ *LOGIN*\ IPLIMITFAIL       IP被限制
813     ACCOUNT\ *QQ*\ FAIL                 QQ登录失败
814     NOREPEAT\ *SELECT*\ SOFTWARE        无法重复选择常用软件
815     ACCOUNT\ *UNIONID*\ EXISTS          UNIONID已存在
900     VALIDATE\ *PHONE*\ FAIL             手机号已存在
901     VALIDATE\ *EMAIL*\ FAIL             邮箱已存在
902     VALIDATE\ *USERNAME*\ FAIL          用户名已存在
903     ACCOUNT\ *EMAIL*\ FAIL              邮箱未绑定账户
904     CURRENCY\ *NOT*\ SUPPORT            币种不支持
905     AGENT\ *NOT*\ SUPPORT               代理商不支持
906     AMOUNT\ *NOT*\ SUPPORT              请输入合理的充值范围
908     COUPONNO\ *NOT*\ SUPPORT            优惠码不支持
909     PAYMETHOD\ *NOT*\ SUPPORT           支付方式不支持
910     NO\ *INVOICE*\ ORDER                无可用的发票订单
911     NO\ *INVOICE*\ ADDRESS              无可用的发票收件地址
912     SUBUSER\ *EXISTS*\ TASKS            无法删除一个存在执行任务的子账号
913     SUBUSER_ARREARAGE                   当前子账号欠费
914     DELSUBUSER\ *EXISTS*\ BALANCE       删除子账号存在余额
915     NO\ *INVOICE*\ TEMPLATE             无可用的发票信息
916     RECEIPT\ *TYPE*\ ERROR              发票类型不匹配
920     NO\ *LATEST*\ VERSION               暂无客户端最新版本
1000    REDIS\ *CACHE*\ FAIL                redis缓存异常
1000000 RayvisionError                      python抛出异常
======= =================================== ================================
