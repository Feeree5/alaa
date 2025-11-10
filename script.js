if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login1.html";
}
window.addEventListener("pageshow", () => {
  if (performance.navigation.type === 2) { // المستخدم رجع للخلف
    logout();
  }
});
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login1.html";
}


  // التحقق من تسجيل الدخول
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login1.html";
  }

  // تسجيل الخروج عند إعادة تحميل الصفحة
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
  });

  // تسجيل الخروج عند الرجوع من الكاش
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("loggedInUser");
      window.location.href = "login1.html";
    }
  });