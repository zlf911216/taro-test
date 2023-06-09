export default defineAppConfig({
  pages: ["pages/index/index", "pages/me/index"],
  tabBar: {
    color: "#969799",
    selectedColor: "#1AB370",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/images/icon-index.png",
        selectedIconPath: "./assets/images/icon-index-active.png",
      },
      {
        pagePath: "pages/me/index",
        text: "我的",
        iconPath: "./assets/images/icon-myself.png",
        selectedIconPath: "./assets/images/icon-myself-active.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#1AB370",
    navigationBarTitleText: "易赋诊",
    navigationBarTextStyle: "white",
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  requiredPrivateInfos: ["getLocation", "onLocationChange"],
});
