export default function FacebookLogin() {
  console.log("ok");
  window.fbAsyncInit = function () {
    FB.init({
      appId: "285784991065754",
      cookie: true,
      xfbml: true,
      version: "la",
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus((response) => {
      console.log("ok");
      console.log(response);
    });
  };
}
