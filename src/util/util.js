
import axios from "axios"
let util = {}

// 判断数据类型，获取localStorage数据，将数据存储到localStorage
//#region type:返回对象数据类型函数
let class2type = {},
    //用于记录[object class]样式  
    arrObjs = "Boolean Number String Function Array Date RegExp Null Undefined".split(" ");
for (var i = 0, l = arrObjs.length; i < l; i++) {
    class2type["[object " + arrObjs[i] + "]"] = arrObjs[i].toLowerCase();
}
util.type = function (obj) {
    return class2type[Object.prototype.toString.call(obj)] || "object";
};
//#endregion

//#region setLocalStorageObj:设置一个对象到LocalStorage函数
util.setLocalStorageObj = function (key, val) {
    if (util.type(val) == "array" || util.type(val) == "object") { //数据类型是数组活对虾
        val = JSON.stringify(val); //Json对象转换Json字符串
    }
    localStorage[key] = val
}
//#endregion

//#region getLocalStorageObj:从LocalStorage获取一个对象的函数
util.getLocalStorageObj = function (key) {
    if (!localStorage[key]) return false;
    if (localStorage[key]) {//对应的存储变量存在
        return JSON.parse(localStorage[key]); //
    } else { //对应的存储变量不存在
        return { error: "没有获取对应的localStorage" }
    }
}
//#endregion

//timeout:基于promise的延迟函数
util.timeout = function (ms) { //使用promise封装一个延迟方法
    return new Promise((resolve) => { //resolve延迟解决后的回调函数, reject延迟异常的处理函数
        setTimeout(resolve, ms, 'done');
    });
}


//#region example：将下列对象数组存储到localStorage
// let arrPerson = [{ name: "张三", age: 17, sex: "男" }, { name: "李四", age: 27, sex: "男" }, { name: "王五", age: 13, sex: "男" }]
// util.setLocalStorageObj("arrPerson", arrPerson)
// #endregion 


util.MIX = {}

util.MIX.list = {
    data: function () {
        return {
            isSelectedAll: null,
            dataAddForm: {}, //添加商品表单数据对象
            idUpdate: null, //当前要修改的商品id
            dataUpdateForm: {}, //当前要修改的商品表单数据对象
            dataSearchForm: {}, //查询参数对象
            listData: [], //数据列表
            showdialogAdd: false, //是否显示新增商品弹窗
            showDialogUpdate: false, //是否显示修改商品弹窗
            showDialogDelete: false, //是否显示删除商品确认弹窗
        }
    },
    methods: {
        getList: async function () {
            let {
                data
            } = await axios({
                method: 'post',
                url: 'https://www.dmagic.cn/info/getCommonList',
                data: {
                    findJson: this.findJson, //拼接查询参数
                    "pageIndex": 1,
                    "pageSize": 10,
                    "_systemId": "sys_zhangjiawei",
                    "_dataType": this.dataType,
                }
            })
            let {
                list
            } = data
            this.listData = list; //用来输出列表的数组
        },
        //函数：查询数据
        filterData: async function () {
            this.getList() //调用：{ajax获取数据列表函数}
        },
        //函数：{ajax新增数据函数}
        addData: async function () {
            await axios({
                method: 'post',
                url: 'https://www.dmagic.cn/info/commonAdd',
                data: {
                    "_data": this.dataAddFormSubmit,
                    "_systemId": "sys_zhangjiawei",
                    "_dataType": this.dataType,
                }
            })
            this.getList() //调用：{ajax获取数据列表函数}
            this.showdialogAdd = false //关闭弹窗
        },
        deleteData: function (item) {//函数：{ajax删除单个数据弹窗函数}
            this.showDialogDelete = true//打开弹窗
            this.itemNeedDelete = item;//将需要删除的商品数据缓存到this

        },
        //函数：{ajax删除单个数据函数}
        deleteData2: async function (item) {
            await axios({
                method: 'post',
                url: 'https://www.dmagic.cn/info/commonDelete',
                data: {
                    "_id": item._id,
                    "_systemId": "sys_zhangjiawei",
                    "_dataType": this.dataType,
                }
            })
            this.getList() //调用：{ajax获取商品列表函数}
            alert("删除成功")
            this.showDialogDelete = false
        },
        batchDeleteGoods: async function () {//函数：{ajax批量删除商品函数}
            let listDataSelected = this.listData.filter(d => d.selected)
            if (!listDataSelected.length) return alert("未选中数据")
            console.log(`listDataSelected:`, listDataSelected);
            let arrId = listDataSelected.map(d => d._id)
            console.log(`arrId:`, arrId);
            var flag = confirm("确定删除选中数据？"); //确认弹窗
            if (!flag) return;
            await axios({
                method: 'post',
                url: 'https://www.dmagic.cn/info/commonDelete',
                data: {
                    "_id": arrId,
                    "_systemId": "sys_zhangjiawei",
                    "_dataType": this.dataType,
                }
            })
            this.getList() //调用：{ajax获取商品列表函数}
            alert("删除成功")
        },
        updateData: async function () {//函数：{ajax修改商品函数}
            await axios({ //发送ajax请求
                method: 'post',
                url: 'https://www.dmagic.cn/info/commonModify',
                data: {
                    "_id": this.idUpdate, //商品id
                    "_data": this.dataUpdateFormSubmit,
                    "_systemId": "sys_zhangjiawei",
                    "_dataType": this.dataType,
                }
            })
            this.getList() //调用：{ajax获取商品列表函数}
            this.showDialogUpdate = false //关闭弹窗
        },
        selectAll: function (flag) {//函数：{数据全选/全不选函数}
            this.listData.forEach(d => {
                this.$set(d, "selected", flag); //因为selected属性是没有注册的，需要使用$set方法来将它加入响应系统
            })
        }

    }


}
window.util = util;

export default util