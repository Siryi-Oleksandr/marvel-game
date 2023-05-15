export const animateCurtains = () => {
  const leftCurtain = document.getElementById('leftCurtain');
  const rightCurtain = document.getElementById('rightCurtain');
  leftCurtain.style.transform = 'translatex(50vw)';
  rightCurtain.style.transform = 'translatex(-50vw)';
};
