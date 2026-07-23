document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggle = document.getElementById('menuToggle') as HTMLButtonElement | null;
  const nav = document.getElementById('mainNav') as HTMLElement | null;

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Contact Form Mailto Handler (for contact.html)
  const enquiryForm = document.getElementById('enquiryForm') as HTMLFormElement | null;
  
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const interest = (document.getElementById('select' as string) as HTMLSelectElement)?.value || 'General';
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

      const subject = encodeURIComponent(`Enquiry: ${interest}`);
      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
      
      window.location.href = `mailto:henriclasfarms@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});