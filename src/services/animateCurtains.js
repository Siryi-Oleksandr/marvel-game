export const closeCurtains = () => {
  const curtainBody = document.getElementById('curtainBody');
  const leftCurtain = document.getElementById('leftCurtain');
  const rightCurtain = document.getElementById('rightCurtain');
  curtainBody.style.visibility = 'visible';
  leftCurtain.style.transform = 'translatex(50vw)';
  rightCurtain.style.transform = 'translatex(-50vw)';
};
export const openCurtains = () => {
  const curtainBody = document.getElementById('curtainBody');

  curtainBody.style.visibility = 'hidden';
};
