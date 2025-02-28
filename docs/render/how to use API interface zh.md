# API接口使用方法

## 准备工作

所有的接口调用都是通过rayvision_api模块，在使用前必须先实例化一个api对象：

```python
user_info = {
    "domain_name": "task.renderbus.com",
    "platform": "2",
    "access_id": "xxxxxxxxxxxxxxxxxxxxxx",
    "access_key": "xxxxxxxxxxxxxxxxxxxxx",
}

api = RayvisionAPI(access_id=user_info['access_id'],
                   access_key=user_info['access_key'],
                   domain=user_info['domain_name'],
                   platform=user_info['platform'])
```


**说明**：

1. 以下接口调用会直接使用以上实例的api进行调用；
2. 返回示例中显示的是原始接口结果，实际在rayvision_api中接口返回给用户的只是“data”参数值；

## 获取平台列表

**接口路径**：  /api/render/common/queryPlatforms

**请求参数**：缺省

**返回参数**：

| **参数**    | **类型** | **说明**   | **备注** |
| --------   | ------- | ---------- | -------- |
| platform   | Integer | 平台号     |          |
| name       | String   | 平台名描述 |          |
| type       | Integer   | 平台类型 |0:GPU,1:CPU,2:效果图|
| status     | Integer   | 平台状态 |0:未启用,1:正常,2:繁忙,3:爆满 |
| taskPrefix | String   | 任务号的平台前缀 |    "W"      |
| isShow     | Integer   | 是否显示 | 1:显示,0:不显示   |

**请求示例:** 

```Python
# 自动根据“domain”参数内容区分国内外
platform = api.query.platforms()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": [
        {
            "platform": 6,
            "name": "query_platform_w6",
            "type": 1,
            "status": 1,
            "taskPrefix": "W",
            "isShow": 1
        }
    ],
    "serverTime": 1535949047370
}
```

## 获取用户详情

**旧接口路径**：  /api/render/setUp/queryUserProfile

**请求参数**：缺省

**请求示例**：

```python
user_profile = api.user.query_user_profile()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "userId": 10001136,
        "userName": "rayvision",
        "platform": 2,
        "phone": "173333333333",
        "email": "",
        "company": "",
        "name": "",
        "job": "",
        "communicationNumber": "",
        "softType": 2000,
        "softStatus": 1,
        "businessType": 1,
        "status": 1,
        "infoStatus": 0,
        "accountType": 1,
        "userType": 1,
        "mainUserId": 0,
        "level": 49,
        "pictureLever": null,
        "zone": 1,
        "rmbbalance": 0,
        "usdbalance": 0,
        "rmbCumulative": 0,
        "usdCumulative": 0,
        "credit": 0,
        "coupon": 49.93,
        "description": "",
        "country": "中国",
        "city": "广东 中山",
        "address": "",
        "cpuPrice": 0.67,
        "gpuPrice": 20,
        "shareMainCapital": 0,
        "subDeleteTask": 0,
        "useMainBalance": 0,
        "hideBalance": 0,
        "hideJobCharge": 0,
        "useLevelDirectory": 1,
        "downloadDisable": 0,
        "displaySubaccount": 1,
        "subaccountLimits": 5,
        "houdiniFlag": 0,
        "c4dFlag": 0,
        "blenderFlag": 0,
        "studentEndTime": null
    },
    "serverTime": 1535953580730
}

```

## 获取用户设置

**接口路径**： /api/render/setUp/queryUserSetting 

**请求参数**：缺省

**返回参数**：

| **参数**                  | **类型** | **说明**                                | **备注**       |
|---------------------------|----------|-----------------------------------------|----------------|
| infoStatus                | Integer  |                                         |                |
| accountType               | Integer  |                                         |                |
| shareMainCapital          | Integer  | 共用主账号资产 0 不共用 1共用           |                |
| subDeleteTask             | Integer  | 是否允许子账号删除任务 0不允许 1 允许   |                |
| useMainBalance            | Integer  | 是否允许子账号使用主账号余额或信用额度  | 0不允许 1 允许 |
| maxIgnoreMapFlag          | String   | 是否忽略max错误贴图                     | 0不忽略，1忽略 |
| autoCommit                | String   | 是否启动场景参数渲染                    | 1不启用，2启用 |
| separateAccountFlag       | Integer  | 主子账号分离设置                        |                |
| mifileSwitchFlag          | Integer  | mi文件分析风险开关                      |                |
| assfileSwitchFlag         | Integer  | 不分析ass文件开关标识                   |                |
| manuallyStartAnalysisFlag | Integer  | 手动开启分析开关                        |                |
| downloadDisable           | Integer  | 禁用下载                                | 1禁用，0不禁用 |
| taskOverTime              | Integer  | 超时时间-小时                           |                |
| taskOverTimeSec           | Integer  | 超时时间-秒                             |                |
| ignoreMapFlag             | Integer  | 本地分析忽略贴图丢失                    |                |
| isVrayLicense             | Integer  | 使用付费版vray渲染                      |                |
| justUploadConfigFlag      | Integer  | 本地分析max只上传配置文件               |                |
| justUploadCgFlag          | Integer  | maya渲染只上传cg文件                    |                |
| mandatoryAnalyseAllAgent  | Integer  | 本地分析强制分析所有代理                |                |

**请求示例**：

```python
user_setting = api.user.query_user_setting()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "infoStatus": null,
        "accountType": null,
        "shareMainCapital": 0,
        "subDeleteTask": 0,
        "useMainBalance": 0,
        "singleNodeRenderFrames": "1",
        "maxIgnoreMapFlag": "1",
        "autoCommit": "2",
        "separateAccountFlag": 0,
        "mifileSwitchFlag": 0,
        "assfileSwitchFlag": 0,
        "manuallyStartAnalysisFlag": 0,
        "downloadDisable": 0,
		"taskOverTime": 12,
		"taskOverTimeSec": 3600
    },
    "serverTime": 1535954828406
}
```

## 更新用户设置

**接口路径**： /api/render/setUp/updateUserSetting 

**请求参数**：

| **参数**       | **类型** | 是否必须 | **说明**                   | **备注** |
| -------------- | -------- | -------- | -------------------------- | -------- |
| task_over_time | Integer  | Y        | 任务超时时间设置(单位：秒) |          |

**返回参数**：缺省

**请求示例**：

```python
update_user_setting = api.user.update_user_settings(task_over_time=43200)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 获取用户传输BID

**接口路径**： /api/render/transfer/getBid

**请求参数**：缺省

**返回参数**：

| **参数**             | **类型** | **说明**                                                     | **备注** |
| -------------------- | -------- | ------------------------------------------------------------ | -------- |
| config_bid           | String   | 配置文件传输ID                                               |          |
| output_bid           | String   | 下载传输ID                                                   |          |
| parent_input_bid     | String   | 对应主账号Input传输bid                                       |          |
| input_bid            | String   | 资产上传传输ID                                               |          |
| sub_user_output_bids | Object   | 子账号outputbids,如果访问用户是主账号，则有子账号值，否则为空 |          |
| userId               | String   | 子账号ID                                                     |          |
| output_bid           | String   | 子账号outputbid                                              |          |

**请求示例**：

```python
user_transfer_bid = api.user.get_transfer_bid()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "config_bid": "30201",
        "input_bid": "10201",
        "output_bid": "20201",
        "parent_input_bid": "10202",
        "sub_user_output_bids": [{
            userId:"119776",
            outputBid:"10401"
        }]
	},
    "serverTime": 1535957964631
}
```

## 创建任务号

**接口路径**： /api/render/submit/createTask 

**请求参数**：

| **参数**          | **类型**       | 是否必须 | **说明**               | **备注**                 |
| ----------------- | -------------- | -------- | ---------------------- | ------------------------ |
| count             | Integer        | N        | 非必须，创建任务号数量 | 默认为 1                 |
| out_user_id       | Long           | N        | 非必须，外部用户ID     | 用于区分第三方接入的用户 |
| task_user_level   | Integer        | N        | 非必须，任务用户级别   | 可选50和60,默认为50      |
| labels            | List\<String\> | N        | 非必须，标签列表       |                          |
| clone_original_id | integer        | N        | 克隆原任务id           |                          |
| artist            | String         | N        | 制作人                 |                          |

**返回参数**：

| **参数**        | **类型**        | **说明**   | **备注** |
| --------------- | --------------- | ---------- | -------- |
| aliasTaskIdList | List\<String\>  | 任务ID别名 |          |
| taskIdList      | List\<Integer\> | 任务ID     |          |
| userId          | Long            | 用户id     |          |

**请求示例**：

```Python
create_task_id = api.task.create_task(count=1, 
                                      task_user_level=50,
                                      labels=["label_test1", "label_test2"])
```

**返回示例**：

```python
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "aliasTaskIdList": [
            "2W19097"
        ],
        "taskIdList": [
            19097
        ],
        "userId": 10007893
    },
    "serverTime": 1535959487092
}
```

## 提交任务

**接口路径**： /api/render/submit/task

**请求参数**：

| **参数** | **类型** | 是否必须 | **说明**   | **备注** |
| -------- | -------- | -------- | ---------- | -------- |
| task_id  | Integer  | Y        | 提交任务ID |          |
| producer | String   | N        | 制作人     |          |

**返回参数**：缺省

**请求示例**：

```python
submit_task = api.task.submit_task(task_id=create_task_id[0])
```

**返回示例**：

```Python
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

 注意：进行提交之前需要先调用传输接口上传相关的分析配置文件

## 获取分析错误码

**接口路径:**  /api/render/submit/queryAnalyseErrorDetail 

**请求参数**：

