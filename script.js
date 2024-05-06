var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = JSON.parse(request.response);
  console.log(res);

  //a
  console.log(res.filter((ele) => ele.region == "Europe"));
  //b
  console.log(res.filter((ele) => ele.population < 200000));
  //c
  res.forEach((ele) =>
    console.log(`${ele.name.common} ${ele.flag} ${ele.capital}`)
  );
  //d
  console.log(res.reduce((a, b) => a + b.population, 0));
  //e
  console.log(
    res.filter((ele) =>
      ele.currencies != null
        ? Object.keys(ele.currencies)[0] === "USD"
          ? ele
          : false
        : false
    )
  );
};
