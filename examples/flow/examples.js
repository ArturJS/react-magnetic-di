// @flow
import React, { useState } from 'react';

export function InputExample() {
  return (
    <select>
      <option>Type...?</option>
    </select>
  );
}

export function useThemeExample() {
  return useState<any>({ color: '#E77' });
}

export function useThemeExample2() {
  return useState<any>({ color: '#FA0' });
}
