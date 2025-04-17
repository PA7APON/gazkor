document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.querySelector('.form-message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      formMessage.style.display = 'none';
      formMessage.textContent = '';
      formMessage.classList.remove('success', 'error');
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
      };
  
      try {
        const response = await fetch('https://formspree.io/f/xzzeovyl', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          formMessage.style.display = 'block';
          formMessage.textContent = 'Ваше сообщение успешно отправлено!';
          formMessage.classList.add('success');
          form.reset(); 
        } else {
          formMessage.style.display = 'block';
          formMessage.textContent = 'Ошибка при отправке. Пожалуйста, попробуйте снова.';
          formMessage.classList.add('error');
        }
      } catch (error) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'Произошла ошибка. Проверьте подключение и попробуйте снова.';
        formMessage.classList.add('error');
      }
    });
  });