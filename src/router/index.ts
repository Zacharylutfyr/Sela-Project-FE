import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginComponent from "@/components/auth/LoginComponent.vue";
import RegisterComponent from "@/components/auth/RegisterComponent.vue";
import ForgotPassword from "@/components/auth/ForgotPassword.vue";
import NotFound from "@/components/pages/NotFound.vue";
import HomeComponent from "@/components/pages/HomeComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/register",
    name: "RegisterComponent",
    component: RegisterComponent,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/home",
    name: "HomeComponent",
    component: HomeComponent,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
