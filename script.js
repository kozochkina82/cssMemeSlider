document.querySelector('.first-point').onclick = function() {makeBtnFirstActive()};

function makeBtnFirstActive() {
  document.querySelector('.first-point').classList.add("active");
  document.querySelector('.second-point').classList.remove("active");
  document.querySelector('.third-point').classList.remove("active");
  document.querySelector('.fourth-point').classList.remove("active");
  document.querySelector('.fifth-point').classList.remove("active");
  document.querySelector('.sixth-point').classList.remove("active");
  document.querySelector('.first-slide').classList.add("active");
  document.querySelector('.second-slide').classList.remove("active");
  document.querySelector('.third-slide').classList.remove("active");
  document.querySelector('.fourth-slide').classList.remove("active");
  document.querySelector('.fifth-slide').classList.remove("active");
  document.querySelector('.sixth-slide').classList.remove("active");
  document.querySelector('.first-word').classList.add("active");
  document.querySelector('.second-word').classList.remove("active");
  document.querySelector('.third-word').classList.remove("active");
  document.querySelector('.fourth-word').classList.remove("active");
  document.querySelector('.fifth-word').classList.remove("active");
  document.querySelector('.sixth-word').classList.remove("active");
}
document.querySelector('.second-point').onclick = function() {makeBtnSecondActive()};

function makeBtnSecondActive() {
  document.querySelector('.first-point').classList.remove("active");
  document.querySelector('.second-point').classList.add("active");
  document.querySelector('.third-point').classList.remove("active");
  document.querySelector('.fourth-point').classList.remove("active");
  document.querySelector('.fifth-point').classList.remove("active");
  document.querySelector('.sixth-point').classList.remove("active");
  document.querySelector('.first-slide').classList.remove("active");
  document.querySelector('.second-slide').classList.add("active");
  document.querySelector('.third-slide').classList.remove("active");
  document.querySelector('.fourth-slide').classList.remove("active");
  document.querySelector('.fifth-slide').classList.remove("active");
  document.querySelector('.sixth-slide').classList.remove("active");
  document.querySelector('.first-word').classList.remove("active");
  document.querySelector('.second-word').classList.add("active");
  document.querySelector('.third-word').classList.remove("active");
  document.querySelector('.fourth-word').classList.remove("active");
  document.querySelector('.fifth-word').classList.remove("active");
  document.querySelector('.sixth-word').classList.remove("active");
}

document.querySelector('.third-point').onclick = function() {makeBtnThirdActive()};
function makeBtnThirdActive() {
    document.querySelector('.first-point').classList.remove("active");
    document.querySelector('.second-point').classList.remove("active");
    document.querySelector('.third-point').classList.add("active");
    document.querySelector('.fourth-point').classList.remove("active");
    document.querySelector('.fifth-point').classList.remove("active");
    document.querySelector('.sixth-point').classList.remove("active");
    document.querySelector('.first-slide').classList.remove("active");
    document.querySelector('.second-slide').classList.remove("active");
    document.querySelector('.third-slide').classList.add("active");
    document.querySelector('.fourth-slide').classList.remove("active");
    document.querySelector('.fifth-slide').classList.remove("active");
    document.querySelector('.sixth-slide').classList.remove("active");
    document.querySelector('.first-word').classList.remove("active");
    document.querySelector('.second-word').classList.remove("active");
    document.querySelector('.third-word').classList.add("active");
    document.querySelector('.fourth-word').classList.remove("active");
    document.querySelector('.fifth-word').classList.remove("active");
    document.querySelector('.sixth-word').classList.remove("active");
  }

  document.querySelector('.fourth-point').onclick = function() {makeBtnFourthActive()};
function makeBtnFourthActive() {
    document.querySelector('.first-point').classList.remove("active");
    document.querySelector('.second-point').classList.remove("active");
    document.querySelector('.third-point').classList.remove("active");
    document.querySelector('.fourth-point').classList.add("active");
    document.querySelector('.fifth-point').classList.remove("active");
    document.querySelector('.sixth-point').classList.remove("active");
    document.querySelector('.first-slide').classList.remove("active");
    document.querySelector('.second-slide').classList.remove("active");
    document.querySelector('.third-slide').classList.remove("active");
    document.querySelector('.fourth-slide').classList.add("active");
    document.querySelector('.fifth-slide').classList.remove("active");
    document.querySelector('.sixth-slide').classList.remove("active");
    document.querySelector('.first-word').classList.remove("active");
    document.querySelector('.second-word').classList.remove("active");
    document.querySelector('.third-word').classList.remove("active");
    document.querySelector('.fourth-word').classList.add("active");
    document.querySelector('.fifth-word').classList.remove("active");
    document.querySelector('.sixth-word').classList.remove("active");
  }

  document.querySelector('.fifth-point').onclick = function() {makeBtnFifthActive()};
  function makeBtnFifthActive() {
      document.querySelector('.first-point').classList.remove("active");
      document.querySelector('.second-point').classList.remove("active");
      document.querySelector('.third-point').classList.remove("active");
      document.querySelector('.fourth-point').classList.remove("active");
      document.querySelector('.fifth-point').classList.add("active");
      document.querySelector('.sixth-point').classList.remove("active");
      document.querySelector('.first-slide').classList.remove("active");
      document.querySelector('.second-slide').classList.remove("active");
      document.querySelector('.third-slide').classList.remove("active");
      document.querySelector('.fourth-slide').classList.remove("active");
      document.querySelector('.fifth-slide').classList.add("active");
      document.querySelector('.sixth-slide').classList.remove("active");
      document.querySelector('.first-word').classList.remove("active");
      document.querySelector('.second-word').classList.remove("active");
      document.querySelector('.third-word').classList.remove("active");
      document.querySelector('.fourth-word').classList.remove("active");
      document.querySelector('.fifth-word').classList.add("active");
      document.querySelector('.sixth-word').classList.remove("active");
    }

    document.querySelector('.sixth-point').onclick = function() {makeBtnSixthActive()};
    function makeBtnSixthActive() {
        document.querySelector('.first-point').classList.remove("active");
        document.querySelector('.second-point').classList.remove("active");
        document.querySelector('.third-point').classList.remove("active");
        document.querySelector('.fourth-point').classList.remove("active");
        document.querySelector('.fifth-point').classList.remove("active");
        document.querySelector('.sixth-point').classList.add("active");
        document.querySelector('.first-slide').classList.remove("active");
        document.querySelector('.second-slide').classList.remove("active");
        document.querySelector('.third-slide').classList.remove("active");
        document.querySelector('.fourth-slide').classList.remove("active");
        document.querySelector('.fifth-slide').classList.remove("active");
        document.querySelector('.sixth-slide').classList.add("active");
        document.querySelector('.first-word').classList.remove("active");
        document.querySelector('.second-word').classList.remove("active");
        document.querySelector('.third-word').classList.remove("active");
        document.querySelector('.fourth-word').classList.remove("active");
        document.querySelector('.fifth-word').classList.remove("active");
        document.querySelector('.sixth-word').classList.add("active");
      }