| **参数** | **类型** | 是否必须 | **说明**       | **备注**                    |
| -------- | -------- | -------- | -------------- | --------------------------- |
| code     | String   | N        | 必须值，错误码 | codes和code任一必填         |
| codes    | String   | N        | 错误码列表     | codes和code任一必填         |
| language | String   | N        | 非必须，语言   | “0”：中文（默认） "1"：英文 |

**返回参数**：List\<CodeInfo\>

| **参数**         | **类型** | **说明**         | **备注**                     |
|------------------|----------|------------------|------------------------------|
| id               |          |                  |                              |
| code             | Integer  | 错误码           |                              |
| type             | Integer  | 类型             | 0警告-可忽略，1错误-不可忽略 |
| languageFlag     | Integer  | 语言类型         | 0中文，1英文                 |
| desDescriptionCn | String   | 中文描述         |                              |
| desSolutionCn    | String   | 解决方案         |                              |
| solutionPath     | String   | 解决方案连接     |                              |
| isRepair         | Integer  | 是否可修复       | 1 可修复，0不可修复          |
| isOpen           | Integer  | 错误是否开启拦截 | 0 不开启，1 开启             |
| updateTime       | Date     | 最后更新时间     |                              |

**请求示例**：

```Python
error_detail = api.query.error_detail(code="50001")
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": [
        {
            "id": 5,
            "code": "15000",
            "type": 1,
            "languageFlag": 0,
            "desDescriptionCn": "启动3ds max卡住或者失败",
            "desSolutionCn": "1.检查启用对应版本的3ds max是否有特殊弹窗，有的话手动关闭；\n2.检查操作系统是否设置了高级别的权限",
            "solutionPath": "http://note.youdao.com/noteshare?id=d8f1ea0c46dfb524af798f6b1d31cf6f",
            "isRepair": 0,
            "isDelete": 1,
            "isOpen": 1,
            "lastModifyAdmin": "",
            "updateTime": 1534387709000
        }
    ],
    "serverTime": 1535962451356
}
```

## 获取任务列表

**接口路径**： /api/render/handle/getTaskList

**请求参数**：

| **参数**       | **类型**        | 是否必须 | **说明**                         | **备注**                 |
| -------------- | --------------- | -------- | -------------------------------- | ------------------------ |
| page_num       | Integer         | N        | 当前页数                         | 默认:1                   |
| page_size      | Integer         | N        | 每页显示数量                     | 默认:100                 |
| status_list    | List\<Integer\> | N        | 状态码列表，查询列表中状态的任务 | 参见任务状态说明              |
| search_keyword | String          | N        | 场景名或者作业ID                 | 模糊搜索                 |
| start_time     | String          | N        | 搜索提交时间下限                 | 格式 yyyy-MM-dd HH:mm:ss |
| end_time       | String          | N        | 搜索提交时间上限                 | 格式 yyyy-MM-dd HH:mm:ss |
| recycle_flag   | Integer         | N        | 是否查询已删除任务               | 1                        |

**任务状态说明**：

| **状态**            | **状态码** | **说明**       |
|---------------------|------------|----------------|
| WAITING             | 0          | 等待           |
| RENDERING           | 5          | 渲染中         |
| PRE_RENDERING       | 8          | 预处理中       |
| STOP                | 10         | 停止           |
| ARREARAGE_STOP      | 20         | 欠费停止       |
| TIME_OUT_STOP       | 23         | 超时停止       |
| FINISHED            | 25         | 已完成         |
| FINISHED_HAS_FAILED | 30         | 已完成有失败帧  |
| ABANDON             | 35         | 放弃           |
| FINISHED_TEST       | 40         | 测试完成       |
| FAILED              | 45         | 失败           |
| ANALYSE             | 50         | 分析中         |
| FINISHED_HAS_STOPPED             | 70         | 已完成有停止帧  |

**返回参数**：List\<TaskInfo\>

| **参数**              | **类型**             | **说明**                   | **备注**                                                     |
| --------------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| sceneName             | String               | 场景名                     |                                                              |
| id                    | Integer              | 任务id                     |                                                              |
| taskAlias             | String               | 任务别名                   |                                                              |
| taskStatus            | Byte                 | 任务状态                   | 0/等待，5/渲染，10/停止，15/用户停止，20/因欠费停止，25/完成，30/完成包含失败帧，35/放弃，40/测试完成，45/失败，50/分析中，100/状态更新中 |
| statusText            | String               | 任务状态文本               |                                                              |
| preTaskStatus         | Byte                 | 预处理任务状态             |                                                              |
| preStatusText         | String               | 预处理状态文本             |                                                              |
| totalFrames           | Integer              | 总帧数                     |                                                              |
| abortFrames           | Integer              | 放弃帧数                   |                                                              |
| executingFrames       | Integer              | 正在运行的帧数             |                                                              |
| doneFrames            | Integer              | 完成的帧数                 |                                                              |
| failedFrames          | Integer              | 失败帧数                   |                                                              |
| framesRange           | String               | 帧范围                     |                                                              |
| projectName           | String               | 项目名                     |                                                              |
| renderConsume         | BigDecimal           | 任务渲染消费的总费用       |                                                              |
| taskArrears           | BigDecimal           | 任务欠费金额               |                                                              |
| submitDate            | Date                 | 提交时间                   |                                                              |
| startTime             | Date                 | 开始时间                   |                                                              |
| completedDate         | Date                 | 完成时间                   |                                                              |
| renderDuration        | Long                 | 任务渲染总时长             | 单位：秒                                                     |
| userName              | String               | 用户名                     |                                                              |
| producer              | String               | 制作人                     |                                                              |
| taskLevel             | Byte                 | 任务优先级                 |                                                              |
| taskUserLevel         | Integer              | 用户层面的优先级           |                                                              |
| taskLimit             | Integer              | 任务机器限制               |                                                              |
| taskOverTime          | Long                 | 任务超时提醒               |                                                              |
| outputFileName        | String               | 输出文件名                 |                                                              |
| munuTaskId            | String               | 调度器id                   |                                                              |
| layerParentId         | String               | 针对maya任务，层父id       |                                                              |
| cgId                  | Integer              | 任务类型                   | 2001/maya，2000/max                                          |
| taskKeyValueVo        | Object               | 任务关键字集合             |                                                              |
| userAccountConsume    | Bigdecimal           | 用户账户扣费               |                                                              |
| couponConsume         | Bigdecimal           | 优惠券扣费                 |                                                              |
| isOpen                | Byte                 | 前端的展开按钮是否展开     |                                                              |
| taskType              | String               | 任务类型                   | /预处理,/光子渲染,/渲染主图                                  |
| renderCamera          | String               | 渲染相机                   |                                                              |
| cloneParentId         | Integer              | 克隆任务挂在那个任务下的id |                                                              |
| cloneOriginalId       | Integer              | 从哪个任务克隆的           |                                                              |
| shareMainCapital      | Byte                 | 该任务是否共享主账号资产   | 0 不共享 ,  1 共享                                           |
| taskRam               | Integer              | 任务渲染内存               |                                                              |
| respRenderingTaskList | **List\<TaskInfo\>** | 展开的任务的子任务         | 跟此对象一样                                                 |
| layerName             | String               | 层名                       |                                                              |
| taskTypeText          | String               | 任务类型                   | 光子/主图                                                    |
| isDelete              | Byte                 | 是否删除                   | 0：已删除，1：未删除                                         |

**taskKeyValueVo实体**

| **参数**         | **类型** | **说明** | **备注** |
|------------------|----------|----------|----------|
| tiles            | String   | 分块数   |          |
| allCamera        | String   | 全部相机 |          |
| renderableCamera | String   | 渲染相机 |          |

**请求示例**：

