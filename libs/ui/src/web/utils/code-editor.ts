export function getFileExtension(language = ''): string | null {
  const languageExtensions: Record<string, string> = {
    javascript: 'js',
    jsx: 'jsx',
    typescript: 'ts',
    tsx: 'tsx',
    python: 'py',
    java: 'java',
    c: 'c',
    cpp: 'cpp',
    csharp: 'cs',
    ruby: 'rb',
    php: 'php',
    go: 'go',
    swift: 'swift',
    kotlin: 'kt',
    rust: 'rs',
    html: 'html',
    css: 'css',
    scss: 'scss',
    sql: 'sql',
    json: 'json',
    yaml: 'yml',
    markdown: 'md',
    bash: 'sh',
    shell: 'sh',
    dart: 'dart',
    r: 'r',
    perl: 'pl',
    lua: 'lua',
  };

  const normalizedLanguage = language.trim().toLowerCase();
  return languageExtensions[normalizedLanguage] || 'txt';
}
