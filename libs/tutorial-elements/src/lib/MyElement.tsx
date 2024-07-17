import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRoot } from 'react-dom/client';

import { MyReactComponent } from './MyReactComponent';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    const basePath = process.env.NEXT_PUBLIC_APP_URL || '';
    return html`
      <head>
        <link rel="stylesheet" href="${basePath}/tw.css" />
      </head>
      <body>
        <div id="react-root"></div>
      </body>
    `;
  }
  firstUpdated() {
    // Render the React component into the placeholder after the initial update
    const container = this.shadowRoot?.getElementById('react-root');
    if (container) {
      const root = createRoot(container);
      root.render(
        <MyReactComponent
          title="Daily Mix"
          subTitle="12 Tracks"
          caption="Frontend Radio"
          coverPhotoUrl="https://nextui.org/images/hero-card-complete.jpeg"
        />
      );
    }
  }

  disconnectedCallback() {
    // Clean up the React component when the Lit element is removed from the DOM
    const container = this.shadowRoot?.getElementById('react-root');
    if (container) {
      const root = createRoot(container);
      root.unmount();
    }
    super.disconnectedCallback();
  }
}