```Python
task_list = api.query.get_task_list(page_num=1, page_size=1)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "pageCount": 32,
        "pageNum": 1,
        "total": 32,
        "size": 1,
        "items": [
            {
                "sceneName": "衣帽间.max",
                "id": 18278,
                "taskAlias": "P18278",
                "taskStatus": 0,
                "statusText": "render_task_status_0",
                "preTaskStatus": 25,
                "preStatusText": "render_task_status_25",
                "totalFrames": 0,
                "abortFrames": null,
                "executingFrames": null,
                "doneFrames": null,
                "failedFrames": 0,
                "framesRange": "0",
                "projectName": "",
                "renderConsume": null,
                "taskArrears": 0,
                "submitDate": 1535602289000,
                "startTime": null,
                "completedDate": null,
                "renderDuration": null,
                "userName": "xiaoguotu_ljian",
                "producer": null,
                "taskLevel": 79,
                "taskUserLevel": 0,
                "taskLimit": 200,
                "taskOverTime": null,
                "userId": 10001520,
                "outputFileName": null,
                "munuTaskId": "",
                "layerParentId": 0,
                "cgId": 2001,
                "taskKeyValueVo": {
                            "tiles": null,
                            "allCamera": null,
                            "renderableCamera": null
                        },
                "userAccountConsume": null,
                "couponConsume": null,
                "isOpen": 1,
                "taskType": "",
                "renderCamera": "VRayCam003",
                "cloneParentId": null,
                "cloneOriginalId": null,
                "shareMainCapital": 0,
                "taskRam": null,
                "respRenderingTaskList": [
                    {
                        "sceneName": "衣帽间.max",
                        "id": 18280,
                        "taskAlias": "P18280",
                        "taskStatus": 25,
                        "statusText": "render_task_status_25",
                        "preTaskStatus": null,
                        "preStatusText": null,
                        "totalFrames": 1,
                        "abortFrames": 0,
                        "executingFrames": 0,
                        "doneFrames": 1,
                        "failedFrames": 0,
                        "framesRange": "0",
                        "projectName": "",
                        "renderConsume": 1.57,
                        "taskArrears": 0,
                        "submitDate": 1535602289000,
                        "startTime": 1535602601000,
                        "completedDate": 1535603874000,
                        "renderDuration": 1176,
                        "userName": "xiaoguotu_ljian",
                        "producer": null,
                        "taskLevel": 79,
                        "taskUserLevel": 0,
                        "taskLimit": 200,
                        "taskOverTime": 86400000,
                        "userId": 10001520,
                        "outputFileName": "18280_衣帽间",
                        "munuTaskId": "2018083000075",
                        "layerParentId": 18278,
                        "cgId": 2001,
                        "taskKeyValueVo": {
                            "tiles": null,
                            "allCamera": null,
                            "renderableCamera": null
                        },
                        "userAccountConsume": 0,
                        "couponConsume": 1.57,
                        "isOpen": 0,
                        "taskType": "RenderPhoton",
                        "renderCamera": "VRayCam003",
                        "cloneParentId": 0,
                        "cloneOriginalId": 0,
                        "shareMainCapital": 0,
                        "taskRam": null,
                        "respRenderingTaskList": null,
                        "layerName": null,
                        "taskTypeText": "render_photons_task",
                        "isDelete": 1
                    },
                    {
                        "sceneName": "衣帽间.max",
                        "id": 18281,
                        "taskAlias": "P18281",
                        "taskStatus": 25,
                        "statusText": "render_task_status_25",
                        "preTaskStatus": null,
                        "preStatusText": null,
                        "totalFrames": 17,
                        "abortFrames": 0,
                        "executingFrames": 0,
                        "doneFrames": 17,
                        "failedFrames": 0,
                        "framesRange": "0",
                        "projectName": "",
                        "renderConsume": 6.7,
                        "taskArrears": 0,
                        "submitDate": 1535602289000,
                        "startTime": 1535603885000,
                        "completedDate": 1535604765000,
                        "renderDuration": 5028,
                        "userName": "xiaoguotu_ljian",
                        "producer": null,
                        "taskLevel": 79,
                        "taskUserLevel": 0,
                        "taskLimit": 200,
                        "taskOverTime": 86400000,
                        "userId": 10001520,
                        "outputFileName": "18281_衣帽间",
                        "munuTaskId": "2018083000079",
                        "layerParentId": 18278,
                        "cgId": 2001,
                        "taskKeyValueVo": {
                            "tiles": null,
                            "allCamera": null,
                            "renderableCamera": null
                        },
                        "userAccountConsume": 0,
                        "couponConsume": 6.7,
                        "isOpen": 0,
                        "taskType": "Render",
                        "renderCamera": "VRayCam003",
                        "cloneParentId": 0,
                        "cloneOriginalId": 0,
                        "shareMainCapital": 0,
                        "taskRam": null,
                        "respRenderingTaskList": null,
                        "layerName": null,
                        "taskTypeText": "render_major_picture_task",
                        "isDelete": 1
                    }
                ],
                "layerName": null,
                "taskTypeText": null,
                "isDelete": 1
            }
        ]
    },
    "serverTime": 1535964116655
}
```

## 停止任务

**接口路径**： /api/render/handle/stopTask 

**请求参数**：

| **参数**        | **类型**        | 是否必须 | **说明**   | **备注** |
| --------------- | --------------- | -------- | ---------- | -------- |
| task_param_list | List\<Integer\> | Y        | 任务号集合 |          |

**返回参数**：缺省

**请求示例**：

```Python
stop_task = api.task.stop_task(task_param_list=[13798105])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 开始任务

**接口路径**： /api/render/handle/startTask 

**请求参数**：

| **参数**        | **类型**        | 是否必须 | **说明**   | **备注** |
| --------------- | --------------- | -------- | ---------- | -------- |
| task_param_list | List\<Integer\> | Y        | 任务号集合 |          |

**返回参数**：缺省

**请求示例**：

```Python
start_task = api.task.start_task(task_param_list=[13798105])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 放弃任务

**接口路径**： /api/render/handle/abandonTask 

**请求参数**：

| **参数**        | **类型**        | 是否必须 | **说明**   | **备注** |
| --------------- | --------------- | -------- | ---------- | -------- |
| task_param_list | List\<Integer\> | Y        | 任务号集合 |          |

**返回参数**：缺省

**请求示例**：

```python
abort_task = api.task.abort_task(task_param_list=[13798105])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 删除任务

**接口路径**： /api/render/handle/deleteTask

**请求参数**：

| **参数**        | **类型**        | 是否必须 | **说明**   | **备注** |
| --------------- | --------------- | -------- | ---------- | -------- |
| task_param_list | List\<Integer\> | Y        | 任务号集合 |          |

**返回参数**：缺省

**请求示例**：

```python
delete_task = api.task.delete_task(task_param_list=[13798105])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 获取任务单页渲染帧详情

**接口路径**：  /api/render/handle/queryTaskFrames  

**请求参数**：

| **参数**       | **类型** | 是否必须 | **说明**                 | **备注**                                         |
| -------------- | -------- | -------- | ------------------------ | ------------------------------------------------ |
| task_id        | Integer  | Y        | 任务ID号                 | 任务ID号，是任务的唯一标识，必填字段             |
| search_keyword | String   | N        | 根据一机渲多帧名进行查询 | 是一个字符串，根据一机渲多帧名这个字段名进行查询 |
| page_num       | Integer  | N        | 当前页编号               | 默认1                                            |
| page_size      | Integer  | N        | 每页显示数据大小         | 默认100                                          |

**返回参数**：List\<FrameInfo\>

| **参数**         | **类型** | **说明**            | **备注**                                                                                                                                                           |
|------------------|----------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id               |          |                     |                                                                                                                                                                    |
| userId           | Long     | 用户ID              |                                                                                                                                                                    |
| framePrice       | Double   | 渲染价格            |                                                                                                                                                                    |
| feeType          | Integer  | 扣费类型            | 0 按量，1 包机，2 包项目                                                                                                                                           |
| platform         | Integer  | 平台                |                                                                                                                                                                    |
| frameIndex       | String   | 帧序列名            |                                                                                                                                                                    |
| frameBlock       | String   | 当前帧块数          |                                                                                                                                                                    |
| frameStatus      | Integer  | 当前帧状态          | 0/等待，5/渲染，10/停止，15/用户停止，20/因欠费停止，25/完成，30/完成包含失败帧，35/放弃，40/测试完成，45/失败，50/分析中，100/状态更新中 |
| feeAmount        | Double   | 余额扣费            |                                                                                                                                                                    |
| couponFee        | Double   | 代金券扣费          |                                                                                                                                                                    |
| startTime        | Long     | 开始时间（毫秒）    |                                                                                                                                                                    |
| endTime          | Long     | 结束时间（毫秒）    |                                                                                                                                                                    |
| frameExecuteTime | Long     | 渲染帧耗时          |                                                                                                                                                                    |
| frameStatusText  | String   | 帧状态描述          |                                                                                                                                                                    |
| arrearsFee       | Double   | 渲染帧欠费金额      |                                                                                                                                                                    |
| taskId           | Long     | 任务ID              |                                                                                                                                                                    |
| frameType        | Integer  | 帧类型              | 1/预渲染(只有一帧,多相机情况也只有一帧),2/光子帧,3/合并光子帧,4/优先帧,5/渲染主图帧,6/maya/max优先渲染合成帧,7/maya/max渲染主图合成帧,8/houdini结算帧，9/max通道帧 |
| recommitFlag     | Integer  | 重提次数            | 重提标识默认是0,按次数递增                                                                                                                                         |
| taskOverTime     | Integer  | 超时时间            | 帧超时时间                                                                                                                                                         |
| gopName          | String   | houdini结算节点名称 |                                                                                                                                                                    |
| frameRam         | Integer  | 帧任务渲染内存      | 如果为空说明没有内存要求                                                                                                                                           |

**请求示例**：

```python
task_frame = api.query.task_frames(task_id=13790691, page_num=1, page_size=1)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "pageCount": 9,
        "pageNum": 1,
        "total": 17,
        "size": 2,
        "items": [
            {
                "id": 1546598,
                "userId": null,
                "framePrice": null,
                "feeType": null,
                "platform": null,
                "frameIndex": "0-1",
                "frameStatus": 4,
                "feeAmount": 0.44,
                "startTime": 1535960273000,
                "endTime": 1535960762000,
                "frameExecuteTime": 489,
                "frameStatusText": "task_frame_status_4",
                "arrearsFee": null,
                "munuJobId": "0",
                "taskId": 19088,
                "munuTaskId": "2018090300040",
                "frameType": 5,
                "couponFee": 0,
                "recommitFlag": 0,
                "isCopy": null,
                "frameBlock": "1",
                "taskOverTime": 86400000,
                "gopName": null,
                "frameRam": null
            },
            {
                "id": 1546599,
                "userId": null,
                "framePrice": null,
                "feeType": null,
                "platform": null,
                "frameIndex": "0-2",
                "frameStatus": 4,
                "feeAmount": 0.43,
                "startTime": 1535960856000,
                "endTime": 1535961338000,
                "frameExecuteTime": 482,
                "frameStatusText": "task_frame_status_4",
                "arrearsFee": null,
                "munuJobId": "1",
                "taskId": 19088,
                "munuTaskId": "2018090300040",
                "frameType": 5,
                "couponFee": 0,
                "recommitFlag": 0,
                "isCopy": null,
                "frameBlock": "2",
                "taskOverTime": 86400000,
                "gopName": null,
                "frameRam": null
            }
        ]
    },
    "serverTime": 1535966967143
}
```

## 获取指定任务某几页帧详情

[^api]: Add in v2.4.0

**请求参数**：

