export default {
    itemStatusMap: {
        '-1': '漂流中',
        0: '联系中',
        1: '已结束',
        2: '已取消'
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
    listCGI: 'http://119.29.73.170/getItemList/',
    // listCGI: 'http://localhost:3008/getItemList/',
    // listCGI: 'http://makto.win/cgi/itemList',
    // itemCGI: 'http://localhost:3008/item/'
    itemCGI: 'http://119.29.73.170/getItemDetail/'
}