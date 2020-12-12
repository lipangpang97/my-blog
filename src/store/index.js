import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [{
                regin: '前端技术总结',
                number: '2',
                describe: ' 记录前端遇到的一些问题，以及解决的方法 ',
                date: '2020-12-02',
                name: '构造函数的继承',
            },
            {

                regin: '前端技术总结',
                number: '1',
                describe: ' 记录前端遇到的一些问题，以及解决的方法 ',
                date: '2020-12-02',
                name: '解决vue中使用axios请求格式问题',
            }, {

                regin: '学习笔记',
                number: '1',
                describe: ' 学习前端和日语的总结笔记 ',
                date: '2020-12-02',
                name: 'IT日语词汇',
            }, {
                regin: '商务日语',
                number: '1',
                describe: ' 商务日语只是汇总',
                date: '2020-12-02',
                name: '关于日语邮件用语常见的误区',
            }
        ],

        reginData: [{
                regin: '前端技术总结',
                number: '2',
                describe: ' 记录前端遇到的一些问题，以及解决的方法 ',
            },
            {
                regin: '学习笔记',
                number: '1',
                describe: ' 学习前端和日语的总结笔记 ',
            },
            {
                regin: '商务日语',
                number: '1',
                describe: ' 记关于日语邮件用语常见的误区 ',
            }
        ],
    },


    mutations: {},
    actions: {},
    modules: {}
})