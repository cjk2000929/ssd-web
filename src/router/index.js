import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import CourseSelection from '@/views/CourseSelection'
import CourseDrop from '@/views/CourseDrop'
import CreditCheck from '@/views/CreditCheck'
import AddCourse from '@/views/AddCourse'
import DeleteCourse from '@/views/DeleteCourse'
import ReleaseNotice from '@/views/ReleaseNotice'
import ExamArrangement from '@/views/ExamArrangement'
import News from '@/views/News'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },

  {
    path: '/index',
    component: Index,
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
    path: '/creditCheck',
    component: CreditCheck,
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
    path: '/news',
    component: News,
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
