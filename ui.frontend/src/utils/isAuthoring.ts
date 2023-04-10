export const isAuthoring = () => {
  const href =
    window.location !== window.parent.location
      ? document.referrer
      : document.location.href;

  return href.includes("/editor.html");
};
