const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (answer) => {
  console.log(`Thank you, ${answer.trim()}`);
  const name = answer.trim();

  rl.question('What do you like to do outside your 9 - 5?', (answer) => {
    console.log(`${answer.trim()} does sound fun!`);
    const activity = answer.trim();

    rl.question('What kind of music do you listen to?', (answer) => {
      console.log(`${answer.trim()} is not my thing, but I won't judge you!`);
      const music = answer.trim();

      rl.question('Breakfast, brunch, lunch or dinner?', (answer) => {
        console.log(`Noted. ${answer.trim()} it is then!`);
        const meal = answer.trim();

        rl.question('So what do you like to eat?', (answer) => {
          console.log(`I like ${answer.trim()} too.`);
          const food = answer.trim();

          rl.question('What is your favorite sport?', (answer) => {
            console.log(`${answer.trim()} is an interesting choice of sport.`);
            const sport = answer.trim();

            rl.question('What is your superpower?', (answer) => {
              console.log(`Okay, got everything I need! Building your profile....`);
              const superpower = answer.trim();

              console.log(`${name} likes to ${activity} outside of work while listening to ${music} music, prefers ${meal} over any other meals and would eat ${food} at any given time. Favorite sport is ${sport} and believe to have the power to ${superpower}`);

              rl.close();
            })
          })
        })
      })
    })
  })
});




