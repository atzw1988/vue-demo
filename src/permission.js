import Vue from 'vue'
import router from './router'

import NProgress from 'nprogress' // progress bars
import 'nprogress/nprogress.css' // progress bar style
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle, domTitle } from './utils/domUtil'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['home', 'notify', 'form'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${domTitle} - ${to.meta.title}`))
  if (Vue.ls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === '/') {
      next()
      Vue.ls.remove(ACCESS_TOKEN)
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({
        path: '/',
        query: to.query
      })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
