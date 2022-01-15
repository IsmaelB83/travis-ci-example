const FAVORITE_FOOD = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule! Updated to v1.0');
    console.log(`My favorite food is ${FAVORITE_FOOD}`);
    await sleep(5000);
  }
}

main();
