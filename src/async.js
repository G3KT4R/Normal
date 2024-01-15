// import "./index.css";

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const f1 = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1/comments',
  );
  const data = await res.json();
  console.log('-------Id div 2 = 0-------');
  console.log(data);
  await data.forEach((element) => {
    if (element.id % 2 === 0) {
      console.log(`id: ${element.id}\nname: ${element.name}`);
    }
  });
};

f1();

const f2 = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/albums/1/photos',
  );
  const data = await res.json();
  console.log('-------Title of photos with A-------');
  await data.forEach((element) => {
    if (element.title.indexOf('a') === 0) {
      console.log(`id: ${element.id}\nname: ${element.title}`);
    }
  });
};

f2();

const f3 = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/1/albums',
  );
  const data = await res.json();
  console.log('-------Id > 5-------');
  console.log(data);
  await data.forEach((element) => {
    if (element.id > 5) {
      console.log(`id: ${element.id}\nname: ${element.title}`);
    }
  });
};

f3();
