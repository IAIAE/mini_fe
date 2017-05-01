export default {
    itemStatusMap: {
        0: '漂流中',
        1: '进行中',
        2: '已完成',
        3: '已取消'
    },
    defaultItem: {
        itemName: '测试物品1',
        itemDesc: '测试物品1的描述',
        imgUrl: 'test.png',
        status: 1,
        itemId: '324235234',
        operateTime: (+new Date).toString()
    },
    listCGI: 'http://makto.win/cgi/itemList',
    itemCGI: 'http://makto.win/cgi/item'
}