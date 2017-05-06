export default {
    itemStatusMap: {
        0: '漂流中',
        1: '进行中',
        2: '已结束',
        3: '已取消'
    },
    defaultList: [],
    _defaultList: [{
        itemName: '测试物品1',
        itemDesc: '测试物品1的描述',
        imgUrl: 'test.png',
        status: 1,
        itemId: '324235234',
        operateTime: (+new Date).toString()
    }],
    //listCGI: 'http://119.29.73.170:8000/getItemList/',
    //listCGI: 'http://localhost:3008/getItemList/',
    listCGI: 'http://makto.win/cgi/itemList',
    itemCGI: 'http://makto.win/cgi/item'
}