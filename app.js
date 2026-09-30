const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');

const meta = {
  dashboard: ['Good afternoon 👋','Here is today’s business snapshot.'],
  sales: ['Daily Sales','Record the day’s sales and payment collection.'],
  expenses: ['Expenses','Track purchases and operating costs.'],
  customers: ['Customers','Understand new, returning and regular customers.'],
  analytics: ['Business Analytics','Turn daily records into useful business decisions.'],
  feedback: ['Customer Feedback','Collect private feedback and strengthen your online presence.']
};

function openPage(id){
  pages.forEach(p => p.classList.toggle('active-page', p.id === id));
  navItems.forEach(n => n.classList.toggle('active', n.dataset.page === id));
  pageTitle.textContent = meta[id][0];
  pageSubtitle.textContent = meta[id][1];
  window.scrollTo({top:0, behavior:'smooth'});
}

navItems.forEach(item => item.addEventListener('click', () => openPage(item.dataset.page)));

function showToast(message){
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => toast.classList.remove('show'), 2200);
}
