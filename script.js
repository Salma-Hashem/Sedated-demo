function join(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if(!email) return false;
  const subject = encodeURIComponent('SEDATED — Mailing List');
  const body = encodeURIComponent('Please add me to the SEDATED launch list.\nEmail: ' + email);
  window.location.href = `mailto:hello@sedated.example?subject=${subject}&body=${body}`;
  return false;
}
function preorder(item){
  const subject = encodeURIComponent('Pre‑Order Interest — ' + item);
  const body = encodeURIComponent('Hi SEDATED,\n\nI want to register my interest in: ' + item + '.\n\nName:\nSize (if apparel):\nShip-to city/country:\n\nThanks!');
  window.location.href = `mailto:orders@sedated.example?subject=${subject}&body=${body}`;
}
document.getElementById('year').innerText = new Date().getFullYear();