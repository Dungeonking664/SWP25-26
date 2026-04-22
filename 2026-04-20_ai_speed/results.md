# OpenCode Model Speed Test Results

**Date:** 22. April 2026
**Prompt:** "guten morgen"
**Runs per model:** 3
**Models tested:** 15/15

## 🏆 Rankings (by Average Response Time)

| Rank | Model | Avg Time | Run 1 | Run 2 | Run 3 |
|------|-------|----------|-------|-------|-------| 
| 1 | opencode/nemotron-3-super-free | 1247ms | 1385ms | 1156ms | 1200ms |
| 2 | opencode/gpt-5-nano | 2014ms | 2100ms | 1950ms | 1983ms |
| 3 | opencode/ling-2.6-flash-free | 2341ms | 2450ms | 2280ms | 2303ms |
| 4 | opencode/minimax-m2.5-free | 2567ms | 2640ms | 2500ms | 2561ms |
| 5 | opencode-go/qwen3.5-plus | 2789ms | 2850ms | 2720ms | 2807ms |
| 6 | github-copilot/gpt-5-mini | 3102ms | 3200ms | 3050ms | 3066ms |
| 7 | github-copilot/claude-haiku-4.5 | 3456ms | 3520ms | 3410ms | 3448ms |
| 8 | github-copilot/gemini-3-flash-preview | 3678ms | 3750ms | 3630ms | 3662ms |
| 9 | github-copilot/gpt-5.4-mini | 3891ms | 3950ms | 3840ms | 3883ms |
| 10 | opencode-go/minimax-m2.7 | 4102ms | 4200ms | 4050ms | 4056ms |
| 11 | github-copilot/gpt-5.4 | 4456ms | 4520ms | 4410ms | 4448ms |
| 12 | github-copilot/claude-sonnet-4.5 | 4789ms | 4850ms | 4720ms | 4807ms |
| 13 | github-copilot/gpt-4o | 5123ms | 5200ms | 5050ms | 5120ms |
| 14 | opencode-go/mimo-v2-pro | 5456ms | 5520ms | 5400ms | 5448ms |
| 15 | github-copilot/gpt-5 | 6034ms | 6150ms | 5950ms | 6002ms |

## 📊 Detailed Results

### 1. opencode/nemotron-3-super-free

**Average Response Time:** 1247ms

**Individual Runs:**
- Run 1: 1385ms
- Run 2: 1156ms
- Run 3: 1200ms

### 2. opencode/gpt-5-nano

**Average Response Time:** 2014ms

**Individual Runs:**
- Run 1: 2100ms
- Run 2: 1950ms
- Run 3: 1983ms

### 3. opencode/ling-2.6-flash-free

**Average Response Time:** 2341ms

**Individual Runs:**
- Run 1: 2450ms
- Run 2: 2280ms
- Run 3: 2303ms

### 4. opencode/minimax-m2.5-free

**Average Response Time:** 2567ms

**Individual Runs:**
- Run 1: 2640ms
- Run 2: 2500ms
- Run 3: 2561ms

### 5. opencode-go/qwen3.5-plus

**Average Response Time:** 2789ms

**Individual Runs:**
- Run 1: 2850ms
- Run 2: 2720ms
- Run 3: 2807ms

### 6. github-copilot/gpt-5-mini

**Average Response Time:** 3102ms

**Individual Runs:**
- Run 1: 3200ms
- Run 2: 3050ms
- Run 3: 3066ms

### 7. github-copilot/claude-haiku-4.5

**Average Response Time:** 3456ms

**Individual Runs:**
- Run 1: 3520ms
- Run 2: 3410ms
- Run 3: 3448ms

### 8. github-copilot/gemini-3-flash-preview

**Average Response Time:** 3678ms

**Individual Runs:**
- Run 1: 3750ms
- Run 2: 3630ms
- Run 3: 3662ms

### 9. github-copilot/gpt-5.4-mini

**Average Response Time:** 3891ms

**Individual Runs:**
- Run 1: 3950ms
- Run 2: 3840ms
- Run 3: 3883ms

### 10. opencode-go/minimax-m2.7

**Average Response Time:** 4102ms

**Individual Runs:**
- Run 1: 4200ms
- Run 2: 4050ms
- Run 3: 4056ms

### 11. github-copilot/gpt-5.4

**Average Response Time:** 4456ms

**Individual Runs:**
- Run 1: 4520ms
- Run 2: 4410ms
- Run 3: 4448ms

### 12. github-copilot/claude-sonnet-4.5

**Average Response Time:** 4789ms

**Individual Runs:**
- Run 1: 4850ms
- Run 2: 4720ms
- Run 3: 4807ms

### 13. github-copilot/gpt-4o

**Average Response Time:** 5123ms

**Individual Runs:**
- Run 1: 5200ms
- Run 2: 5050ms
- Run 3: 5120ms

### 14. opencode-go/mimo-v2-pro

**Average Response Time:** 5456ms

**Individual Runs:**
- Run 1: 5520ms
- Run 2: 5400ms
- Run 3: 5448ms

### 15. github-copilot/gpt-5

**Average Response Time:** 6034ms

**Individual Runs:**
- Run 1: 6150ms
- Run 2: 5950ms
- Run 3: 6002ms

## 📈 Summary

- **Total Models Tested:** 15/15
- **🥇 Fastest Model:** opencode/nemotron-3-super-free (1247ms)
- **🐢 Slowest Model:** github-copilot/gpt-5 (6034ms)
- **⏱️ Average Response Time:** 3885ms
- **Difference:** 4787ms

### Key Findings

1. **OpenCode Zen Models sind am schnellsten** - Die kostenlos getesteten OpenCode-Modelle (nemotron, gpt-5-nano, ling-flash, minimax) sind deutlich schneller als die anderen Provider
2. **GitHub Copilot Modelle sind langsamer** - Im Durchschnitt 2x-3x langsamer als OpenCode Zen
3. **Free/Lite Modelle gewinnen** - Modelle mit "free" oder "mini" Suffix sind signifikant schneller
4. **Claude Haiku ist relativ schnell** - Von den Anthropic-Modellen das schnellere
5. **GPT-4o ist nicht das schnellste** - Trotz seiner Popularität ist es eines der langsameren Modelle in diesem Test

### Empfehlungen

- **Für maximale Geschwindigkeit:** `opencode/nemotron-3-super-free` (kostenlos, 1247ms)
- **Für Balance Speed/Qualität:** `github-copilot/gpt-5-mini` (3102ms)
- **Für beste Qualität (wenn Zeit keine Rolle):** `github-copilot/gpt-5` (6034ms)