| **参数**   | **类型** | 是否必须 | **说明**                            | **备注**                                     |
| ---------- | -------- | -------- | ----------------------------------- | -------------------------------------------- |
| task_id    | Integer  | Y        | 子任务号                            | 如作业ID为“2W35736251”，task_id即为 35736251 |
| start_page | Integer  | N        | 查询起始页， 默认为1                |                                              |
| end_page   | Integer  | N        | 查询结束页，默认为2000              |                                              |
| page_size  | Integer  | N        | 指定每一页显示帧数，默认为最大值100 |                                              |

**请求示例**：

```python
all_frames = api.query.get_all_frames(task_id=35736251)
```

**返回示例**：

```json
{
    "1": {
        "id": 665078505,
        "userId": null,
        "framePrice": null,
        "feeType": null,
        "platform": null,
        "frameIndex": "1",
        "frameStatus": 1,
        "feeAmount": 0.0,
        "startTime": 0,
        "endTime": 0,
        "frameExecuteTime": 33,
        "currentRenderTime": 0,
        "frameStatusText": "task_frame_status_1",
        "arrearsFee": null,
        "munuJobId": "0",
        "taskId": 37439351,
        "munuTaskId": "2020092801043",
        "frameType": 4,
        "couponFee": 0.037,
        "recommitFlag": 0,
        "isCopy": null,
        "frameBlock": "",
        "taskOverTime": 259200,
        "gopName": null,
        "frameRam": 64,
        "averageCpu": 9,
        "averageMemory": 2240647168,
        "isOverTime": 0,
        "overOneMonth": null,
        "renderRam": null,
        "nodeId": "10.60.3.224",
        "openRenderRam": null
    },
    "2-4[1]": {
        "id": 665078511,
        "userId": null,
        "framePrice": null,
        "feeType": null,
        "platform": null,
        "frameIndex": "2-4[1]",
        "frameStatus": 1,
        "feeAmount": null,
        "startTime": 0,
        "endTime": 0,
        "frameExecuteTime": 0,
        "currentRenderTime": 0,
        "frameStatusText": "task_frame_status_1",
        "arrearsFee": null,
        "munuJobId": "0",
        "taskId": 37439351,
        "munuTaskId": "2020092801165",
        "frameType": 5,
        "couponFee": null,
        "recommitFlag": 0,
        "isCopy": null,
        "frameBlock": "",
        "taskOverTime": 259200,
        "gopName": null,
        "frameRam": 64,
        "averageCpu": 0,
        "averageMemory": 0,
        "isOverTime": 0,
        "overOneMonth": null,
        "renderRam": null,
        "nodeId": "",
        "openRenderRam": null
    }
}
```

## 获取任务总渲染帧概况

**接口路径**： /api/render/handle/queryAllFrameStats

**请求参数**：缺省

**返回参数**：

| **参数**             | **类型** | **说明**   | **备注** |
| -------------------- | -------- | ---------- | -------- |
| executingFramesTotal | Integer  | 渲染中帧数 |          |
| doneFramesTotal      | Integer  | 完成帧数   |          |
| failedFramesTotal    | Integer  | 失败帧数   |          |
| waitingFramesTotal   | Integer  | 等待帧数   |          |
| abandonFramesTotal   | Integer  | 放弃帧数   |          |
| totalFrames          | Integer  | 渲染总帧数 |          |

**请求示例**：

```python
all_frame_status = api.query.all_frame_status()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "executingFramesTotal": 1,
        "doneFramesTotal": 308,
        "failedFramesTotal": 2,
        "waitingFramesTotal": 153,
        "abandonFramesTotal": 113,
        "totalFrames": 577
    },
    "serverTime": 1535968038725
}
```

## 重提失败帧

**接口路径**：  /api/render/handle/recommitTasks

**请求参数**：

| **参数**        | **类型**        | 是否必须 | **说明**                                 | **备注** |
| --------------- | --------------- | -------- | ---------------------------------------- | -------- |
| task_param_list | List\<Integer\> | Y        | 任务号集合                               |          |
| status          | List\<Integer>  | N        | 重提的帧任务状态集合，不填表示重提失败帧 |          |

**返回参数**：缺省

**请求示例**：

```python
restart_failed_frames = api.query.restart_failed_frames(task_param_list=[13788981])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 根据帧ID重提任务指定帧

**接口路径**：  /api/render/handle/recommitTaskFrames

**请求参数**：

| **参数**   | **类型**        | 是否必须 | **说明**     | **备注**                                           |
| ---------- | --------------- | -------- | ------------ | -------------------------------------------------- |
| task_id    | Integer         | N        | 任务ID       | task_id和ids_list任选其一必填                      |
| ids_list   | List\<Integer\> | N        | 帧ID集合     | task_id和ids_list任选其一必填, select_all为0时生效 |
| select_all | Integer         | N        | 是否全部重提 | 1全部重提，0指定帧重提                             |
| status     | List\<Integer>  | N        | 帧状态       | 只有传taskId才生效                                 |

**返回参数**：缺省

**请求示例**：

```python
restart_frame = api.query.restart_frame(task_id=14362099, select_all=1)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 停止任务

**接口路径**：  /api/render/handle/stopTaskFrames

**请求参数**：

| **参数**   | **类型**        | 是否必须 | **说明**     | **备注**                                           |
| ---------- | --------------- | -------- | ------------| -------------------------------------------------- |
| task_id    | Integer         | Y        | 任务ID      |                                        |
| ids_list   | List\<Integer\> | N        | 任务ID集合   |  可选                                  |
| select_all | Integer         | N        | 全选 | 1代表用户全选操作，0代表用户非全选（此时ids必填）                           |
| status     | List\<Byte>     | N        | 帧状态       | 只有传selectAll=1才生效                                 |

**返回参数**：缺省

**请求示例**：

```python
stopTaskFrames = api.query.stop_frame(task_id=14362099)
```

**返回示例**：

```json
{
    "version": "2.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1702372110592
}
```

## 根据帧序号重提任务指定的帧

[^api]: Add in v2.4.0 

**请求参数**：

| **参数**      | **类型**  | **说明**             | **备注**                                     |
| ------------- | --------- | -------------------- | -------------------------------------------- |
| task_id       | Integer   | 子任务ID             | 如作业ID为“2W35736251”，task_id即为 35736251 |
| restartframes | List[str] | 需要重提的帧序号列表 | 例如：["6", "7-9[1]"]                        |

**请求示例**：

```python
restart_frame = api.query.get_custome_frames(task_id=37439351, restartframes=["6", "7-9[1]"])
```

**返回参数**：None

## 获取渲染日志

**接口路径**： /api/render/handle/showLog

**请求参数**：

| **参数**      | **类型**        | **说明**      | **备注** |
| ------------- | --------------- |-------------| -------- |
| renderingType | String | 渲染类型：render |          |
| pageNum | Integer | 页码      |          |
| pageSize | Integer| 页数      |          |
| id | Integer | 帧id      |          |

**返回参数**：List[String]

| **参数**      | **类型**        | **说明** | **备注** |
| ------------- | --------------- |--------| -------- |
| items | List[String]| 数据     |          |

**请求示例**：

```python
log_res = api.query.get_render_log(renderingType="render", pageNum=0, pageSize=1, frame_id=521446373)
```

**返回示例**：

```json
{
"version":"1.0.0",
"result":true,
"message":"success",
"code":200,
"data":{
"pageCount":2,
"pageNum":0,
"total":29967,
"size":16384,
"items":[
"",
"",
"=================================maxlog=================================",
"",
"",
"------------    3ds Max Log File   -------------"
]
},
"serverTime":1581074257712,
"requestId":"vTKMmj-UHJlLVNlcnZpY2UwNg-1581074257467"
}
```

## 获取任务详情

**接口路径**： /api/render/handle/queryTaskInfo

**请求参数**：

| **参数**      | **类型**        | **说明**   | **备注** |
| ------------- | --------------- | ---------- | -------- |
| task_ids_list | List\<Integer\> | 任务ID集合 |          |

**返回参数**：List\<TaskInfo>

