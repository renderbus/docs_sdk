.. _header-n0:

异常码参照
==========

======= =================================== ================================
异常码  异常码描述                          说明
======= =================================== ================================
100     FAIL                                失败
200     SUCCESS                             接口正常返回
301     NEED_REDIRECT                       需要跳转地址
400     APIError                            错误请求
403     FORBIDDEN                           没有权限
404     RESOURCE_NOT_FOUND                  资源不存在
500     INTERNAL_ERROR                      服务器处理失败
503     LABEL_ALREADY_EXISTS                新增label已存在
513     USER_CACHE_NOTFOUNT                 用户信息查询失败
600     PARAMETER_INVALID                   非法参数
601     PARAMETER_CANT_BE_EMPTY             缺少必要参数
602     NEED_USER_LOGIN                     需要用户登录
603     ILLEGAL_PROTOCOL                    非法请求
604     VALIDATE_CODE_ERROR                 手机验证码错误
605     VINSUFFICIENT_PERMISSIONS           权限不足
606     VALIDATE_COMMOM_CODE_ERROR          验证码错误
607     VALIDATE_SEND_CODE_ERROR            验证码发送失败
608     USER_AREA_ERROR                     客户国内外区域不匹配
610     SIGNATURE_EXPIRED                   签名过期
611     SIGNATURE_INVALID                   非法签名
700     DO_NOT_HAVE_ANY_MORE_RECORD         没有更多记录
800     ACCOUNT_BINDING_USER_NULL           账号不存在
801     ACCOUNT_NOT_BINDING                 未绑定设备
802     ACCOUNT_BINDING_FAIL                设备绑定失败
804     ACCOUNT_LOCKED                      账号已被禁用
805     ACCOUNT_USERNAME_PASSWORD_FAIL      用户名或密码错误
806     ACCOUNT_UNIONID_FAIL                账号未绑定第三方用户
807     ACCOUNT_PHONE_FAIL                  手机未绑定第三方用户
808     ACCOUNT_UNIONID_PHONE               手机已绑定其他第三方用戶
809     ACCOUNT_WEIXIN_FAIL                 微信登录失败
810     ACCOUNT_WEIBO_FAIL                  微博登录失败
811     ACCOUNT_LOGOUT_FAIL                 登出失败
812     ACCOUNT_LOGIN_IPLIMITFAIL           IP被限制
813     ACCOUNT_QQ_FAIL                     QQ登录失败
814     NOREPEAT_SELECT_SOFTWARE            无法重复选择常用软件
815     ACCOUNT_UNIONID_EXISTS              UNIONID已存在
900     VALIDATE_PHONE_FAIL                 手机号已存在
901     VALIDATE_EMAIL_FAIL                 邮箱已存在
902     VALIDATE_USERNAME_FAIL              用户名已存在
903     ACCOUNT_EMAIL_FAIL                  邮箱未绑定账户
904     CURRENCY_NOT_SUPPORT                币种不支持
905     AGENT_NOT_SUPPORT                   代理商不支持
906     AMOUNT_NOT_SUPPORT                  请输入合理的充值范围
908     COUPONNO_NOT_SUPPORT                优惠码不支持
909     PAYMETHOD_NOT_SUPPORT               支付方式不支持
910     NO_INVOICE_ORDER                    无可用的发票订单
911     NO_INVOICE_ADDRESS                  无可用的发票收件地址
912     SUBUSER_EXISTS_TASKS                无法删除一个存在执行任务的子账号
913     SUBUSER_ARREARAGE                   当前子账号欠费
914     DELSUBUSER_EXISTS_BALANCE           删除子账号存在余额
915     NO_INVOICE_TEMPLATE                 无可用的发票信息
916     RECEIPT_TYPE_ERROR                  发票类型不匹配
920     NO_LATEST_VERSION                   暂无客户端最新版本
1000    REDIS_CACHE_FAIL                    redis缓存异常
20004   JSON_FILE_UPLOAD_FAILED             上传json文件多次都失败,请检查网络环境
200024  ARGUMENT_FORMAT_INVALID             传输参数名设置错误，请检查传输cmd命令
200025  NON_UPLOADABLE FILES                不可上传的文件,检查文件是否存在或者文件是否损坏
1000000 RayvisionError                      python抛出异常
======= =================================== ================================
