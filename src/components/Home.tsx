import React, { useState } from 'react';

// Mocking the external library for the preview environment
const createPresentation = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { request_id: '12345-mock-id' } });
    }, 1000);
  });
};

type FormState = {
  name: string;
  title: string;
  company: string;
  gender: 'Female' | 'Male' | string;
  bio: string;
  notes: string;
};

export default function App() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState<FormState>({
    name: '',
    title: '',
    company: '',
    gender: 'Female',
    bio: '',
    notes: ''
  });

  const update = (key: keyof FormState, value: string) =>
    setForm({ ...form, [key]: value });

  const submit = async () => {
    if (!form.name || !form.title || !form.company) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      // Mocked API call
      const res = await createPresentation(form);
      // In a real app: window.location.href = `/status?requestId=${res.data.request_id}`;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 font-sans">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-green-200">
            ✓
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Submission Successful</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Your request has been received. The presentation generation process has started.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="w-full bg-slate-800 text-white py-3 px-4 rounded-md font-medium hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Start New Presentation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 sm:p-6 font-sans">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            7MA Presentation Generatorr
          </h1>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Enter the details below to generate a corporate profile.
          </p>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border-l-4 border-red-600 text-red-700 p-4 mb-6 rounded shadow-sm text-sm">
            <p className="font-medium">Missing Information</p>
            <p>Please ensure Name, Title, and Company fields are completed.</p>
          </div>
        )}

        <form className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-slate-200 flex flex-col space-y-5">
          {/* Group basic info fields for better layout on slightly larger screens */}
          <div className="space-y-5">
             {(['name', 'title', 'company'] as (keyof FormState)[]).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="mb-1.5 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                  {key} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={`e.g. ${key === 'name' ? 'Jane Doe' : key === 'title' ? 'Director' : 'Acme Corp'}`}
                  className="bg-slate-50 p-3 rounded-md border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all text-sm sm:text-base"
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <label className="mb-1.5 text-slate-700 font-semibold text-xs uppercase tracking-wider">Biography</label>
            <textarea
              placeholder="Provide a brief professional biography..."
              className="bg-slate-50 p-3 rounded-md border border-slate-300 text-slate-900 placeholder-slate-400 h-28 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all text-sm sm:text-base"
              value={form.bio}
              onChange={(e) => update('bio', e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1.5 text-slate-700 font-semibold text-xs uppercase tracking-wider">Additional Notes</label>
            <textarea
              placeholder="Any specific requirements or context..."
              className="bg-slate-50 p-3 rounded-md border border-slate-300 text-slate-900 placeholder-slate-400 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all text-sm sm:text-base"
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              disabled={status === 'loading'}
              className={`
                w-full py-3.5 px-4 rounded-md text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-sm
                ${status === 'loading' 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-indigo-800'
                }
              `}
              onClick={submit}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : 'Generate Presentation'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} 7MA Strategy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}