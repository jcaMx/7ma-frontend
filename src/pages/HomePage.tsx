import { useEffect, useState } from 'react';
import FormView from '../components/FormView';
import ProcessingView from '../components/ProcessingView';
import ResultView from '../components/ResultView';
import { getPresentationStatus } from '../api/presentation';

type ViewState = 'form' | 'processing' | 'result';

export default function HomePage() {
  const [view, setView] = useState<ViewState>('form');
  const [requestId, setRequestId] = useState<string | null>(null);
  const [slidesUrl, setSlidesUrl] = useState<string | null>(null);

  // 🔁 Poll backend while processing
  useEffect(() => {
    if (!requestId || view !== 'processing') return;

    const interval = setInterval(async () => {
      try {
        const res = await getPresentationStatus(requestId);

        if (res.status === 'completed' && res.slides_url) {
          setSlidesUrl(res.slides_url);
          setView('result');
          clearInterval(interval);
        }
        
      } catch (err) {
        console.error('Status check failed', err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [requestId, view]);

  // 🔁 Render by state
  if (view === 'form') {
    return (
      <FormView
        onSubmitted={(id) => {
          setRequestId(id);
          setView('processing');
        }}
      />
    );
  }

  if (view === 'processing') {
    return (
      <ProcessingView
        requestId={requestId!}
        onCompleted={(url) => {
          setSlidesUrl(url);
          setView('result');
        }}
      />
    );
  }
  
  return (
    <ResultView
      slidesUrl={slidesUrl!}
      onReset={() => {
        setRequestId(null);
        setSlidesUrl(null);
        setView('form');
      }}
    />
  );
}
