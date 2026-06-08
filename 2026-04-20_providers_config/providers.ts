// HÜ5: Provider-Test und Informationen

// Diese Datei testet die vier konfigurierten Provider
// Providers: GitHub, OpenCode, NVIDIA, Google

interface ProviderInfo {
  name: string;
  key: string;
  models: string[];
  description: string;
  apiKeyEnv: string;
}

const providers: ProviderInfo[] = [
  {
    name: "GitHub Copilot",
    key: "github-copilot",
    models: ["github-copilot/gpt-4o", "github-copilot/gpt-4-turbo", "github-copilot/claude-3-opus"],
    description: "GitHub's AI models, integrated with development tools",
    apiKeyEnv: "GITHUB_TOKEN"
  },
  {
    name: "OpenCode",
    key: "opencode",
    models: ["opencode/gpt-5-nano", "opencode/gpt-5", "opencode/nemotron-3-super-free"],
    description: "Native OpenCode provider with optimized models",
    apiKeyEnv: "OPENCODE_API_KEY"
  },
  {
    name: "NVIDIA NGC",
    key: "nvidia",
    models: ["nvidia/llama-2-7b", "nvidia/llama-2-70b", "nvidia/mistral-7b"],
    description: "NVIDIA's AI models optimized for ML/AI workloads",
    apiKeyEnv: "NVIDIA_API_KEY"
  },
  {
    name: "Google Gemini",
    key: "google",
    models: ["google/gemini-pro", "google/gemini-pro-vision", "google/gemini-ultra"],
    description: "Google's advanced Gemini models with multimodal capabilities",
    apiKeyEnv: "GOOGLE_API_KEY"
  }
];

// Provider-Informationen ausgeben
console.log("=== OpenCode - KI Provider Konfiguration ===\n");

providers.forEach((provider) => {
  console.log(`\n📌 ${provider.name}`);
  console.log(`Key: ${provider.key}`);
  console.log(`Description: ${provider.description}`);
  console.log(`Environment Variable: ${provider.apiKeyEnv}`);
  console.log(`Available Models:`);
  provider.models.forEach((model) => {
    console.log(`  - ${model}`);
  });
});

// providers.txt erstellen
const providersText = providers
  .map(
    (p) => `
${p.name} (${p.key})
================
${p.description}

Models:
${p.models.map((m) => `  - ${m}`).join("\n")}

Setup:
  export ${p.apiKeyEnv}="your-api-key-here"
  opencode run "prompt" --model ${p.models[0]}
`
  )
  .join("\n");

// Auf Konsole ausgeben
console.log("\n\n=== Provider Text Output ===\n");
console.log(providersText);

// In Datei schreiben
Deno.writeTextFileSync("providers.txt", providersText);
console.log("\n✅ providers.txt created successfully!");
