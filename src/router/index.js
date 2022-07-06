import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import CourseSelection from '@/views/CourseSelection'
import CourseDrop from '@/views/CourseDrop'
import AddCourse from '@/views/AddCourse'
import DeleteCourse from '@/views/DeleteCourse'
import ReleaseNotice from '@/views/ReleaseNotice'
import ReleaseExam from '@/views/ReleaseExam'
import ExamArrangement from '@/views/ExamArrangement'
import News from '@/views/News'
import Notastudent from '@/views/Notastudent'
import Notateacher from '@/views/Notateacher'
import index from '@/views/index.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },

  {
    path: '/index',
    component: index,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cselection',
    component: CourseSelection,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cdrop',
    component: CourseDrop,
    meta: {
      keepAlive: true
    }
  },

  {
    path: '/addcourse',
    component: AddCourse,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/deletecourse',
    component: DeleteCourse,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/releasenotice',
    component: ReleaseNotice,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/exam',
    component: ExamArrangement,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/releaseexam',
    component: ReleaseExam,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/notastudent',
    component: Notastudent,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/notateacher',
    component: Notateacher,
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes
})
//挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 增加判断条件
//   if (!tokenStr && to.path !== '/login') return next('/login')
//   next()
// })

export default router
