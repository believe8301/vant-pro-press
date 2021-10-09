module.exports = [
    {
        title: '起步',
        collapsable: false,
        // 必要的，分组的子项目
        children: [{
            path: "/components/", title: '介绍'
        }],
    },
    {
        title: '已支持',
        collapsable: false,
        children: [
            {
                title: '基础组件',
                collapsable: false,
                children: [
                    {
                        path: "/components/content/button/", title: 'Button 按钮'
                    },
                    {
                        path: "/components/content/cell/", title: 'Cell 单元格'
                    },
                    {
                        path: "/components/content/icon/", title: 'Icon 图标'
                    },
                    {
                        path: "/components/content/image/", title: 'Image 图片'
                    },
                    {
                        path: "/components/content/layout/", title: 'Layout 布局'
                    },
                    {
                        path: "/components/content/popup/", title: 'Popup 弹出层'
                    },
                    {
                        path: "/components/content/toast/", title: 'Toast 提示'
                    },
                    {
                        path: "/components/content/transition/", title: 'Transition 动画'
                    }
                ]
            },
            {
                title: '表单组件',
                collapsable: false,
                children: [
                    {
                        path: "/components/content/calendar/", title: 'Calendar 日历'
                    },
                    {
                        path: "/components/content/checkbox/", title: 'Checkbox 复选框'
                    },
                    {
                        path: "/components/content/datetimePicker/", title: 'DatetimePicker 时间选择'
                    },
                    {
                        path: "/components/content/field/", title: 'Field 输入框'
                    },
                    {
                        path: "/components/content/picker/", title: 'Picker 选择器'
                    },
                    {
                        path: "/components/content/radio/", title: 'Radio 单选框'
                    },
                    {
                        path: "/components/content/rate/", title: 'Rate 评分'
                    },
                    {
                        path: "/components/content/search/", title: 'Search 搜索'
                    },
                ]
            },
            {
                title: '反馈组件',
                collapsable: false,
                children: [
                    {
                        path: "/components/content/loading/", title: 'Loading 加载'
                    },
                    {
                    path: "/components/content/overlay/", title: 'Overlay 遮罩层'
                }
                ]
            },
        ]
        // 必要的，分组的子项目
        // children: [{
        //     path: "/components/content/calendar/", title: 'Calendar 日历'
        // },{
        //     path: "/components/content/popup/", title: 'Popup 弹出层'
        // }, {
        //     path: "/components/content/overlay/", title: 'Overlay 遮罩层'
        // }],
    }
];
