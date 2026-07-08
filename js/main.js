document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  initContactForms();
});

function initContactForms() {
  document.querySelectorAll('form.contact-form[data-formsubmit]').forEach((form) => {
    const thanksPath = form.dataset.thanks || 'thanks.html';
    const nextInput = form.querySelector('input[name="_next"]');
    const errorEl = form.querySelector('.form-error');
    const submitBtn = form.querySelector('button[type="submit"]');

    const setNextUrl = () => {
      if (nextInput) {
        nextInput.value = new URL(thanksPath, window.location.href).href;
      }
    };

    setNextUrl();

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!submitBtn) return;

      setNextUrl();
      if (errorEl) errorEl.hidden = true;

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中…';

      const endpoint = form.action.replace(
        'https://formsubmit.co/',
        'https://formsubmit.co/ajax/'
      );
      const payload = new FormData(form);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: payload,
          headers: { Accept: 'application/json' },
        });
        const data = await response.json();
        const ok = data.success === true || data.success === 'true';

        if (ok) {
          window.location.href = thanksPath;
          return;
        }

        throw new Error(formatFormSubmitError(data.message));
      } catch (err) {
        const message = err instanceof Error
          ? err.message
          : '送信に失敗しました。しばらくしてから再度お試しください。';

        if (errorEl) {
          errorEl.textContent = message;
          errorEl.hidden = false;
        } else {
          window.alert(message);
        }

        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  });
}

function formatFormSubmitError(message) {
  if (!message) {
    return '送信に失敗しました。しばらくしてから再度お試しください。';
  }

  if (/needs Activation/i.test(message)) {
    return 'フォームの初回設定が未完了です。kazuya@kazmoto.co.jp に届いた FormSubmit の「Activate Form」メールを開き、リンクをクリックしてから再度お試しください。迷惑メールフォルダもご確認ください。';
  }

  if (/web server/i.test(message)) {
    return 'フォームは Web サーバー経由で開いて送信してください。ローカル確認時は start.command をご利用ください。';
  }

  return message;
}
