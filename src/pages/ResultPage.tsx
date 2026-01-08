import { useSearchParams, Link } from 'react-router-dom';

export default function ResultPage() {
  const [params] = useSearchParams();
  const requestId = params.get('requestId');

  return (
    <ResultView
      slidesUrl="https://docs.google.com/presentation/u/0/"
      backButton={
        <Link to="/" className="text-indigo-600 underline">
          ← Generate another presentation
        </Link>
      }
    />
  );
}
