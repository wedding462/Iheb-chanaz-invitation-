const moonButton = document.getElementById('moonButton');
const welcome = document.getElementById('welcome');
const invitation = document.getElementById('invitation');
const discoverButton = document.getElementById('discoverButton');
const replayButton = document.getElementById('replayButton');

function revealVisible() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function openInvitation() {
  if (document.body.classList.contains('opened')) return;
  document.body.classList.add('opened');
  moonButton.disabled = true;
  window.setTimeout(() => {
    welcome.style.display = 'none';
    invitation.classList.remove('section-hidden');
    invitation.scrollIntoView({ behavior: 'smooth', block: 'start' });
    revealVisible();
  }, 850);
}

moonButton.addEventListener('click', openInvitation);
discoverButton.addEventListener('click', () => {
  document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
});
replayButton.addEventListener('click', () => {
  document.body.classList.remove('opened');
  invitation.classList.add('section-hidden');
  welcome.style.display = '';
  moonButton.disabled = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));
});
revealVisible();
