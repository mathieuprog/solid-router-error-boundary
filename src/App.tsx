import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

const App: Component = () => {
  function throwError(): string {
    throw new Error('A meaningful error message');
  }

  return (
    <>
      <Routes>
        <Route
          path={throwError()}
          element={<div>hello</div>}
        />
      </Routes>
    </>
  );
};

export default App;
