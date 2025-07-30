async function measurePerformance(label, fetchFn, iterations = 100) {
    let total = 0;

    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        await fetchFn();
        const end = performance.now();
        total += (end - start);
    }

    const avg = total / iterations;
    console.log(`${label} average response time over ${iterations} runs: ${avg.toFixed(2)} ms`);
    return avg;
}

// Before optimization
async function baselineFetch() {
    await fetch('http://localhost:3000/api/v1/post');
}

// After optimization
async function customFetchWithHandler(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
}

async function customFetch() {
    await customFetchWithHandler('http://localhost:3000/api/v1/post');
}

(async () => {
    const baselineTime = await measurePerformance('Original', baselineFetch);
    const improvedTime = await measurePerformance('Optimized', customFetch);

    const improvement = ((baselineTime - improvedTime) / baselineTime) * 100;
    console.log(`\n⚡ Improvement: ${improvement.toFixed(2)}% faster`);
})();