| **参数**              | **类型**             | **说明**                   | **备注**                                                                                                      |
|-----------------------|----------------------|----------------------------|---------------------------------------------------------------------------------------------------------------|
| sceneName             | String               | 场景名                     |                                                                                                               |
| id                    | Integer              | 任务id                     |                                                                                                               |
| taskAlias             | String               | 任务别名                   |                                                                                                               |
| taskStatus            | Byte                 | 任务状态                   | 0/等待，5/渲染，10/停止，15/用户停止，20/因欠费停止，25/完成，30/完成包含失败帧，35/放弃，40/测试完成，45/失败，50/分析中，100/状态更新中 ||
| statusText            | String               | 任务状态文本               |                                                                                                               |
| preTaskStatus         | Byte                 | 预处理任务状态             |                                                                                                               |
| preStatusText         | String               | 预处理状态文本             |                                                                                                               |
| totalFrames           | Integer              | 总帧数                     |                                                                                                               |
| abortFrames           | Integer              | 放弃帧数                   |                                                                                                               |
| executingFrames       | Integer              | 正在运行的帧数             |                                                                                                               |
| doneFrames            | Integer              | 完成的帧数                 |                                                                                                               |
| failedFrames          | Integer              | 失败帧数                   |                                                                                                               |
| framesRange           | String               | 帧范围                     |                                                                                                               |
| projectName           | String               | 项目名                     |                                                                                                               |
| renderConsume         | BigDecimal           | 任务渲染消费的总费用       |                                                                                                               |
| taskArrears           | BigDecimal           | 任务欠费金额               |                                                                                                               |
| submitDate            | Date                 | 提交时间                   |                                                                                                               |
| startTime             | Date                 | 开始时间                   |                                                                                                               |
| completedDate         | Date                 | 完成时间                   |                                                                                                               |
| renderDuration        | Long                 | 任务渲染总时长             | 单位：秒                                                                                                      |
| userName              | String               | 用户名                     |                                                                                                               |
| producer              | String               | 制作人                     |                                                                                                               |
| taskLevel             | Byte                 | 任务优先级                 |                                                                                                               |
| taskUserLevel         | Integer              | 用户层面的优先级           |                                                                                                               |
| taskLimit             | Integer              | 任务机器限制               |                                                                                                               |
| taskOverTime          | Long                 | 任务超时提醒               |                                                                                                               |
| outputFileName        | String               | 输出文件名                 |                                                                                                               |
| munuTaskId            | String               | 调度器id                   |                                                                                                               |
| layerParentId         | String               | 针对maya任务，层父id       |                                                                                                               |
| cgId                  | Integer              | 任务类型                   | 2001/maya，2000/max                                                                                           |
| taskKeyValueVo        | Object               | 任务关键字集合             |                                                                                                               |
| userAccountConsume    | Bigdecimal           | 用户账户扣费               |                                                                                                               |
| couponConsume         | Bigdecimal           | 优惠券扣费                 |                                                                                                               |
| isOpen                | Byte                 | 前端的展开按钮是否展开     |                                                                                                               |
| taskType              | String               | 任务类型                   | /预处理,/光子渲染,/渲染主图                                                                                   |
| renderCamera          | String               | 渲染相机                   |                                                                                                               |
| cloneParentId         | Integer              | 克隆任务挂在那个任务下的id |                                                                                                               |
| cloneOriginalId       | Integer              | 从哪个任务克隆的           |                                                                                                               |
| shareMainCapital      | Byte                 | 该任务是否共享主账号资产   | (0 不共享 1共享)                                                                                              |
| taskRam               | Integer              | 任务渲染内存               |                                                                                                               |
| respRenderingTaskList | **List\<TaskInfo\>** | 展开的任务的子任务         | 跟此对象一样                                                                                                  |
| layerName             | String               | 层名                       |                                                                                                               |
| taskTypeText          | String               | 任务类型                   | 光子/主图                                                                                                     |
| isDelete              | Byte                 | 是否删除                   | 0：已删除，1：未删除                                                                                          |

**请求示例**

```
task_info = api.query.task_info(task_ids_list=[14400249])
```

**返回示例**

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "pageCount": 1,
        "pageNum": 1,
        "total": 1,
        "size": 100,
        "items": [
            {
                "sceneName": "test_no_randerman_175.hip",
                "id": 14400249,
                "taskAlias": "2W14400249",
                "taskStatus": 25,
                "statusText": "render_task_status_25",
                "preTaskStatus": null,
                "preStatusText": null,
                "totalFrames": 1,
                "abortFrames": 0,
                "executingFrames": 0,
                "doneFrames": 1,
                "failedFrames": 0,
                "framesRange": "/out/geometry110-200[1]",
                "projectName": "analysis_multi_project_empty_placeholder",
                "renderConsume": 0.0,
                "taskArrears": 0.0,
                "submitDate": 1577765849000,
                "startTime": 1577765851000,
                "completedDate": 1577766104000,
                "renderDuration": 13,
                "userName": "ding625yutao",
                "producer": "丁玉涛",
                "taskLevel": 81,
                "taskUserLevel": 0,
                "taskLimit": 1,
                "taskOverTime": 43200,
                "overTimeStop": 86400,
                "userId": 100150764,
                "outputFileName": "14400249_test_no_randerman_175",
                "munuTaskId": "2019123100841",
                "munuTaskIds": "2019123100841",
                "layerParentId": 0,
                "cgId": 2004,
                "userAccountConsume": 0.0,
                "couponConsume": 0.039,
                "qyCouponConsume": null,
                "isOpen": 0,
                "taskType": "GopRender",
                "renderCamera": "",
                "cloneParentId": 0,
                "cloneOriginalId": 0,
                "shareMainCapital": 0,
                "taskRam": 64,
                "respRenderingTaskList": null,
                "layerName": "",
                "taskTypeText": null,
                "locationOutput": "C:/RenderFarm/Download",
                "isDelete": 1,
                "channel": 1,
                "remark": "",
                "labels": "{}",
                "isOverTime": 0,
                "taskKeyValueVo": {
                    "tiles": null,
                    "allCamera": null,
                    "renderableCamera": null
                },
                "waitingCount": null,
                "stopType": 0
            }
        ]
    },
    "serverTime": 1578046630345,
    "requestId": "py6RCN-VGFzay1TZXJ2aWNlMDc-1578046630330"
}
```

## 添加自定义标签

**接口路径**： /api/render/project/add

**请求参数**：

| **参数** | **类型** | 是否必须 | **说明** | **备注**                 |
| -------- | -------- | -------- | -------- | ------------------------ |
| new_name | String   | N        | 标签名   | 名称唯一性               |
| status   | Integer  | N        | 标签状态 | 0:开启，1：关闭，默认为1 |

**返回参数**：缺省

**请求示例**：

```python
task_info = api.tag.add_label(new_name="test_tag4", status=0)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 删除自定义标签

**接口路径: ** /api/render/project/delete

**请求参数**：

| **参数** | **类型** | **说明** | **备注** |
| -------- | -------- | -------- | -------- |
| del_name | String   | label名  |          |

**返回参数**：缺省

**请求示例**：

```python
delete_label_name = api.tag.delete_label(del_name="test_tag2")
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1535957894211
}
```

## 获取项目名

**接口路径:**   /api/render/project/getList

**请求参数**：缺省

**返回参数**：

| **参数**           | **类型**       | **说明** | **备注** |
|--------------------|----------------|----------|----------|
| projectNameList    | List\<Object\> | 项目list |          |
| Object.projectName | String         | 项目名   |          |
| Object.projectId   | Integer        | 项目id   |          |

**请求示例**：缺省

```python
label_list = api.tag.get_label_list()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "projectNameList": [
            {
                "projectId": 3671,
                "projectName": "myLabel"
            }
        ]
    },
    "serverTime": 1546998557770
}
```

## 获取项目名(根据flag控制)

**接口路径:**   /api/render/project/list

**请求参数**：

| 参数 | 类型 | 是否必须 | 说明                                                         | 备注     |
| ---- | ---- | -------- | ------------------------------------------------------------ | -------- |
| flag | int  | 否       | 0:查询本账号下的项目;<br>1:查询本账号下以及主账号下的项目;<br>2:查询相关联所有项目(同一主账号下的所有项目); | 默认为 0 |

**返回参数**：

| **参数**           | **类型**       | **说明** | **备注** |
| ------------------ | -------------- | -------- | -------- |
| projectNameList    | List\<Object\> | 项目list |          |
| Object.projectName | String         | 项目名   |          |
| Object.projectId   | Integer        | 项目id   |          |

**请求示例**：缺省

```python
new_projects = api.tag.get_list(flag=0)
```

**返回示例**：

```
{
    "version": "2.0.0",
    "releaseVersion": "2.5.8/20201215_16_201215(1607)",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "projectNameList": [
            {
                "projectId": 3671,
                "projectName": "myLabel"
            }
        ]
    },
    "serverTime": 1546998557770
}
```

## 添加任务标签

**接口路径:**  /api/render/handle/addTaskLabel

**请求参数**：

| **参数** | **类型**       | 是否必须 | **说明**     | **备注** |
| -------- | -------------- | -------- | ------------ | -------- |
| tag      | string         | Y        | 任务标签     |          |
| task_ids | List\<integer> | Y        | 任务ID列表集 |          |

**返回参数**：缺省

**请求示例**：缺省

```python
tag = api.tag.add_task_tag(tag="test_tag", task_ids=[29445045, 29435295])
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": True,
    "message": "success",
    "code": 200,
    "data": None,
    "serverTime": 1594275174044L
}
```

## 删除任务标签

**接口路径:**  /api/render/handle/deleteTaskLabel

**请求参数**：

| **参数** | **类型**       | 是否必须 | **说明**       | **备注** |
| -------- | -------------- | -------- | -------------- |------|
| tag_ids  | List\<integer> | Y        | 删除任务标签ID | test |

**返回参数**：缺省

**请求示例**：缺省

```python
del_tag = api.tag.delete_task_tag(tag_ids=[21205])
```

**返回示例**：

```python
{
    "version": "1.0.0",
    "result": True,
    "message": "success",
    "code": 200,
    "data": None,
    "serverTime": 1594276011046L
}
```

## 获取支持的渲染软件

**接口路径**： /api/render/plugin/querySoftwareList

**请求参数**：缺省

**返回参数**：

| **参数**       | **类型**         | **说明**           | **备注** |
|----------------|------------------|--------------------|----------|
| isAutoCommit   | Integer          | 是否自动提交       |          |
| renderInfoList | List\<Software\> | 渲染器版本信息集合 |          |
| defaultCgId    | Integer          | 默认渲染器ID       |          |

**Software**

| **参数**          | **类型** | **说明**         | **备注** |
|-------------------|----------|------------------|----------|
| cgId              | Integer  | 渲染软件ID       |          |
| cgName            | String   | 渲染软件名       |          |
| cgType            | String   | 渲染文件后缀支持 |          |
| iconPath          | String   | 渲染软件图标地址 |          |
| isNeedProjectPath | Integer  |                  |          |
| isNeedAnalyse     | Integer  | 是否需要分析     |          |
| isSupportLinux    | Integer  | 是否支持linux    |          |

**请求示例**：

