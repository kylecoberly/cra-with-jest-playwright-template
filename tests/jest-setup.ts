import "core-js"
import "@testing-library/jest-dom"

afterEach(async () => {
  if (window.browser){
    window.browser.close()
  }
})
