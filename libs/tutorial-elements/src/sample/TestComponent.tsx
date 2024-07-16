'use client';

import React from 'react';
import { createComponent } from '@lit/react';

import { MyElement } from './MyElement';

export const TestComponent = createComponent({
  tagName: 'my-element',
  elementClass: MyElement,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
