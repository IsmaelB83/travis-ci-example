function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule! Updated to v1.0');
    await sleep(5000);
  }
}

main();
