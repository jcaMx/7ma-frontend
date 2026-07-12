import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPresentations } from '../api/presentation';

type Prospect = {
  folder: string;
  name: string;
  company: string;
  title: string;
};

export default function ProspectsPage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const data = await getPresentations();
        setProspects(data.presentations);
      } catch (err) {
        console.error('Failed to load presentations', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="
      min-h-screen hero-grad bg-prussian
      text-slate-100 font-body
      selection:bg-indigo-500/30 selection:text-white
      p-6
    ">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-mustard">
            Generated Decks
          </h1>
          <button
            onClick={() => navigate('/')}
            className="
              px-4 py-2 rounded-lg
              bg-white/10 border border-white/15
              hover:bg-white/15 hover:border-white/20
              transition text-slate-200 hover:text-white
            "
          >
            Back to Generator
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-400">Loading prospects...</div>
        ) : prospects.length === 0 ? (
          <div className="text-center py-10 text-slate-400">No generated decks found in cache.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prospects.map((p) => (
              <div
                key={p.folder}
                onClick={() => navigate(`/deck/${p.folder}`)}
                className="
                  glass p-6 rounded-2xl cursor-pointer
                  bg-white/5 border border-white/10 shadow-glow
                  hover:bg-white/10 hover:border-white/20
                  transition group
                "
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-medium text-white group-hover:text-mustard transition">
                    {p.name || 'Unknown'}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-1">{p.title || 'No Title'}</p>
                <p className="text-sm text-slate-400">{p.company || 'No Company'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
