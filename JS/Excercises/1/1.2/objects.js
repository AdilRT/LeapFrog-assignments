let obj = {
  name: "Adil tuladhar",
  address: "Ranibari,KTM",
  email: "adiltuladhar77@gmail.com",
  interests: "football,coding,music",
  education: [
    { name: "Shuvatara School", enrolledDate: 2004 },
    { name: "Prasadi Academy", enrolledDate: 2015 },
    { name: "Kathmandu University", enrolledDate: 2017 },
  ],
};

for (i = 0; i < obj["education"].length; i++) {
    console.log(`
    Name: ${obj["education"][i].name}, Date: ${obj["education"][i].enrolledDate}
    `
    );
}
