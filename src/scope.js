function MyUser(name) {
  this.name = name;
}

const user1 = new MyUser('Alex');
const user2 = new MyUser('Vlad');
const user3 = new MyUser('Yuri');
const user4 = new MyUser('Oleg');
const user5 = new MyUser('Paul');

let y = 0;
const arr = [user1.name, user2.name, user3.name, user4.name, user5.name];
const buttons = document.querySelectorAll('button');
let Id1 = 0;
let Id2 = 0;

for (let i = 0; i < buttons.length - 2; i++) {
  const button = buttons[i];
  button.addEventListener('click', () => {
    switch (y) {
      case 0:
        Id1 = i;
        console.log(`${i}: ${arr[i]}`);
        console.log(`Id1 = ${Id1}`);
        break;
      case 1:
        Id2 = i;
        console.log(`${i}: ${arr[i]}`);
        console.log(`Id2 = ${Id2}`);
        break;
      default:
        console.log('People selected! \nPress OK or RESET');
        break;
    }
    if (y < 2) y++;
  });
}

buttons[6].addEventListener('click', () => {
  y = 0;
  console.log('RESET');
});

buttons[5].addEventListener('click', () => {
  if (y === 2) {
    const ch = arr[Id1];
    arr[Id1] = arr[Id2];
    arr[Id2] = ch;
    y = 0;
    console.log(`Changed! ${arr[Id2]}<--->${arr[Id1]}`);
  }
});
