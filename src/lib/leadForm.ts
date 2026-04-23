const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ommendapara900@gmail.com';
const FORM_TARGET = 'formsubmit-hidden-target';

function ensureHiddenTarget() {
  const existing = document.getElementById(FORM_TARGET);
  if (existing) {
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.id = FORM_TARGET;
  iframe.name = FORM_TARGET;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
}

export async function submitLeadForm(subject: string, fields: Record<string, string>) {
  ensureHiddenTarget();

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = FORM_SUBMIT_ENDPOINT;
  form.target = FORM_TARGET;
  form.style.display = 'none';

  const payload: Record<string, string> = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    ...fields,
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href
  };

  Object.entries(payload).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();

  await new Promise((resolve) => {
    window.setTimeout(resolve, 400);
  });
}
