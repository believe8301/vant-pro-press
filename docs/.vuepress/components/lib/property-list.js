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
                        {param: 'click', info: '点击单元格时触发', default: '-'}
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
                        {param: 'click', info: '点击图标时触发', default: '-'}
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
                        {param: 'click', info: '点击图片时触发', default: 'event: event.detail'},
                        {param: 'load', info: '图片加载完毕时触发', default: 'event: event.detail'},
                        {param: 'error', info: '图片加载失败时触发', default: 'event: event.detail'}
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
                        {
                            param: 'loadingType',
                            info: '加载图标类型, 可选值为 spinner circular',
                            type: 'string',
                            default: 'circular'
                        },
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
                        {
                            param: 'name',
                            info: '动画名称 fade（淡入） | slide-up（上滑进入） | slide-down（下滑进入） | slide-left（左滑进入） | slide-right（右滑进入） | fade-up（上滑淡入） | fade-down（下滑淡入） | fade-left（左滑淡入） | fade-right（右滑淡入）',
                            type: 'string',
                            default: 'fade'
                        },
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
                        {name: 'before-enter', callback: '-', info: '组件加载前'},
                        {name: 'enter', callback: '-', info: '组件加载时'},
                        {name: 'after-enter', callback: '-', info: '组件加载完成后'},
                        {name: 'before-leave', callback: '-', info: '离开组件前'},
                        {name: 'leave', callback: '-', info: '离开组件时'},
                        {name: 'after-leave', callback: '-', info: '离开组件后'},
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
            module: 'checkbox', content: [
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
                        {param: 'v-model/value', info: '所有选中项的 name', type: 'array', default: '[]'},
                        {param: 'max', info: '最大可选数', type: 'number', default: '-'},
                        {param: 'disabled', info: '是否禁用所有单选框', type: 'boolean', default: 'false'},
                        {
                            param: 'direction',
                            info: '排列方向，可选值为 vertical | horizontal',
                            type: 'string',
                            default: 'vertical'
                        }
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
                        {param: 'v-model/value', info: '是否选中', type: 'boolean', default: '-'},
                        {param: 'name', info: '标识 Checkbox 名称', type: 'string', default: '-'},
                        {param: 'disabled', info: '是否禁用', type: 'boolean', default: 'false'},
                        {param: 'use-icon-slot', info: '是否使用 icon slot', type: 'boolean', default: '-'},
                        {param: 'checked-color', info: '选中状态颜色', type: 'string', default: '-'},
                        {param: 'label-position', info: '文本位置，可选值为 right | left', type: 'string', default: 'right'},
                        {param: 'label-disabled', info: '是否禁用单选框内容点击', type: 'boolean', default: '-'},
                        {param: 'shape', info: '形状，可选值为 round | square', type: 'string', default: 'round'},
                        {param: 'icon-size', info: 'icon 大小，单位 rpx', type: 'string | number', default: '30'}
                    ]
                },
                {
                    title: 'van-cell-group Events',
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
                        {name: 'change', info: '当绑定值变化时触发的事件', callback: 'value: value'}
                    ]
                },
                {
                    title: 'van-cell Events',
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
                        {name: 'change', info: '当绑定值变化时触发的事件', callback: 'value: value'}
                    ]
                },
                {
                    title: 'van-cell Slots',
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
                        {param: 'icon', info: '自定义图标'},
                        {param: '-', info: '自定义内容'}
                    ]
                },
            ]
        },
        {
            module: 'datetime-picker', content: [
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
                        {param: 'v-model/value', info: '当前选中值', type: 'string | number', default: '-'},
                        {param: 'show-toolbar', info: '是否显示顶部栏', type: 'boolean', default: 'true'},
                        {param: 'type', info: '类型，可选值为 datetime | date | time | year-month不建议动态修改', type: 'string', default: 'datetime'},
                        {param: 'filter', info: '选项过滤函数', type: '(type, values) => values', default: 'null'},
                        {param: 'formatter', info: '选项格式化函数', type: '(type, values) => values', default: 'defaultFormatter'},
                        {param: 'min-date', info: '可选的最小时间，精确到分钟', type: 'number', default: '-'},
                        {param: 'max-date', info: '可选的最大时间，精确到分钟', type: 'number', default: '-'},
                        {param: 'min-hour', info: '可选的最小小时，针对 time 类型', type: 'number', default: '-'},
                        {param: 'max-hour', info: '可选的最大小时，针对 time 类型', type: 'number', default: '-'},
                        {param: 'min-minute', info: '可选的最小分钟，针对 time 类型', type: 'number', default: '-'},
                        {param: 'max-minute', info: '可选的最大分钟，针对 time 类型', type: 'number', default: '-'},
                        {param: 'item-height', info: '选项高度', type: 'number', default: '88'},
                        {param: 'loading', info: '是否显示加载状态', type: 'boolean', default: '-'},
                        {param: 'confirm-button-text', info: '确认按钮文字', type: 'string', default: '确认'},
                        {param: 'cancel-button-text', info: '取消按钮文字', type: 'string', default: '取消'},
                        {param: 'visible-item-count', info: '可见选项个数', type: 'number', default: '6'}
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
                        {name: 'confirm', info: '点击完成按钮时触发', callback: 'value: value'},
                        {name: 'cancel', info: '点击取消按钮时触发', callback: 'value: value'},
                        {name: 'change', info: '选项改变时触发', callback: 'value: value'},
                    ]
                }
            ]
        },
        {
            module: 'field', content: [
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
                        {param: 'v-model/value', info: '当前输入的值', type: 'string', default: '-'},
                        {param: 'label', info: '输入框左侧文本', type: 'string', default: '-'},
                        {param: 'size', info: '单元格大小，可选值为 large', type: 'string', default: '-'},
                        {param: 'type', info: '可设置为任意原生类型, 如 number | idcard | textarea | digit', type: 'string', default: 'text'},
                        {param: 'fixed', info: '如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true', type: 'boolean', default: '-'},
                        {param: 'focus', info: '获取焦点', type: 'boolean', default: '-'},
                        {param: 'border', info: '是否显示内边框', type: 'boolean', default: 'true'},
                        {param: 'disabled', info: '是否禁用输入框', type: 'boolean', default: '-'},
                        {param: 'readonly', info: '是否只读', type: 'boolean', default: '-'},
                        {param: 'clickable', info: '是否开启点击反馈', type: 'boolean', default: '-'},
                        {param: 'clearable', info: '是否启用清除控件', type: 'boolean', default: '-'},
                        {param: 'required', info: '是否显示表单必填星号', type: 'boolean', default: '-'},
                        {param: 'center', info: '是否使内容垂直居中', type: 'boolean', default: '-'},
                        {param: 'password', info: '是否是密码类型', type: 'boolean', default: '-'},
                        {param: 'title-width', info: '标题宽度，单位 rpx', type: 'string | number', default: '180'},
                        {param: 'maxlength', info: '最大输入长度，设置为 -1 的时候不限制最大长度', type: 'number', default: '-1'},
                        {param: 'placeholder', info: '输入框为空时占位符', type: 'string', default: '-'},
                        {param: 'placeholder-style', info: '指定 placeholder 的样式', type: 'string', default: '-'},
                        {param: 'custom-style ', info: '自定义样式', type: 'string', default: '-'},
                        {param: 'is-link', info: '是否展示右侧箭头并开启点击反馈', type: 'boolean', default: '-'},
                        {param: 'arrow-direction', info: '箭头方向，可选值为 right | left | up | down', type: 'string', default: 'right'},
                        {param: 'show-word-limit', info: '是否显示字数统计，需要设置 maxlength 属性', type: 'boolean', default: 'false'},
                        {param: 'error', info: '是否将输入内容标红', type: 'boolean', default: '-'},
                        {param: 'error-message', info: '底部错误提示文案，为空时不展示', type: 'string', default: '-'},
                        {param: 'error-message-align', info: '底部错误提示文案对齐方式，可选值为 left | center | right', type: 'string', default: '-'},
                        {param: 'input-align', info: '输入框内容对齐方式，可选值为 left | center | right', type: 'string', default: '-'},
                        {param: 'autosize', info: '否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为rpx', type: 'object', default: '-'},
                        {param: 'left-icon', info: '左侧图标名称或图片链接，可选值见 Icon 组件', type: 'string', default: '-'},
                        {param: 'right-icon', info: '右侧图标名称或图片链接，可选值见 Icon 组件', type: 'string', default: '-'},
                        {param: 'confirm-type', info: "设置键盘右下角按钮的文字，仅在 type='text' 时生效", type: 'string', default: '-'},
                        {param: 'confirm-hold', info: "点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效", type: 'boolean', default: '-'},
                        {param: 'hold-keyboard', info: "focus 时，点击页面的时候不收起键盘", type: 'boolean', default: '-'},
                        {param: 'cursor-spacing', info: "输入框聚焦时底部与键盘的距离", type: 'number', default: '-'},
                        {param: 'adjust-position', info: "键盘弹起时，是否自动上推页面", type: 'boolean', default: 'true'},
                        {param: 'show-confirm-bar', info: '是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效', type: 'boolean', default: 'true'},
                        {param: 'selection-start', info: '光标起始位置，自动聚集时有效，需与 selection-end 搭配使用', type: 'number', default: '-1'},
                        {param: 'selection-end', info: '光标结束位置，自动聚集时有效，需与 selection-start 搭配使用', type: 'number', default: '-1'},
                        {param: 'auto-focus', info: '自动聚焦，拉起键盘', type: 'boolean', default: '-'},
                        {param: 'disable-default-padding', info: '是否去掉 iOS 下的默认内边距，只对 textarea 有效', type: 'boolean', default: 'true'},
                        {param: 'cursor', info: '指定 focus 时的光标位置', type: 'number', default: '-1'},
                        {param: 'clear-trigger', info: '显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示', type: 'string', default: 'focus'}
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
                        {name: 'input', info: '输入内容时触发', callback: 'event: 当前输入值'},
                        {name: 'change', info: '输入内容时触发', callback: 'event: 当前输入值'},
                        {name: 'confirm', info: '点击完成按钮时触发', callback: 'event: 当前输入值'},
                        {name: 'click-icon', info: '点击尾部图标时触发', callback: '-'},
                        {name: 'focus', info: '输入框聚焦时触发', callback: 'event: event'},
                        {name: 'blur', info: '输入框失焦时触发', callback: 'event: event'},
                        {name: 'clear', info: '点击清空控件时触发', callback: '-'},
                        {name: 'click-input', info: '点击输入区域时触发', callback: '-'},
                        {name: 'linechange', info: '输入框行数变化时调用，只对 textarea 有效', callback: '-'},
                        {name: 'keyboardheightchange', info: '键盘高度发生变化的时候触发此事件', callback: '-'},
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
                        {param: 'label', info: '自定义输入框标签，如果设置了label属性则不生效'},
                        {param: 'left-icon', info: '自定义输入框头部图标'},
                        {param: 'right-icon', info: '自定义输入框尾部图标'},
                        {param: 'button', info: '自定义输入框尾部按钮'},
                        {param: 'input', info: '自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效'},
                    ]
                },
            ]
        },
        {
            module: 'picker', content: [
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
                        {param: 'columns', info: '对象数组，配置每一列显示的数据', type: 'array', default: '[]'},
                        {param: 'show-toolbar', info: '是否显示顶部栏', type: 'boolean', default: '-'},
                        {param: 'toolbar-position', info: '顶部栏位置，可选值为top | bottom', type: 'string', default: 'top'},
                        {param: 'title', info: '顶部栏标题', type: 'string', default: '-'},
                        {param: 'loading', info: '是否显示加载状态', type: 'boolean', default: '-'},
                        {param: 'value-key', info: '选项对象中，文字对应的 key', type: 'string', default: 'text'},
                        {param: 'item-height', info: '选项高度', type: 'number', default: '88'},
                        {param: 'confirm-button-text', info: '确认按钮文字', type: 'string', default: '确认'},
                        {param: 'cancel-button-text', info: '取消按钮文字', type: 'string', default: '取消'},
                        {param: 'visible-item-count', info: '可见选项个数', type: 'number', default: '6'},
                        {param: 'default-index', info: '单列选择器的默认选中项索引', type: 'number', default: '-'}
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
                        {name: 'confirm', info: '点击完成按钮时触发', callback: 'event: Event'},
                        {name: 'cancel', info: '点击取消按钮时触发', callback: 'event: Event'},
                        {name: 'change', info: '选项改变时触发', callback: 'event: Event'},
                    ]
                },
            ]
        },
        {
            module: 'radio', content: [
                {
                    title: 'van-radio-group Props',
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
                        {param: 'value/v-model', info: '当前选中项的标识符', type: '-', default: '-'},
                        {param: 'disabled', info: '是否禁用所有单选框', type: 'boolean', default: '-'},
                        {param: 'direction', info: '排列方向，可选值为 vertical | horizontal', type: 'string', default: '-'}
                    ]
                },
                {
                    title: 'van-radio Props',
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
                        {param: 'value/v-model', info: '是否选中', type: '-', default: '-'},
                        {param: 'name', info: '标识符', type: 'string', default: '-'},
                        {param: 'disabled', info: '是否禁用', type: 'boolean', default: '-'},
                        {param: 'use-icon-slot', info: '是否使用 icon slot', type: 'boolean', default: '-'},
                        {param: 'checked-color', info: '选中状态颜色', type: 'string', default: '-'},
                        {param: 'label-position', info: '文本位置，可选值为 right | left', type: 'string', default: 'right'},
                        {param: 'label-disabled', info: '是否禁用单选框内容点击', type: 'boolean', default: '-'},
                        {param: 'shape', info: '形状，可选值为 round | square', type: 'string', default: 'round'},
                        {param: 'icon-size', info: 'icon 大小，单位 rpx', type: 'string | number', default: '30'}
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
                        {name: 'change', info: '当绑定值变化时触发的事件', callback: 'value: value'}
                    ]
                },
            ]
        },
        {
            module: 'rate', content: [
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
                        {param: 'value/v-model', info: '当前分值', type: 'number', default: '-'},
                        {param: 'count', info: '图标总数', type: 'number', default: '5'},
                        {param: 'size', info: '图标大小，默认单位为 rpx', type: 'string | number', default: '-'},
                        {param: 'gutter', info: '图标间距，默认单位为 rpx', type: 'string | number', default: '-'},
                        {param: 'color', info: '选中时的颜色', type: 'string', default: '-'},
                        {param: 'void-color', info: '未选中时的颜色', type: 'string', default: '-'},
                        {param: 'icon', info: '选中时的图标名称或图片链接，可选值见 Icon 组件', type: 'string', default: 'star'},
                        {param: 'void-icon', info: '未选中时的图标名称或图片链接，可选值见 Icon 组件', type: 'string', default: 'star-o'},
                        {param: 'allow-half', info: '是否允许半选', type: 'boolean', default: '-'},
                        {param: 'readonly', info: '是否为只读状态', type: 'boolean', default: '-'},
                        {param: 'disabled', info: '是否禁用评分', type: 'boolean', default: '-'},
                        {param: 'disabled-color', info: '禁用时颜色', type: 'string', default: '-'},
                        {param: 'touchable', info: '是否可以通过滑动手势选择评分', type: 'string', default: 'true'},
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
                        {name: 'change', info: '当前分值变化时触发的事件', callback: 'value: value'}
                    ]
                },
            ]
        },
        {
            module: 'search', content: [
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
                        {param: 'value/v-model', info: '当前输入的值', type: 'string | number', default: '-'},
                        {param: 'label', info: '搜索框左侧文本', type: 'string', default: '-'},
                        {param: 'shape', info: '形状，可选值为 square | round', type: 'string', default: 'square'},
                        {param: 'background', info: '搜索框背景色', type: 'string', default: '#ffffff'},
                        {param: 'show-action', info: '是否在搜索框右侧显示取消按钮', type: 'boolean', default: '-'},
                        {param: 'action-text', info: '取消按钮文字', type: 'string', default: '取消'},
                        {param: 'focus', info: '获取焦点', type: 'boolean', default: '-'},
                        {param: 'error', info: '是否将输入内容标红', type: 'boolean', default: '-'},
                        {param: 'disabled', info: '是否禁用输入框', type: 'boolean', default: '-'},
                        {param: 'readonly', info: '是否为只读状态', type: 'boolean', default: '-'},
                        {param: 'clearable', info: '是否启用清除控件', type: 'boolean', default: 'true'},
                        {param: 'clear-trigger', info: '显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示', type: 'string', default: 'focus'},
                        {param: 'clear-icon', info: '清除图标名称或图片链接', type: 'string', default: 'clear'},
                        {param: 'maxlength', info: '最大输入长度，设置为 -1 的时候不限制最大长度', type: 'number', default: '-1'},
                        {param: 'use-action-slot', info: '是否使用 action slot', type: 'boolean', default: '-'},
                        {param: 'placeholder', info: '输入框为空时占位符', type: 'string', default: '-'},
                        {param: 'placeholder-style', info: '指定占位符的样式', type: 'string', default: '-'},
                        {param: 'input-align', info: '输入框内容对齐方式，可选值为 left | center | right', type: 'string', default: 'left'},
                        {param: 'use-left-icon-slot', info: '是否使用输入框左侧图标 slot', type: 'boolean', default: '-'},
                        {param: 'use-right-icon-slot', info: '是否使用输入框右侧图标 slot', type: 'boolean', default: '-'},
                        {param: 'left-icon', info: '输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-left-icon-slot，则该属性无效）', type: 'string', default: 'search'},
                        {param: 'right-icon', info: '输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-right-icon-slot，则该属性无效）', type: 'string', default: '-'},
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
                        {param: 'action', info: '自定义搜索框右侧按钮，需要在use-action-slot为 true 时才会显示'},
                        {param: 'label', info: '自定义搜索框左侧文本'},
                        {param: 'left-icon', info: '自定义输入框左侧图标，需要在use-left-icon-slot为 true 时才会显示'},
                        {param: 'right-icon', info: '自定义输入框右侧图标，需要在use-right-icon-slot为 true 时才会显示'},
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
                        {name: 'change', info: '当绑定值变化时触发的事件', callback: 'value: value'}
                    ]
                },
            ]
        },
        {
            module: 'slider', content: [
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
                        {param: 'value/v-model', info: '当前进度百分比，在双滑块模式下为数组格式', type: 'number | array', default: '0'},
                        {param: 'disabled', info: '是否禁用滑块', type: 'boolean', default: '-'},
                        {param: 'max', info: '最大值', type: 'number', default: '100'},
                        {param: 'min', info: '最小值', type: 'number', default: '0'},
                        {param: 'step', info: '步长', type: 'number', default: '1'},
                        {param: 'bar-height', info: '进度条高度，默认单位为 rpx', type: 'string | number', default: '-'},
                        {param: 'active-color', info: '进度条激活态颜色', type: 'string', default: '-'},
                        {param: 'inactive-color', info: '进度条默认颜色', type: 'string', default: '-'},
                        {param: 'use-button-slot', info: '是否使用按钮插槽', type: 'boolean', default: '-'},
                        {param: 'range', info: '是否开启双滑块模式', type: 'boolean', default: '-'}
                    ]
                },
                {
                    title: 'Slots',
                    columns: [
                        {
                            width: 200,
                            title: '名称',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {name: 'button', info: '自定义滑块按钮'},
                        {name: 'left-button', info: '自定义左侧滑块按钮（双滑块模式下）'},
                        {name: 'right-button', info: '自定义右侧滑块按钮（双滑块模式下）'}
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
                        {name: 'change', info: '进度值改变后触发', callback: 'event: 当前进度'},
                        {name: 'drag', info: '拖动进度条时触发', callback: 'event.value: 当前进度'},
                        {name: 'drag-start', info: '开始拖动时触发', callback: '-'},
                        {name: 'drag-end', info: '结束拖动时触发', callback: '-'},
                    ]
                },
            ]
        },
        {
            module: 'loading', content: [
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
                        {param: 'color', info: '颜色', type: 'string', default: '-'},
                        {param: 'vertical', info: '是否垂直排列图标和文字内容', type: 'boolean', default: '-'},
                        {param: 'type', info: '加载类型，可选值 spinner | circular', type: 'string', default: 'circular'},
                        {param: 'size', info: '图标大小，单位 rpx', type: 'string | number', default: '-'},
                        {param: 'text-size', info: '文字大小', type: 'string', default: '-'},
                        {param: 'text-color', info: '文字颜色', type: 'string', default: '-'},
                    ]
                },
                {
                    title: 'Slots',
                    columns: [
                        {
                            width: 200,
                            title: '名称',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        }
                    ],
                    list: [
                        {name: '-', info: '加载文案'}
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