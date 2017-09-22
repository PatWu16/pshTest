/**
 * Created by Administrator on 2017/9/12.
 */
const Index = resolve => require(['./router/index/Index.vue'], resolve)
const Scan = resolve => require(['./router/scan/Index.vue'], resolve)
const Buy = resolve => require(['./router/buy/Index.vue'], resolve)
const My = resolve => require(['./router/my/Index.vue'], resolve)

const ScanResult = resolve => require(['./router/scan/ScanResult.vue'], resolve)
const Feedback = resolve => require(['./router/scan/Feedback.vue'], resolve)

const MyInfo = resolve => require(['./router/my/customer/MyInfo.vue'], resolve)
const MyOrder = resolve => require(['./router/my/customer/MyOrder.vue'], resolve)
const MyProduct = resolve => require(['./router/my/customer/MyProduct.vue'], resolve)
const ProductList = resolve => require(['./router/my/internal/ProductList.vue'], resolve)
const CustomerList = resolve => require(['./router/my/internal/CustomerList.vue'], resolve)
const CustomerStatistics = resolve => require(['./router/my/internal/CustomerStatistics.vue'], resolve)
const CustomerOrder = resolve => require(['./router/my/internal/CustomerOrder.vue'], resolve)
const CustomerOrderDetail = resolve => require(['./router/my/internal/CustomerOrderDetail.vue'], resolve)
const PerformanceStatistics = resolve => require(['./router/my/internal/PerformanceStatistics.vue'], resolve)
const PerformanceDepartment = resolve => require(['./router/my/internal/PerformanceDepartment.vue'], resolve)
const PerformanceMember = resolve => require(['./router/my/internal/PerformanceMember.vue'], resolve)
const Logistics = resolve => require(['./router/my/internal/Logistics.vue'], resolve)
const OrderWarn = resolve => require(['./router/my/internal/OrderWarn.vue'], resolve)

export default {
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '',
        name: 'scan',
        component: Scan
      },
      {
        path: '/buy',
        name: 'buy',
        component: Buy
      },
      {
        path: '/my',
        name: 'my',
        component: My
      }
    ]
  },
  {
    path: '/scan/scanResult/:code',
    name: 'scanResult',
    component: ScanResult
  },
  {
    path: '/scan/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/my/myInfo',
    name: 'myInfo',
    component: MyInfo
  },
  {
    path: '/my/myOrder',
    name: 'myOrder',
    component: MyOrder
  },
  {
    path: '/my/myProduct',
    name: 'myProduct',
    component: MyProduct
  },
  {
    path: '/my/productList',
    name: 'productList',
    component: ProductList
  },
  {
    path: '/my/customerList',
    name: 'customerList',
    component: CustomerList
  },
  {
    path: '/my/customerStatistics',
    name: 'customerStatistics',
    component: CustomerStatistics
  },
  {
    path: '/my/customerStatistics/customerOrder/:customerName/:customerCode/:time',
    name: 'customerOrder',
    component: CustomerOrder
  },
  {
    path: '/my/customerStatistics/customerOrder/customerOrderDetail/:time/:customerCode/:orderNumber',
    name: 'customerOrderDetail',
    component: CustomerOrderDetail
  },
  {
    path: '/my/performanceStatistics',
    name: 'performanceStatistics',
    component: PerformanceStatistics
  },
  {
    path: '/my/performanceStatistics/performanceDepartment/:departmentName/:departmentId/:time',
    name: 'performanceDepartment',
    component: PerformanceDepartment
  },
  {
    path: '/my/performanceStatistics/performanceDepartment/performanceMember/:time/:departmentId/:memberId/:memberName',
    name: 'performanceMember',
    component: PerformanceMember
  },
  {
    path: '/my/logistics',
    name: 'logistics',
    component: Logistics
  },
  {
    path: '/my/orderWarn',
    name: 'orderWarn',
    component: OrderWarn
  }
  ]
}