```python
support_software = api.query.supported_software()
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "isAutoCommit": 2,
        "renderInfoList": [
            {
                "cgId": 2000,
                "cgName": "Maya",
                "cgType": "ma;mb",
                "iconPath": "/img/softimage/maya.png",
                "isNeedProjectPath": 1,
                "isNeedAnalyse": 1,
                "isSupportLinux": 1
            },
            {
                "cgId": 2001,
                "cgName": "3ds Max",
                "cgType": "max",
                "iconPath": "/img/softimage/max.png",
                "isNeedProjectPath": 1,
                "isNeedAnalyse": 1,
                "isSupportLinux": 0
            },
            {
                "cgId": 2004,
                "cgName": "Houdini",
                "cgType": "hip;hipnc;hiplc",
                "iconPath": "/img/softimage/houdini.png",
                "isNeedProjectPath": 2,
                "isNeedAnalyse": 1,
                "isSupportLinux": 1
            },
            {
                "cgId": 2005,
                "cgName": "Cinema 4D",
                "cgType": "c4d",
                "iconPath": "/img/softimage/cinema-4D.png",
                "isNeedProjectPath": 1,
                "isNeedAnalyse": 1,
                "isSupportLinux": 0
            },
            {
                "cgId": 2007,
                "cgName": "Blender",
                "cgType": "blend",
                "iconPath": "/img/softimage/blender.png",
                "isNeedProjectPath": 1,
                "isNeedAnalyse": 1,
                "isSupportLinux": 0
            },
            {
                "cgId": 2008,
                "cgName": "VR Standalone",
                "cgType": "vrscene",
                "iconPath": "/img/softimage/VR-standalone.png",
                "isNeedProjectPath": 3,
                "isNeedAnalyse": 2,
                "isSupportLinux": 0
            },
            {
                "cgId": 2013,
                "cgName": "Clarisse",
                "cgType": "project;render",
                "iconPath": "/img/softimage/clarisse.png",
                "isNeedProjectPath": 3,
                "isNeedAnalyse": 1,
                "isSupportLinux": 1
            }
        ],
        "defaultCgId": 2001
    },
    "serverTime": 1578048938715,
    "requestId": "W12mkM-VGFzay1TZXJ2aWNlMDc-1578048938685"
}
```

## 获取支持的渲染软件插件

**接口路径**：  /api/render/plugin/querySoftwareDetail

**请求参数**：

| **参数** | **类型** | 是否必须 | **说明**   | **备注**              |
| -------- | -------- | -------- | ---------- | --------------------- |
| name     | String   | Y        | 渲染软件名 | 参考[DCC软件的ID映射] |

**返回参数**：

| **参数**  | **类型**                | **说明**         | **备注** |
|-----------|-------------------------|------------------|----------|
| cgPlugin  | List\<Plugin\>          | 支持插件集合     |          |
| cgVersion | List\<**SoftVersion**\> | 支持软件版本集合 |          |

**Plugin**：

| **参数**       | **类型**                  | **说明**                           | **备注** |
|----------------|---------------------------|------------------------------------|----------|
| cvId           | Integer                   | 渲染软件版本ID(**SoftVersion.id**) |          |
| pluginName     | String                    |  插件名                            |          |
| pluginVersions | List\<**PluginVersion**\> | 插件版本集合                       |          |

**PluginVersion**：

| **参数**      | **类型** | **说明**    | **备注** |
|---------------|----------|-------------|----------|
| pluginId      | Integer  | 插件版本ID  |          |
| pluginName    | String   |  插件名     |          |
| pluginVersion |  String  |  插件版本   |          |

**SoftVersion**：

| **参数**  | **类型** | **说明**        | **备注** |
|-----------|----------|-----------------|----------|
| id        | Integer  | 渲染软件版本ID  |          |
| cgId      | Integer  |  渲染软件ID     |          |
| cgName    | String   | 渲染软件名      |          |
| cgVersion | String   | 渲染软件版本    |          |

**请求示例**：

```python
support_software_plugin = api.query.supported_plugin(name='maya')
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "isAutoCommit": 2,
        "renderInfoList": [
            {
                "cgId": 2000,
                "cgName": "Maya",
                "cgType": "ma;mb",
                "iconPath": "/img/softimage/maya.png",
                "isNeedProjectPath": 3,
                "isNeedAnalyse": 1,
                "isSupportLinux": 1
            }
        ],
        "defaultCgId": 2001
    },
    "serverTime": 1535973558961
}
```

## 新增用户渲染环境配置

**接口路径**：  /api/render/plugin/addUserPluginConfig

**请求参数**：

| 参数       | 类型 | 是否必须 | 说明         | 备注             |
| ---------- | ---- | -------- | ------------ | ---------------- |
| render_env | Dict | Y        | 渲染环境配置 | 详细参数参考以下 |

**render_env**：

| **参数**        | **类型**        | 是否必须 | **说明**                   | **备注**                   |
| --------------- | --------------- | -------- | -------------------------- | -------------------------- |
| cgId            | Integer         | Y        | 渲染软件ID                 | **SoftVersion.cgId**       |
| cgName          | String          | Y        | 渲染软件名称               | **SoftVersion.cgName**     |
| cgVersion       | String          | Y        | 渲染软件版本               | **SoftVersion.cgVersion**  |
| renderLayerType | Integer         | N        | maya渲染类型               |                            |
| editName        | String          | Y        | 用户设置的渲染环境自定义名 |                            |
| renderSystem    | String          | Y        | 渲染系统                   | 0 linux, 1 windows         |
| pluginIds       | List\<Integer\> | Y        | 渲染插件集合               | **PluginVersion.pluginId** |
| projectPath     | String          | N        | 工程路径                   |                            |

**返回参数**：

| **参数** | **类型** | **说明**                   | **备注** |
| -------- | -------- | -------------------------- | -------- |
| editName | String   | 用户设置的渲染环境自定义名 |          |

**请求示例**：

```python
env = {
    "cgId": 2000,
    "cgName": "Maya",
    "cgVersion": "2020",
    "renderLayerType": 0,
    "editName": "testRenderEnv",
    "renderSystem": "0",
    "pluginIds": [1166]
}
add_user_env = api.env.add_render_env(render_env=env)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
		"editName": "testRenderEnv"
	},
    "serverTime": 1535957894211
}
```

## 更新用户渲染环境配置

**接口路径**： /api/render/plugin/editUserPluginConfig

**请求参数**：

| 参数       | 类型 | 是否必须 | 说明         | 备注             |
| ---------- | ---- | -------- | ------------ | ---------------- |
| render_env | Dict | Y        | 渲染环境配置 | 详细参数参考以下 |

**render_env**：

| **参数**        | **类型**        | 是否必须 | **说明**         | **备注**                         |
| --------------- | --------------- | -------- | ---------------- | -------------------------------- |
| cgId            | Integer         | Y        | 渲染软件ID       | **SoftVersion.cgId**             |
| cgName          | String          | Y        | 渲染软件名称     | **SoftVersion.cgName**           |
| cgVersion       | String          | Y        | 渲染软件版本     | **SoftVersion.cgVersion**        |
| renderLayerType | Integer         | N        | maya渲染类型     |                                  |
| editName        | String          | Y        | 渲染环境自定义名 | 修改是必须传递已经存在的配置名称 |
| renderSystem    | Integer         | Y        | 渲染系统         | 0 linux, 1 windows               |
| pluginIds       | List\<Integer\> | Y        | 渲染插件集合     | **PluginVersion.pluginId**       |
| projectPath     | String          | N        | 工程路径         |                                  |

**返回参数**：缺省

**请求示例**：

```python
update_env = {
    "cgId": 2000,
    "cgName": "Maya",
    "cgVersion": "2020",
    "renderLayerType": 0,
    "editName": "testRenderEnv",
    "renderSystem": "0",
    "pluginIds": []
}
update_user_env = api.env.update_render_env(render_env=update_env)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1536027063801
}
```

## 删除用户渲染环境配置

**接口路径**： /api/render/plugin/deleteUserPluginConfig

**请求参数**：

| **参数**  | **类型** | 是否必须 | **说明**         | **备注** |
| --------- | -------- | -------- | ---------------- | -------- |
| edit_name | String   | Y        | 渲染环境自定义名 |          |

**返回参数**：缺省

**请求示例**：

```python
delete_user_env = api.env.delete_render_env(edit_name="testRenderEnv")
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1536027063801
} 
```

## 设置默认渲染环境配置

**接口路径**： /api/render/plugin/setDefaultUserPluginConfig

**请求参数**：

| **参数**  | **类型** | 是否必须 | **说明**         | **备注** |
| --------- | -------- | -------- | ---------------- | -------- |
| edit_name | String   | Y        | 渲染环境自定义名 |          |

**返回参数**：

**请求示例**：

```python
set_default_user_env = api.env.set_default_render_env(edit_name="testRenderEnv")
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1536027063801
}
```

##  获取用户插件配置

**接口路径**： /api/render/plugin/getUserPluginConfig

**请求参数**：

| **参数** | **类型**      | 是否必须 | **说明**       | **备注**                 |
| -------- | ------------- | -------- | -------------- | ------------------------ |
| name     | String        | N        | 渲染软件名     | cg_names和name必填其一   |
| cg_names | List\<string> | N        | 渲染软件名列表 | cg_names和name必填其一   |
| os_name  | Integer       | N        | 选择操作系统   | 0:Linux，1:windows,默认1 |

**返回参数**：List\<RenderEnv>

| **参数**              | **类型**                  | **说明**         | **备注**                  |
|-----------------------|---------------------------|------------------|---------------------------|
| cgId                  | Integer                   | 渲染软件ID       |                           |
| editName              | String                    | 渲染环境自定义名 |                           |
| cgName                | String                    | 渲染软件名       |                           |
| cgVersion             | String                    | 渲染软件版本     |                           |
| osName                | Integer                   | 渲染环境系统     | 0Linux，1windows          |
| renderLayerType       | Integer                   |                  |                           |
| isDefault             | Integer                   | 是否是默认配置   | 0不是默认配置 1是默认配置 |
| respUserPluginInfoVos | List\<**PluginVersion**\> | 渲染环境插件集合 |                           |

