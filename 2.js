let age = "";
for (let i = 1; i <= 100; i++) {
  
  if (i >= 1 && i <= 17) {
    age = "ребенок";
  } else if (i >= 18 && i <= 30) {
    age = "молодой";
  } else if (i >= 31 && i <= 55) {
    age = "зрелый";
  } else {
    age = "старый";
  }
  console.log(i + " - " + age);
}