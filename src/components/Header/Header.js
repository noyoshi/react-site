import React, {
  Component
} from 'react';

const Header = () => {
  const bootStrapInfo = {
    css: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.cs",
    js:  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js",
    popper: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    jquery: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  };

  const bootStrap = (
      <link rel="stylesheet" href={bootStrapInfo.css} integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
      <script src={bootStrapInfo.js} integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
  );


  render() {
    <div>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto+Mono:500|Roboto:700" rel="stylesheet">
      <script src={bootStrapInfo.jquery} integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src={bootStrapInfo.popper} integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      { bootStrap }
    </div>
  }
}

export default Header;
