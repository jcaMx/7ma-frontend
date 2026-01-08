import { useState } from 'react';
import FormView from './components/FormView';
import ProcessingView from './components/ProcessingView';
import ResultView from './components/ResultView';

export default function App() {
  const [requestId, setRequestId] = useState<string | null>(null);
  const [slidesUrl, setSlidesUrl] = useState<string | null>(null);

  if (!requestId) {
    return <FormView onSubmitted={setRequestId} />;
  }

  if (!slidesUrl) {
    return (
      <ProcessingView
        requestId={requestId}
        onCompleted={setSlidesUrl}
      />
    );
  }

  return <ResultView slidesUrl={slidesUrl} onReset={() => {
    setRequestId(null);
    setSlidesUrl(null);
  }} />;
}
