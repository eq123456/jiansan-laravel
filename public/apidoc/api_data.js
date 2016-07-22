define({ "api": [
  {
    "type": "get",
    "url": "/categories",
    "title": "获取全部分类信息",
    "version": "0.0.1",
    "name": "categories",
    "group": "Category",
    "sampleRequest": [
      {
        "url": "http://www.jiansan.com/api/categories"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>所有数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.alias",
            "description": "<p>分类别名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"获取分类列表成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"大侠\",\n            \"alias\": \"daxia\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"纯阳\",\n            \"alias\": \"chunyang\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"万花\",\n            \"alias\": \"wanhua\"\n        },\n        {\n            \"id\": 4,\n            \"name\": \"藏剑\",\n            \"alias\": \"cangjian\"\n        },\n        {\n            \"id\": 5,\n            \"name\": \"唐门\",\n            \"alias\": \"tangmen\"\n        },\n        {\n            \"id\": 6,\n            \"name\": \"七秀\",\n            \"alias\": \"qixiu\"\n        },\n        {\n            \"id\": 7,\n            \"name\": \"少林\",\n            \"alias\": \"shaolin\"\n        },\n        {\n            \"id\": 8,\n            \"name\": \"五毒\",\n            \"alias\": \"wudu\"\n        },\n        {\n            \"id\": 9,\n            \"name\": \"明教\",\n            \"alias\": \"mingjiao\"\n        },\n        {\n            \"id\": 10,\n            \"name\": \"丐帮\",\n            \"alias\": \"gaibang\"\n        },\n        {\n            \"id\": 11,\n            \"name\": \"苍云\",\n            \"alias\": \"cangyun\"\n        },\n        {\n            \"id\": 12,\n            \"name\": \"长歌\",\n            \"alias\": \"changge\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"status\": \"error\",\n    \"code\": 404,\n    \"message\": \"获取分类列表失败\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/CategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "是否一键设置壁纸",
    "version": "0.0.1",
    "name": "status",
    "group": "Option",
    "sampleRequest": [
      {
        "url": "http://www.jiansan.com/api/status"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>所有数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>配置项名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>配置项内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/OptionController.php",
    "groupTitle": "Option"
  },
  {
    "type": "get",
    "url": "/wallpapers",
    "title": "获取指定分类的壁纸数据",
    "version": "0.0.1",
    "name": "wallpapers",
    "group": "Wallpaper",
    "sampleRequest": [
      {
        "url": "http://www.jiansan.com/api/wallpapers"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>所有数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bigpath",
            "description": "<p>大图路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.smallpath",
            "description": "<p>小图路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/WallpaperController.php",
    "groupTitle": "Wallpaper"
  }
] });
