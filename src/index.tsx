/* @refresh reload */
import { ErrorBoundary, render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(
  () => (
    <ErrorBoundary
      fallback={(err) => {
        console.error(err);
        return <div>{err}</div>;
      }}
    >
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  ),
  root!
);