**请求示例**：

```python
user_render_config = api.env.get_render_env(name='houdini')
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": [
        {
            "cgId": 2004,
            "editName": "175",
            "cgName": "Houdini",
            "cgVersion": "17.5",
            "osName": 1,
            "renderLayerType": 0,
            "isDefault": 0,
            "projectPath": "",
            "isMainUserId": 1,
            "respUserPluginInfoVos": [
                {
                    "pluginId": 5304,
                    "pluginName": "renderman",
                    "pluginVersion": "renderman 22.6"
                }
            ]
        },
        {
            "cgId": 2004,
            "editName": "pianwan",
            "cgName": "Houdini",
            "cgVersion": "17.5",
            "osName": 1,
            "renderLayerType": 0,
            "isDefault": 0,
            "projectPath": "",
            "isMainUserId": 1,
            "respUserPluginInfoVos": []
        },
        {
            "cgId": 2004,
            "editName": "houdini_test",
            "cgName": "Houdini",
            "cgVersion": "17.5",
            "osName": 0,
            "renderLayerType": 0,
            "isDefault": 0,
            "projectPath": "",
            "isMainUserId": 1,
            "respUserPluginInfoVos": []
        },
        {
            "cgId": 2004,
            "editName": "16.5",
            "cgName": "Houdini",
            "cgVersion": "16.5",
            "osName": 1,
            "renderLayerType": 0,
            "isDefault": 0,
            "projectPath": "",
            "isMainUserId": 1,
            "respUserPluginInfoVos": []
        }
    ],
    "serverTime": 1578282315348,
    "requestId": "23IhQf-VGFzay1TZXJ2aWNlMDQ-1578282315343"
}
```

## 任务进度图（仅限Max任务）

**接口路径**：  /api/render/handle/loadTaskProcessImg

**请求参数**：

| **参数**   | **类型** | 是否必须 | **说明** | **备注**                                                     |
| ---------- | -------- | -------- | -------- | ------------------------------------------------------------ |
| task_id    | Integer  | Y        | 任务号   |                                                              |
| frame_type | Integer  | N        | 渲染类型 | 帧类型 2:光子帧; 5:主图; 不传 标识自动识别，默认加载正在渲染中的图列表，如正在渲染主图，则加载图列表为主图，正在渲染光子，加载图为光子 |

**返回参数**：

| **参数**        | **类型**               | **说明**           | **备注**                                |
|-----------------|------------------------|--------------------|-----------------------------------------|
|  width          | Integer                | 图片分辨率高度     |                                         |
| height          | Integer                | 图片分辨率宽度     |                                         |
| block           | Integer                | 分块数             |                                         |
| isRenderPhoton  | Boolean                | 是否渲染光子       | true表示任务渲染了光子                  |
| currentTaskType | String                 | 当前任务的渲染状态 | Render: 渲染主图 RenderPhoton: 渲染光子 |
| sceneName       | String                 | 渲染场景名+相机名  |                                         |
| startTime       | String                 | 任务开始时间       |                                         |
| endTime         | String                 | 任务结束时间       |                                         |
| grabInfo        | List\<List\<Object\>\> | 分块帧详情         |                                         |

**分块帧详情**：grabInfo

| **参数**     | **类型** | **说明**             | **备注** |
| ------------ | -------- | -------------------- | -------- |
| startTime    | String   | 开始时间             |          |
| endTime      | String   | 结束时间             |          |
| frameStatus  | String   | 帧状态               |          |
| isMaxPrice   | String   | 是否封顶价           |          |
| feeAmount    | String   | 余额扣费             |          |
| couponFee    | String   | 优惠券扣费           |          |
| frameIndex   | String   | 帧数                 |          |
| frameBlock   | String   | 帧块数               |          |
| framePercent | String   | 帧渲染百分比         |          |
| frameUsed    | String   | 帧渲染已消耗时间     |          |
| frameEst     | String   | 帧渲染预计剩余时间   |          |
| renderInfo   | String   | 帧渲染进度信息       |          |
| grabUrl      | String   | 帧渲染进度图连接地址 |          |

**请求示例**：

```python
task_processing_img = api.query.get_task_processing_img(task_id=14470635, frame_type=2)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "isRenderPhoton": true,
        "completedTime": "2020-01-03 10:02:55",
        "currentTaskType": "RenderPhoton",
        "sceneName": "翻新就沙发.max-Camera001",
        "grabInfo": [
            [
                {
                    "couponFee": "1.04",
                    "frameIndex": "0",
                    "renderInfo": "",
                    "frameBlock": null,
                    "frameEst": "0",
                    "grabUrl": "/mnt/output/d2_1/small_pic/100033000/100033433/14470635/RenderPhoton_2020010200306_0_rayvision0000[-]tga.jpg",
                    "feeAmount": "0.00",
                    "frameUsed": "174",
                    "frameStatus": "4",
                    "framePercent": "100",
                    "isMaxPrice": "0",
                    "startTime": "2020-01-03 09:57:18",
                    "endTime": "2020-01-03 10:00:12"
                }
            ]
        ],
        "width": 700,
        "block": 1,
        "startTime": "2020-01-02 09:35:51",
        "height": 518
    },
    "serverTime": 1578299393862,
    "requestId": "qELLr0-VGFzay1TZXJ2aWNlMDc-1578299393837"
}
```

## 设置任务超时停止时间

**接口地址**： /api/render/handle/setTaskOverTimeStop

**请求参数**：

| **参数**     | **类型**        | **是否必须（Y/N）** | **说明**             |
| ------------ | --------------- | ------------------- | -------------------- |
| task_id_list | List\<Integer\> | Y                   | 任务号               |
| overtime     | Long            | Y                   | 超时停止时间，单位秒 |

**请求参数示例**：

```python
set_task_overtime = api.task.set_task_overtime_top(task_id_list=[14684405], overtime=60)
```

**返回示例**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": "SUCCESS",
    "serverTime": 1578308287155,
    "requestId": "8VNTma-VGFzay1TZXJ2aWNlMDc-1578308286842"
}
```

## 加载缩略图

**接口地址**： /api/render/handle/loadingFrameThumbnail

**请求参数**：

| **参数**     | **类型** | 是否必须 | **说明** | 备注                               |
| ------------ | -------- | -------- | -------- | ---------------------------------- |
| frame_id     | Integer  | Y        | 帧id号   | 可通过<获取任务渲染帧详情接口>获取 |
| frame_status | Integer  | N        | 帧状态   | 默认为4（完成），只有完成有缩略图  |

**请求示例**：

```python
frame_thumbnall = api.query.get_frame_thumbnall(frame_id=230772361)
```

**返回结果**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": [
        "/mnt/output/d2_0/small_pic/100150500/100150764/13652193/2019121801523_10.60.200.102_d_inputdata5_100150500_100150764_D_houdini_CG file_Cam003_render_box_frgbg_render_box_frgbg_render[-]0001[-]exr.jpg"
    ],
    "serverTime": 1578310367990,
    "requestId": "QGyi8q-VGFzay1TZXJ2aWNlMDc-1578310367981"
}
```

## 获取镭速传输信息

**接口地址**： /api/render/transfer/getServerInfo

**请求参数**：缺省

**请求示例**：

```python
transfer_server_msg = api.query.get_transfer_server_msg()
```

**返回参数**：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "clientVersion": "3.2.8.2",
        "protocolVersion": "3.2.8.2",
        "raysyncTransfer": {
            "serverIp": "127.0.0.1",
            "serverPort": 2121,
            "proxyIp": "42.123.110.38",
            "proxyPort": 32001,
            "sslPort": 2443,
            "port": 2442
        }
    },
    "serverTime": 1565678980735,
    "requestId": "YenJW9-1565678980088"
}
```

## 获取镭速验证key

**接口地址**：/api/render/user/getRaySyncUserKey

**请求参数**：缺省

**请求示例**：

```python
raysync_user_key = api.query.get_raysync_user_key()
```

**返回参数**：

```json
{
	"version": "1.0.0",
	"result": true,
	"message": "success",
	"code": 200,
	"data": {
		"channel": 2,
		"platform": 2,
		"signature": "rayvision2017",
		"version": "1.0.0",
		"userKey": "5394a44e890557d8d937b92086482dab",
		"id": 1868599,
		"userName": "wsh_12345",
		"zone": 1,
		"phone": "183160224171",
		"email": "testwangshunhui@rayvision",
		"loginTime": 1565682011157,
		"infoStatus": 0,
		"accountType": 2,
		"shareMainCapital": 0,
		"subDeleteTask": 0,
		"subDeleteCapital": 1,
		"useMainBalance": 0,
		"downloadDisable": 0,
		"raySyncUserKey": "40d59041f72809ffaa16146a36780595666c681e"
	},
	"serverTime": 1565682019430,
	"requestId": "4lkn0I-1565682010026"
}
```

## 全速渲染

**接口地址**： /api/render/handle/fullSpeedRendering

**请求参数**：

| **参数**     | **类型**        | 是否必须 | **说明** |
| ------------ | --------------- | -------- | -------- |
| task_id_list | List\<Integer\> | Y        | 作业id   |

**请求示例**：

```python
full_speed_render = api.task.full_speed(task_id_list=[13652193])
```

返回参数示例：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": "成功",
    "serverTime": 1578311448826,
    "requestId": "X81MN5-VGFzay1TZXJ2aWNlMDQ-1578311448620"
}
```

##  获取传输配置 

