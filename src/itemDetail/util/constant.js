export default {
    itemStatusMap: {
        '-1': '漂流中',
        0: '联系中',
        1: '已结束',
        2: '已取消'
    },
    defaultItem: {
        itemName: '测试物品1',
        itemDesc: '测试物品1的描述',
        imgUrl: 'test.png',
        status: 1,
        itemId: '324235234',
        operateTime: (+new Date).toString()
    },
    confirmCGI: "/confirm/",
    cancelCGI: "/cancel/",
}