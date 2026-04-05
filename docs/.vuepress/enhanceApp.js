export default ({ router, Vue }) => {
  router.afterEach((to, from) => {
    if (to.hash) {
      setTimeout(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  });
};