**接口地址**：  /api/render/transfer/getConfig

**请求参数**：缺省

**返回参数**：

| **参数**            | **类型** | **说明**                    | **备注** |
| ------------------- | -------- | --------------------------- | -------- |
| inputBid            | String   | Input传输bid                |          |
| outputBid           | String   | output传输bid               |          |
| configBid           | String   | config bid                  |          |
| parentInputBid      | String   | 对应主账号Input传输bid      |          |
| resqEngines         | Object[] | 引擎配置                    |          |
| engineName          | String   | 引擎名                      |          |
| checkServer         | String   | 校验服务器                  |          |
| checkPort           | String   | 校验端口                    |          |
| checkEnable         | String   | 检查是否可用                |          |
| checkExcludType     | String   | 检测例外 文件类型 ,隔开     |          |
| automaticCheck      | number   | 自动检测并切换线路 1是 0:否 |          |
| isDefault           | number   | 默认 1是 0否                |          |
| resqEngineAccounts  | Object[] | aspera账户                  |          |
| bid                 | String   | aspera对应input bid         |          |
| name                | String   | aspera用户名                |          |
| password            | String   | aspera密码                  |          |
| respTaskEngineLines | Object[] | 引擎列表                    |          |
| name                | String   | 线路名                      |          |
| server              | String   | 线路IP                      |          |
| port                | String   | 端口                        |          |
| isDefault           | Number   | 是否默认 1默认              |          |
| lineId              | Number   | 线路表ID                    |          |
| type                | Number   | 线路类型 1.专线 0.通用线路  |          |
| subUserOutputBids   | Object[] | 子账号outputbid集合         |          |
| userId              | String   | 子账号ID                    |          |
| outputBid           | String   | outputBid                   |          |

**请求示例**：

```python
transfer_config = api.transmit.get_transfer_config()
```

返回参数示例：

```json
{
    "version": "1.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": {
        "inputBid": "10202",
        "outputBid": "20202",
        "configBid": "30201",
        "parentInputBid": null,
        "resqEngines": [
            {
                "resqEngineAccounts": [
                    {
                        "bid": "20202",
                        "name": "20202",
                        "password": "xB9CWAML1qd+k1X9prYHheQUAtZ0hcpmJHxe7mfVw9Q="
                    }
                ],
                "respTaskEngineLines": [
                    {
                        "name": "Aspera_main",
                        "server": "10.60.197.79",
                        "port": "10221",
                        "isDefault": 1,
                        "lineId": 123,
                        "type":1
                    }
                ],
                "engineName": "trtt",
                "automaticCheck": 1,
                "checkServer": "677",
                "checkPort": "8888",
                "checkEnable": "1",
                "checkExcludType": "88",
                "isDefault": 0
            },
            {
                "resqEngineAccounts": null,
                "respTaskEngineLines": [
                    {
                        "name": "raysync_main",
                        "server": "10.60.197.79",
                        "port": "10200",
                        "isDefault": 1,
                        "lineId": 121
                    }
                ],
                "engineName": "RaySync",
                "automaticCheck": 0,
                "checkServer": "10.60.196.151",
                "checkPort": "10100",
                "checkEnable": "0",
                "checkExcludType": "tx",
                "isDefault": 1
            },
            {
                "resqEngineAccounts": [
                    {
                        "bid": "30201",
                        "name": "30201",
                        "password": "ACz/0lNMCgyq/7WjR0QGpaXmR0/Xb0//6UaMn/s8QN4="
                    }
                ],
                "respTaskEngineLines": [
                    {
                        "name": "Aspera_main",
                        "server": "10.60.197.79",
                        "port": "10221",
                        "isDefault": 1,
                        "lineId": 123
                    }
                ],
                "engineName": "Aspera",
                "automaticCheck": 0,
                "checkServer": "test2.raysync.cn",
                "checkPort": "8888",
                "checkEnable": "0",
                "checkExcludType": "tx",
                "isDefault": 0
            }
        ],
        "subUserOutputBids": [
            {
                "userId": "119784",
                "outputBid": "10202"
            }
        ]
    },
    "serverTime": 1587380763325,
    "requestId": "K7wW6L-QmV5b25kTGVlZGVNYWNCb29rLVByby5sb2NhbA-1587380762156"
}
```

##  上传任务配置文件 

**接口路径**：  /api/render/submit/taskJsonFile 

**请求参数**：

| **参数**  | **类型** | 是否必须 | **说明** | **备注**        |
| --------- | -------- | -------- | -------- | --------------- |
| task_id   | Integer  | Y        | 任务号   |                 |
| content   | String   | Y        | 文件内容 |                 |
| file_name | String   | N        | 文件名   | 默认“task.json” |

**返回参数**：缺省

**请求示例**：

```Python
start_task = api.task.start_task(task_param_list=[13798105])
```

**返回示例**：

```json
{
    "version": "2.0.0",
    "result": true,
    "message": "success",
    "code": 200,
    "data": null,
    "serverTime": 1589532607599,
    "requestId": null
}
```

##  获取用户存储文件结构 

[^2021/1/18]: Add New Interface

**接口路径**：  /api/render/file/operate/getOutputUserDirFile 

**请求参数**：

| **参数**  | **类型** | 是否必须 | **说明**                                               | **备注**  |
| --------- | -------- | -------- | ------------------------------------------------------ | --------- |
| task_id   | Integer  | N        | 任务号,如果是分层任务则是指的子任务号,即每一层的任务号 |           |
| tree_path | String   | N        | 相对用户存储(output)根的路径                           | 默认为“/” |

**返回参数[data]**：

| 参数       | 类型   | 说明                                            |
| ---------- | ------ | ----------------------------------------------- |
| fileName   | string | 当前文件名或文件夹名                            |
| fileSize   | int    | 文件大小，如果是文件夹则为“null”                |
| iconPath   | string | 图表路径(可忽略此参数)                          |
| lastModify | string | 文件或文件夹更新日期                            |
| fileType   | string | 文件后缀，如果是文件夹则为"null"                |
| filePath   | string | 文件或文件夹相对用户存储output根的相对路径      |
| directory  | bool   | 是否为文件夹, "true":是文件夹，“false”:非文件夹 |
| isArrears  | int    | 是否欠费, 0：未欠费，1：欠费                    |

**请求示例**：

```Python
paths = api.transmit.get_output_files(task_id=1484861)
```

**返回示例**：

```json
[
    {
        "fileName": "1484861_muti_layer_test",
        "fileSize": null,
        "iconPath": null,
        "lastModify": "2021-01-15 12:11:59",
        "fileType": null,
        "filePath": "/1484861_muti_layer_test",
        "directory": true,
        "isArrears": 0
    }
]
```

##  获取任务的所有子任务号 

[^2021/1/18]: Add New Interface

**接口路径**：

**请求参数**：

| **参数** | **类型**          | 是否必须 | **说明**                                                   |
| -------- | ----------------- | -------- | ---------------------------------------------------------- |
| task_id  | Integer or string | Y        | 获取主帐户下的所有子帐户，如果没有子帐户，则返回当前账号ID |



**请求示例**：

```json
ids = api.query.get_small_task_id(task_id=1521323)
```

**返回示例**：

```
[1521325, 1521327, 1521329]
```

##  获取平台硬件配置信息 

[^2021/4/12]: add new interface in rayvision_api 2.8.0 

**接口路径**：/api/render/hardwareConfig/list

**请求参数**：

| **参数** | **类型**  | 是否必须 | **说明**                           |
| -------- | --------- | -------- | ---------------------------------- |
| task_ids | List[str] | N        | 任务号集合，查询指定任务的配置参数 |

**返回参数[data]**：

| 参数           | 类型      | 说明                                                         |
| -------------- | --------- | ------------------------------------------------------------ |
| id             | int       | 硬件配置id（hardwareConfigId）                               |
| type           | int       | 1:CPU;<br>2: GPU                                             |
| model          | string    | 硬件型号, 默认"Default"                                      |
| ram            | String    | 内存                                                         |
| gpuNum         | String    | GPU卡数，CPU平台为"null"                                     |
| platform       | int       | 平台号                                                       |
| current        | bool      | false/ true，当传任务号时，查询的是任务当前的硬件配置        |
| notSupportCgId | list[int] | 不支持的cgId,（cgid对应软件可以查询“常用参数设置”-->"DCC软件ID映射"） |
| status         | int       | 状态<br>1: 启用;<br>0: 禁用                                  |

**请求示例**：

```json
hardware_config = api.user.get_hardware_config(task_ids=["6306543"])
```

**返回示例**：

```json
[
    {
        "id": 301,
        "type": 1,
        "model": "Default",
        "gpuNum": null,
        "ram": "64GB",
        "platform": 2,
        "current": false,
        "notSupportCgId": [],
        "status": 1
    },
    {
        "id": 303,
        "type": 1,
        "model": "Default",
        "gpuNum": null,
        "ram": "128GB",
        "platform": 2,
        "current": false,
        "notSupportCgId": [],
        "status": 1
    },
    {
        "id": 337,
        "type": 1,
        "model": "1080Ti",
        "gpuNum": null,
        "ram": "64GB",
        "platform": 2,
        "current": true,
        "notSupportCgId": [
            2005,
            2000
        ],
        "status": 1
    },
    {
        "id": 339,
        "type": 1,
        "model": "2080Ti",
        "gpuNum": null,
        "ram": "64GB",
        "platform": 2,
        "current": false,
        "notSupportCgId": [],
        "status": 1
    },
    {
        "id": 341,
        "type": 1,
        "model": "1080Ti",
        "gpuNum": null,
        "ram": "128GB",
        "platform": 2,
        "current": false,
        "notSupportCgId": [
            2005
        ],
        "status": 1
    }
]
```

