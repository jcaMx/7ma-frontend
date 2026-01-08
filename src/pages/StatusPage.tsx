import { useSearchParams, useNavigate } from 'react-router-dom';
import { getPresentationStatus } from '../api/presentation';
import { useEffect } from 'react';

export default function StatusPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const requestId = params.get('requestId');

  useEffect(() => {
    if (!requestId) return;

    const timer = setInterval(async () => {
      const res = await getPresentationStatus(requestId);
      if (res.status === 'completed') {
        navigate(`/result?requestId=${requestId}`);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [requestId]);

  return <ProcessingView />;
}
