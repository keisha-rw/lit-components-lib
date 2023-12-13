Object.defineProperty(window, 'crypto', {
  writable: true,
  value: {
    subtle: null,
    // @ts-expect-error Ignoring this type
    getRandomValues(buffer) {
      return buffer;
    },
    randomUUID() {
      return 'abc-abc-abc-abc-abc';
    },
  },
});
Object.defineProperty(window, 'open', {
  writable: true,
  value: () => {},
});
Object.defineProperty(window, 'location', {
  writable: true,
  value: {
    href: 'http://localhost:4200',
  },
});
Object.defineProperty(window, 'encodeURI', {
  writable: true,
  value: () => {},
});
Object.defineProperty(window, 'visualViewport', {
  writable: true,
  value: {
    addEventListener: () => {},
    removeEventListener: () => {},
  },
});
