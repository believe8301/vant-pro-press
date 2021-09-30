const moduleConfig =
    [
        {
            module: 'button', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {
                            param: 'type',
                            info: '按钮类型，可选值为 default | primary | info | warning | danger',
                            type: 'string',
                            default: 'default'
                        },
                        {
                            param: 'size',
                            info: '按钮尺寸，可选值为 normal | large | small | mini',
                            type: 'string',
                            default: 'normal'
                        },
                        {param: 'color', info: '按钮颜色，支持传入linear-gradient渐变色', type: 'string', default: '-'},
                        {param: 'icon', info: '左侧图标名称或图片链接', type: 'string', default: '-'},
                        {
                            param: 'class-prefix',
                            info: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
                            type: 'string',
                            default: 'van-icon'
                        },
                        {param: 'plain', info: '是否为朴素按钮', type: 'boolean', default: '-'},
                        {param: 'block', info: '是否为块级元素', type: 'boolean', default: '-'},
                        {param: 'round', info: '是否为圆形按钮', type: 'boolean', default: '-'},
                        {param: 'square', info: '是否为方形按钮', type: 'boolean', default: '-'},
                        {param: 'disabled', info: '是否禁用按钮', type: 'boolean', default: '-'},
                        {param: 'hairline', info: '是否使用 0.5px 边框', type: 'boolean', default: '-'},
                        {param: 'loading', info: '是否显示为加载状态', type: 'boolean', default: '-'},
                        {
                            param: 'loading-type',
                            info: '加载状态图标类型，可选值为 circular | spinner',
                            type: 'string',
                            default: 'circular'
                        },
                        {param: 'loading-text', info: '加载状态提示文字', type: 'string', default: '-'},
                        {param: 'loading-size', info: '加载状态提示文字', type: 'string', default: '20rpx'},
                        {param: 'custom-style', info: '自定义样式', type: 'object', default: '-'},
                        {
                            param: 'form-type',
                            info: '用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件',
                            type: 'string',
                            default: '-'
                        }
                    ]
                }
            ]
        },
        {
            module: 'cell', content: [
                {
                    title: 'van-cell-group Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'title', info: '左侧标题', type: 'string', default: '-'},
                        {param: 'border', info: '是否显示外边框', type: 'boolean', default: '-'},
                        {param: 'inset', info: '是否展示为卡片风格', type: 'boolean', default: '-'}
                    ]
                },
                {
                    title: 'van-cell Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'title', info: '左侧标题', type: 'string | number', default: '-'},
                        {param: 'value', info: '右侧内容', type: 'string | number', default: '-'},
                        {param: 'icon', info: '左侧图标名称或图片链接，可选值见 Icon 组件', type: 'string', default: '-'},
                        {param: 'size', info: '单元格大小，可选值为 large', type: 'string', default: '-'},
                        {param: 'label', info: '标题下方的描述信息', type: 'string', default: '-'},
                        {param: 'center', info: '是否使内容垂直居中', type: 'boolean', default: '-'},
                        {param: 'is-link', info: '是否展示右侧箭头并开启点击反馈', type: 'boolean', default: '-'},
                        {param: 'required', info: '是否显示表单必填星号', type: 'boolean', default: '-'},
                        {param: 'clickable', info: '是否开启点击反馈', type: 'boolean', default: '-'},
                        {param: 'title-width', info: '标题宽度', type: 'string | number', default: '-'},
                        {param: 'custom-style', info: '自定义样式', type: 'string', default: '-'},
                        {
                            param: 'arrow-direction',
                            info: '箭头方向，可选值为 right | left | up | down',
                            type: 'string',
                            default: 'right'
                        },
                        {param: 'use-label-slot', info: '是否使用 label slot', type: 'boolean', default: '-'},
                        {param: 'border', info: '是否显示下边框', type: 'boolean', default: '-'},
                        {param: 'url', info: '点击后跳转的链接地址', type: 'boolean', default: '-'},
                        {
                            param: 'link-type',
                            info: '链接跳转类型，可选值为 navigateTo | redirectTo | switchTab | reLaunch',
                            type: 'boolean',
                            default: 'navigateTo'
                        },
                    ]
                },
                {
                    title: 'van-cell Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: '@click', info: '点击单元格时触发', default: '-'}
                    ]
                },
            ]
        },
        {
            module: 'icon', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'name', info: '图标名字', type: 'string', default: '-'},
                        {param: 'color', info: '图标颜色', type: 'string', default: '-'},
                        {param: 'class-prefix', info: '图标前缀', type: 'string', default: 'van-icon'},
                        {param: 'size', info: '图标大小', type: 'string | number', default: '-'},
                        {param: 'dot', info: '是否显示小红点', type: 'boolean', default: '-'},
                        {param: 'info', info: '徽标内容', type: 'null', default: '-'}
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: '@click', info: '点击图标时触发', default: '-'}
                    ]
                },
            ]
        },
        {
            module: 'image', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'src', info: '图片路径', type: 'string', default: '-'},
                        {param: 'width', info: '宽度 单位rpx', type: 'string | number', default: '-'},
                        {param: 'height', info: '高度 单位rpx', type: 'string | number', default: '-'},
                        {
                            param: 'fit',
                            info: '图片填充模式， widthFix | heightFix等，详情参考 uni-app image 的 mode 属性',
                            type: 'string',
                            default: 'scaleToFill'
                        },
                        {param: 'round', info: '是否显示为圆形', type: 'boolean', default: '-'},
                        {param: 'radius', info: '圆角大小 单位rpx', type: 'string | number', default: '-'},
                        {param: 'lazy-load', info: '是否懒加载', type: 'boolean', default: '-'},
                        {param: 'show-error', info: '是否自定义失败提示', type: 'boolean', default: '-'},
                        {param: 'use-error-slot', info: '是否展示图片加载失败的提示', type: 'boolean', default: '-'},
                        {param: 'show-loading', info: '是否展示图片加载中的提示', type: 'boolean', default: '-'},
                        {param: 'use-loading-slot', info: '是否自定义加载中提示', type: 'boolean', default: '-'},
                        {param: 'show-menu-by-longpress', info: '是否开启长按图片显示识别小程序码菜单', type: 'boolean', default: '-'},
                        {param: 'info', info: '徽标内容', type: 'null', default: '-'}
                    ]
                },
                {
                    title: 'Slots',
                    columns: [
                        {
                            width: 200,
                            title: '名称',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {param: 'loading', info: '自定义加载中的提示内容'},
                        {param: 'error', info: '自定义错误的提示内容'}
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: '@click', info: '点击图片时触发', default: 'event.detail'},
                        {param: '@load', info: '图片加载完毕时触发', default: 'event.detail'},
                        {param: '@error', info: '图片加载失败时触发', default: 'event.detail'}
                    ]
                },
            ]
        },
        {
            module: 'layout', content: [
                {
                    title: 'van-row Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'gutter', info: '列元素之间的间距（单位为 rpx）', type: 'string | number', default: '-'}
                       ]
                },
                {
                    title: 'van-col Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'offset', info: '列元素偏移距离', type: 'string | number', default: '-'},
                        {param: 'span', info: '列元素宽度', type: 'string | number', default: '-'},
                    ]
                }
            ]
        },
        {
            module: 'popup', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model/value', info: '是否显示弹出层', type: 'boolean', default: 'false'},
                        {param: 'overlay', info: '是否显示遮罩层', type: 'boolean', default: 'true'},
                        {param: 'position', info: '弹出位置，可选值为 top bottom right left', type: 'string', default: 'center'},
                        {param: 'overlay-style', info: '自定义遮罩样式', type: 'object', default: '-'},
                        {param: 'custom-style', info: '自定义内容样式', type: 'object', default: '选择日期'},
                        {param: 'transition', info: '动画类名，等价于 transtion 的name属性', type: 'string', default: '-'},
                        {param: 'z-index', info: '层级', type: 'Number', default: '100'},
                        {
                            param: 'close-icon-position',
                            info: '关闭图标位置，可选值为top-left bottom-left bottom-right',
                            type: 'string',
                            default: 'top-right'
                        },
                        {param: 'close-on-click-overlay', info: '是否在点击遮罩层后关闭', type: 'boolean', default: 'true'},
                        {param: 'safe-area-inset-bottom', info: '是否开启底部安全区适配', type: 'boolean', default: 'true'}
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件名',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 300,
                            title: '回调参数',
                            dataIndex: 'callback',
                        }
                    ],
                    list: [
                        {name: 'close', info: '关闭弹出层时触发', callback: '-'},
                        {name: 'close-overlay', info: '点击遮罩层时触发', callback: '-'},
                    ]
                },
            ]
        },
        {
            module: 'toast', content: [
                {
                    title: 'API',
                    columns: [
                        {
                            width: 200,
                            title: '方法名',
                            dataIndex: 'name',
                        },
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 200,
                            title: '返回值',
                            dataIndex: 'res',
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {name: 'Toast', param: 'options | message', res: 'toast 实例', info: '显示提示'},
                        {name: 'Toast.loading', param: 'options | message', res: 'toast 实例', info: '显示加载提示'},
                        {name: 'Toast.success', param: 'options | message', res: 'toast 实例', info: '显示成功提示'},
                        {name: 'Toast.fail', param: 'options | message', res: 'toast 实例', info: '显示失败提示'},
                        {name: 'Toast.clear', param: '-', res: 'void', info: '关闭提示'},
                        {name: 'Toast.setDefaultOptions', param: 'options', res: 'void', info: '修改默认配置'},
                        {name: 'Toast.resetDefaultOptions', param: '-', res: 'void', info: '重置默认配置'},
                    ]
                },
                {
                    title: 'Options',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'type', info: '提示类型，可选值为 loading success fail text', type: 'string', default: 'text'},
                        {param: 'position', info: '位置，可选值为 top middle bottom', type: 'string', default: 'middle'},
                        {param: 'loadingType', info: '加载图标类型, 可选值为 spinner circular', type: 'string', default: 'circular'},
                        {param: 'forbid-click', info: '是否禁止背景点击', type: 'boolean', default: 'false'},
                        {param: 'message', info: '提示内容', type: 'string', default: '-'},
                        {param: 'z-index', info: '层级', type: 'number', default: '1000'},
                        {param: 'mask', info: '是否显示遮罩层', type: 'boolean', default: 'false'},
                        {param: 'context', info: '选择器的选择范围，可以传入自定义组件的 this 作为上下文', type: 'object', default: '当前页面'},
                        {param: 'onClose', info: '关闭时的回调函数', type: 'Function', default: '-'}

                    ]
                },
                {
                    title: 'Slots',
                    columns: [
                        {
                            width: 200,
                            title: '名称',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {param: '-', info: '自定义内容'}
                    ]
                },
            ]
        },
        {
            module: 'transition', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model/value', info: '是否显示组件', type: 'boolean', default: 'true'},
                        {param: 'duration', info: '动画时长，单位毫秒', type: 'number', default: '300'},
                        {param: 'name', info: '动画名称 fade（淡入） | slide-up（上滑进入） | slide-down（下滑进入） | slide-left（左滑进入） | slide-right（右滑进入） | fade-up（上滑淡入） | fade-down（下滑淡入） | fade-left（左滑淡入） | fade-right（右滑淡入）', type: 'string', default: 'fade'},
                        {param: 'custom-style', info: '自定义样式', type: 'object', default: '{}'}
                    ]
                },
                {
                    title: 'Slots',
                    columns: [
                        {
                            width: 200,
                            title: '名称',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {param: '-', info: '自定义内容'}
                    ]
                },
                {
                    title: 'API',
                    columns: [
                        {
                            width: 200,
                            title: '方法名',
                            dataIndex: 'name',
                        },
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {name: '@before-enter', param: '-', info: '组件加载前'},
                        {name: '@enter', param: '-', info: '组件加载时'},
                        {name: '@after-enter', param: '-', info: '组件加载完成后'},
                        {name: '@before-leave', param: '-', info: '离开组件前'},
                        {name: '@leave', param: '-', info: '离开组件时'},
                        {name: '@after-leave', param: '-', info: '离开组件后'},
                    ]
                },
            ]
        },
        {
            module: 'calendar', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model/value', info: '是否显示日历弹窗', type: 'boolean', default: 'false'},
                        {param: 'type', info: '日期类型：single 单选、multiple 多选、range 区间', type: 'string', default: 'single'},
                        {param: 'round', info: '是否显示圆角弹窗', type: 'boolean', default: 'false'},
                        {param: 'first-day-of-week', info: '设置周起始日', type: '0-6', default: '0'},
                        {param: 'header-title', info: '日历标题', type: 'string', default: '选择日期'},
                        {param: 'button-text', info: '确认按钮的文字', type: 'string', default: '确定'},
                        {param: 'button-all-style', info: '自定义按钮样式', type: 'string', default: '-'},
                        {param: 'show-confirm', info: '是否展示确认按钮', type: 'boolean', default: '确定'},
                        {param: 'formatter', info: '日期格式化函数', type: '(day: Day) => Day', default: '-'},
                        {param: 'safe-area-inset-bottom', info: '是否开启底部安全区适配', type: 'boolean', default: 'true'},
                        {param: 'color', info: '主题色，对底部按钮和选中日期生效', type: 'string', default: '#ee0a24'},
                        {
                            param: 'max-range',
                            info: '可选日期的最大跨度（只在type是range时有效）',
                            type: '[Number, String]',
                            default: '-'
                        },
                        {
                            param: 'min-date',
                            info: '可选择的最小日期，日期间隔符为/ 示例：new Date(\'2020/01/01\')',
                            type: 'Date',
                            default: '当前日期'
                        },
                        {
                            param: 'max-date',
                            info: '可选择的最大日期，日期间隔符为/ 示例：new Date(\'2020/01/01\')',
                            type: 'Date',
                            default: '当前日期的六个月后'
                        },
                        {
                            param: 'default-date',
                            info: '默认选中的日期，type 为 multiple 或 range 时为数组，传入 null 表示默认不选择',
                            type: 'Date | Date[] | null',
                            default: '今天'
                        },
                        {
                            param: 'allow-same-day',
                            info: '是否允许开始日期和结束日期是同一天（只在type是range时有效）',
                            type: 'Boolean',
                            default: 'false'
                        },
                        {
                            param: 'show-range-prompt',
                            info: '当选择范围超过跨度时是否弹出提示(只在type是range时有效)',
                            type: '[Number, String]',
                            default: 'true'
                        }
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件名',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 300,
                            title: '回调参数',
                            dataIndex: 'callback',
                        }
                    ],
                    list: [
                        {name: 'confirm', info: '点击并选中任意日期时触发', callback: 'value: Date | Date[]'},
                        {name: 'close', info: '关闭弹出层时触发/遮罩/右上角关闭icon', callback: '-'},
                    ]
                },
            ]
        },
        {
            module: 'overlay', content: [
                {
                    title: 'Props',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model/value', info: '是否展示遮罩层', type: 'boolean', default: 'false'},
                        {param: 'z-index', info: 'z-index 层级', type: 'number', default: '1'},
                        {param: 'duration', info: '动画时长，单位秒', type: 'number', default: '300'},
                        {param: 'custom-style', info: '自定义样式', type: 'Object', default: '-'}
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件名',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 300,
                            title: '回调参数',
                            dataIndex: 'callback',
                        }
                    ],
                    list: [
                        {name: 'click', info: '点击时触发', callback: 'event: Event'}
                    ]
                },
            ]
        }
    ]

export function getApiListModule(pageModule) {
    return moduleConfig.filter(item => item.module === pageModule)[0].content;
}