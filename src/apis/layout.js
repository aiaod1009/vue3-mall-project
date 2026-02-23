import httpInstance from "@/utils/http";

function getCategoryAPI() {
  return httpInstance({
    url: "home/category/head"

  })
}
// 在 layout.js 末尾添加导出
export { getCategoryAPI }