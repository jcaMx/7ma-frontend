export type PresentationForm = {
  name: string;
  title: string;
  company: string;
  gender: string;
  bio: string;
  notes: string;
};

export async function createPresentation(form: PresentationForm) {
  const res = await fetch('http://localhost:5000/presentations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error('API request failed');

  return res.json(); // { request_id: string }
}
