# HÜ5: KI-Provider in OpenCode konfigurieren

Diese Aufgabe zeigt, wie 4 verschiedene KI-Provider in OpenCode konfiguriert und genutzt werden:

1. **GitHub Copilot** - GitHub's AI-Modelle
2. **OpenCode Provider** - OpenCode's native Provider
3. **NVIDIA** - NVIDIA-Modelle über NGC
4. **Google** - Google's KI-Modelle (Gemini)

## Konfiguration der Provider

Die Provider werden in der `opencode.json` oder `opencode.jsonc` konfiguriert. Siehe `opencode.json.example` für ein Beispiel.

## Verwendung der Provider

```bash
# Mit GitHub Copilot Modell
opencode run "Schreib einen HTTP Server" --model github-copilot/gpt-4o

# Mit OpenCode Provider
opencode run "Erkläre Promises" --model opencode/gpt-5-nano

# Mit NVIDIA
opencode run "Was ist Machine Learning?" --model nvidia/llama-2-7b

# Mit Google Gemini
opencode run "Schreib Python Code" --model google/gemini-pro
```

## Vorteile verschiedener Provider:

- **GitHub Copilot**: Integration mit Developer Tools, schnelle Modelle
- **OpenCode**: Native Integration, leicht zu konfigurieren
- **NVIDIA**: Spezialisiert auf ML/AI Workloads
- **Google**: Leistungsstarke Gemini Modelle, breite Modellpalette

## Weitere Ressourcen

- OpenCode Dokumentation: https://opencode.ai/docs
- Provider Setup: https://opencode.ai/docs/providers
