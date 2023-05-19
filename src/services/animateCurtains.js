export const closeCurtains = () => {
  const curtainBody = document.getElementById('curtainBody');
  const shield = document.getElementById('Shield');
  const leftCurtain = document.getElementById('leftCurtain');
  const rightCurtain = document.getElementById('rightCurtain');
  curtainBody.style.visibility = 'visible';
  curtainBody.style.backgroundColor = 'rgba(27, 27, 27, 0.4)';
  shield.style.transform = 'rotate(360deg)';
  leftCurtain.style.transform = 'translatex(50vw)';
  rightCurtain.style.transform = 'translatex(-50vw)';
};
export const openCurtains = () => {
  const curtainBody = document.getElementById('curtainBody');

  curtainBody.style.visibility = 'hidden';
};
