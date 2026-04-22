// TypeScript version for Deno
// Run with: deno run --allow-run --allow-write speedTest.ts

interface TestRun {
  responseTime: number;
}

interface TestResult {
  model: string;
  success: boolean;
  runs: TestRun[];
  averageResponseTime: number;
}

// Die 15 schnellsten Modelle (Top 15 aus deiner Liste)
const testModels: string[] = [
  "opencode/nemotron-3-super-free",
  "opencode/gpt-5-nano",
  "opencode/ling-2.6-flash-free",
  "opencode/minimax-m2.5-free",
  "opencode-go/qwen3.5-plus",
  "github-copilot/gpt-5-mini",
  "github-copilot/claude-haiku-4.5",
  "github-copilot/gemini-3-flash-preview",
  "github-copilot/gpt-5.4-mini",
  "opencode-go/minimax-m2.7",
  "github-copilot/gpt-5.4",
  "github-copilot/claude-sonnet-4.5",
  "github-copilot/gpt-4o",
  "opencode-go/mimo-v2-pro",
  "github-copilot/gpt-5",
];

const RUNS_PER_MODEL: number = 3;
const PROMPT: string = "guten morgen";
const TIMEOUT: number = 30000;

async function testModel(modelId: string): Promise<TestResult> {
  const result: TestResult = {
    model: modelId,
    success: false,
    runs: [],
    averageResponseTime: 0,
  };

  console.log(`\n🧪 Testing: ${modelId}`);

  for (let i = 0; i < RUNS_PER_MODEL; i++) {
    try {
      const startTime = Date.now();

      const command = new Deno.Command("opencode", {
        args: ["run", PROMPT, "--model", modelId],
        stdout: "piped",
        stderr: "piped",
      });

      const process = command.spawn();
      
      let completed = false;
      const timeoutId = setTimeout(() => {
        if (!completed) {
          process.kill("SIGTERM");
        }
      }, TIMEOUT);

      const output = await process.output();
      clearTimeout(timeoutId);
      completed = true;

      const responseTime = Date.now() - startTime;

      if (output.success || output.stdout.length > 0) {
        result.runs.push({ responseTime });
        console.log(`  Run ${i + 1}: ${responseTime}ms ✅`);
        result.success = true;
      } else {
        console.log(`  Run ${i + 1}: ❌ Failed`);
        if (i === 0) {
          console.log(`     Skipping model...`);
          return result;
        }
      }
    } catch (error) {
      console.log(`  Run ${i + 1}: ❌ Error - ${error.message.split('\n')[0]}`);
      if (i === 0) {
        console.log(`     Skipping model...`);
        return result;
      }
    }
  }

  if (result.runs.length > 0) {
    result.averageResponseTime =
      result.runs.reduce((sum, r) => sum + r.responseTime, 0) / result.runs.length;
  }

  return result;
}

async function main(): Promise<void> {
  console.log("🚀 OpenCode Model Speed Test");
  console.log("================================");
  console.log(`Prompt: "${PROMPT}"`);
  console.log(`Runs per model: ${RUNS_PER_MODEL}`);
  console.log(`Models to test: ${testModels.length}\n`);

  const results: TestResult[] = [];

  for (const modelId of testModels) {
    const result = await testModel(modelId);
    results.push(result);
  }

  const sortedResults = results
    .filter((r) => r.success && r.runs.length > 0)
    .sort((a, b) => a.averageResponseTime - b.averageResponseTime);

  let markdown = `# OpenCode Model Speed Test Results\n\n`;
  markdown += `**Date:** ${new Date().toLocaleString()}\n`;
  markdown += `**Prompt:** "${PROMPT}"\n`;
  markdown += `**Runs per model:** ${RUNS_PER_MODEL}\n`;
  markdown += `**Models tested:** ${sortedResults.length}/${testModels.length}\n\n`;

  markdown += `## 🏆 Rankings (by Average Response Time)\n\n`;
  markdown += `| Rank | Model | Avg Time | Run 1 | Run 2 | Run 3 |\n`;
  markdown += `|------|-------|----------|-------|-------|-------|\n`;

  sortedResults.forEach((result, index) => {
    const avg = result.averageResponseTime.toFixed(0);
    const r1 = result.runs[0] ? result.runs[0].responseTime : "-";
    const r2 = result.runs[1] ? result.runs[1].responseTime : "-";
    const r3 = result.runs[2] ? result.runs[2].responseTime : "-";
    markdown += `| ${index + 1} | ${result.model} | ${avg}ms | ${r1}ms | ${r2}ms | ${r3}ms |\n`;
  });

  markdown += `\n## 📊 Detailed Results\n\n`;

  sortedResults.forEach((result, index) => {
    markdown += `### ${index + 1}. ${result.model}\n\n`;
    markdown += `**Average Response Time:** ${result.averageResponseTime.toFixed(0)}ms\n\n`;
    markdown += `**Individual Runs:**\n`;
    result.runs.forEach((run, i) => {
      markdown += `- Run ${i + 1}: ${run.responseTime}ms\n`;
    });
    markdown += `\n`;
  });

  markdown += `## 📈 Summary\n\n`;
  if (sortedResults.length > 0) {
    const fastest = sortedResults[0];
    const slowest = sortedResults[sortedResults.length - 1];
    const avgAll =
      sortedResults.reduce((sum, r) => sum + r.averageResponseTime, 0) /
      sortedResults.length;

    markdown += `- **Total Models Tested:** ${sortedResults.length}/${testModels.length}\n`;
    markdown += `- **🥇 Fastest Model:** ${fastest.model} (${fastest.averageResponseTime.toFixed(0)}ms)\n`;
    markdown += `- **🐢 Slowest Model:** ${slowest.model} (${slowest.averageResponseTime.toFixed(0)}ms)\n`;
    markdown += `- **⏱️ Average Response Time:** ${avgAll.toFixed(0)}ms\n`;
    markdown += `- **Difference:** ${(slowest.averageResponseTime - fastest.averageResponseTime).toFixed(0)}ms\n`;
  } else {
    markdown += `- **No models successfully tested.**\n`;
  }

  await Deno.writeTextFile("results.md", markdown);
  console.log(`\n✅ Results written to: results.md`);
  console.log("\n" + markdown);
}

main().catch(console.error);
