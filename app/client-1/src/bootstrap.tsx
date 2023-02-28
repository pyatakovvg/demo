
import { services } from 'kernel';

/**
 * Внутренние библиотеки
 */
import Application from "@library/app";
import { ThemeProvider } from '@library/kit';
import { DefaultWrapper, Splash } from '@library/design';

/**
 * Внешние библиотеки
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Конфигурация
 */
import publicRoutes from './configs/routes/public';
import privateRoutes from './configs/routes/private';


(async () => {
  const root = ReactDOM.createRoot(document.querySelector('#root') ! );
  const KernelProvider = services.store.Provider;

  root.render(
    <ThemeProvider defaultTheme={'light'}>
      <KernelProvider>
        <Application
          navigate={[]}
          publicRoutes={publicRoutes}
          privateRoutes={privateRoutes}
          wrappers={{
            'default': DefaultWrapper,
          }}
          splash={<Splash />}
        />
      </KernelProvider>
    </ThemeProvider>
  );
})();
