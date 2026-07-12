import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPresentation } from '../api/presentation';
import type { PresentationForm } from '../api/presentation';

type Props = {
  onSubmitted: (requestId: string) => void;
};

export default function FormView({ onSubmitted }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState<PresentationForm>({
    name: '',
    email: '',
    title: '',
    company: '',
    gender: '',
    bio: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key: keyof PresentationForm, value: string) =>
    setForm({ ...form, [key]: value });

  const submit = async () => {
    if (isSubmitting) return;

    if (!form.name || !form.title || !form.company) {
      alert('Name, Title, and Company are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await createPresentation(form);
      onSubmitted(res.request_id);
    } catch {
      alert('Failed to start generation');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="
      min-h-screen hero-grad bg-prussian
      text-slate-100 font-body
      selection:bg-indigo-500/30 selection:text-white
      flex items-center justify-center p-6
    ">
      <div className="
        glass w-full max-w-xl
        bg-white/10 border border-white/15
        rounded-2xl p-6 shadow-glow
      ">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 text-center sm:text-left">
          <h1 className="text-3xl font-semibold text-mustard">
            7MA Presentation Generator
          </h1>
          <button
            onClick={() => navigate('/prospects')}
            className="
              text-sm whitespace-nowrap
              px-4 py-2 rounded-lg
              bg-white/10 border border-white/15
              hover:bg-white/15 hover:border-white/20
              transition text-slate-200 hover:text-white
            "
          >
            View cached decks
          </button>
        </div>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 rounded-lg bg-white/80 text-gray-900
            p-3 border border-white/30
            focus:outline-none focus:ring-2 focus:ring-steel"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
        />

        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 rounded-lg bg-white/80 text-gray-900
              p-3 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-steel"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />

          <select
            className="w-full mb-3 rounded-lg bg-white/80 text-gray-900
              p-3 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-steel"
            value={form.gender}
            onChange={(e) => update('gender', e.target.value)}
          >
            <option value="" className="text-gray-400">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {(['title', 'company'] as const).map((f) => (
          <input
            key={f}
            type="text"
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            className="w-full mb-3 rounded-lg bg-white/80 text-gray-900
              p-3 border border-white/30
              focus:outline-none focus:ring-2 focus:ring-steel"
            value={form[f]}
            onChange={(e) => update(f, e.target.value)}
          />
        ))}

        <textarea
          placeholder="Biography"
          className="w-full mb-3 rounded-lg bg-white/80 text-gray-900
            p-3 border border-white/30 h-30 resize-none
            focus:outline-none focus:ring-2 focus:ring-steel"
          value={form.bio}
          onChange={(e) => update('bio', e.target.value)}
        />

        <textarea
          placeholder="Notes"
          className="w-full mb-4 rounded-lg bg-white/80 text-gray-900
            p-3 border border-white/30 h-30 resize-none
            focus:outline-none focus:ring-2 focus:ring-steel"
          value={form.notes}
          onChange={(e) => update('notes', e.target.value)}
        />

        <button
          onClick={submit}
          disabled={isSubmitting}
          className="
            w-full py-4 rounded-xl
            ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-steel/90 hover:bg-steel'}
            text-white font-semibold
            backdrop-blur-sm
            border border-white/20
            transition
          "
        >
          {isSubmitting ? 'Generating…' : 'Generate Presentation'}
        </button>
      </div>
    </div>
  );
}
