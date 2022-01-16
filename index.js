console.log("Add Review in the Food Fest Page");
showReview();

let addbtn = document.getElementById("review_btn");

addbtn.addEventListener("click", function (e) {
  console.log("click");
  e.preventDefault();
  // let addReview = document.getElementById("addReview");
  let addName = document.getElementById("addName");
  console.log(addName.value);
  let selectRating = document.getElementById("select-rating");
  let desc = document.getElementById("review_desc");
  let reviewBox = localStorage.getItem("reviews_box");
  if (reviewBox == null) {
    reviewObj = [];
  } else {
    reviewObj = JSON.parse(reviewBox);
  }
  let myObj = {
    name: addName.value,
    rating: selectRating.value,
    message: desc.value,
  };
  reviewObj.push(myObj);
  localStorage.setItem("reviews_box", JSON.stringify(reviewObj));
  addName.value = "";
  selectRating.value = "Enter the Rating";
  desc.value = "";
  console.log(reviewObj);
  showReview();
});

function showReview() {
  let reviewBox = localStorage.getItem("reviews_box");
  if (reviewBox == null) {
    reviewObj = [];
  } else {
    reviewObj = JSON.parse(reviewBox);
  }
  let html = "";
  reviewObj.forEach((element, index) => {
    html += `
    <div class="noteCard my-2 mx-2 card">
      <div class="card-body">
        <h5 class="card-title">${index + 1}. ${element.name}</h5>
        <label class="review-label">Rating : ${element.rating}</label>
        <p class="card-text"> ${element.message}</p>
          <button id="${index}" onclick="deleteReview(this.id)" class="btn_review"><i class="uil uil-trash-alt review_icon"></i></button> 
      </div>
    </div>`;
  });
  let reviewElm = document.getElementById("reviews_box");
  if (reviewObj.length != 0) {
    reviewElm.innerHTML = html;
  } else {
    reviewElm.innerHTML = ``;
  }
}

function deleteReview(index) {
  console.log("Delete is Clicked and index is ", index);
  let reviewBox = localStorage.getItem("reviews_box");
  if (reviewBox == null) {
    reviewObj = [];
  } else {
    reviewObj = JSON.parse(reviewBox);
  }

  reviewObj.splice(index, 1);
  localStorage.setItem("reviews_box", JSON.stringify(reviewObj));
  showReview();
}
